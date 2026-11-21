<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Routing\Controller;

class AuthController extends Controller {
    /**
     * Bejelentkezés: email + jelszó ellenőrzése, token kiadása
     */
    public function login(Request $request): JsonResponse
    {
        // 1. Validáció: megnézzük, hogy érkezett-e email és jelszó
        $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        // 2. Felhasználó keresése az email alapján
        $user = User::where('email', $request->email)->first();

        // 3. Ha nincs ilyen user, vagy a jelszó nem egyezik, hibát küldünk
        //    (Hash::check összeveti a beírt jelszót a titkosított változattal)
        // Korábban: $user->password
        if (! $user || ! Hash::check($request->password, $user->getAuthPassword())) {
            return response()->json([
                'message' => 'Hibás email cím vagy jelszó.',
            ], 401);
        }

        // 4. Token létrehozása. A 'react-app' csak egy név, hogy tudjuk, melyik eszköz kapta
        $token = $user->createToken('react-app')->plainTextToken;

        // 5. Visszaküldjük a felhasználót és a tokent
        return response()->json([
            'user'  => $user,
            'token' => $token,
        ]);
    }

    /**
     * Aktuális felhasználó lekérdezése (a React ezt használja az oldal frissítésekor)
     */
    public function me(Request $request): JsonResponse
    {
        return response()->json($request->user());
    }

    /**
     * Kijelentkezés: a jelenleg használt token törlése
     */
    public function logout(Request $request): JsonResponse
    {
        // A kérésben lévő tokent töröljük az adatbázisból
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Sikeres kijelentkezés.',
        ]);
    }
}