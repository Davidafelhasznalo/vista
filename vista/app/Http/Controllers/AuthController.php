<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Routing\Controller;

class AuthController extends Controller {
    // BEJELENKEZES
    public function login(Request $request): JsonResponse {
        $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required', 'string'],
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->getAuthPassword())) {
            return response()->json(['message' => 'Hibás email cím vagy jelszó.'], 401);
        }

        $token = $user->createToken('react-app')->plainTextToken;

        return response()->json([
            'user'  => $user,
            'is_admin' => $user->isAdmin(),
            'token' => $token,
        ]);
    }

    
    // FELHASZNALO ADATAI
    public function me(Request $request): JsonResponse {
        return response()->json($request->user());
    }


    // KIJELENTEZES
    public function logout(Request $request): JsonResponse {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Sikeres kijelentkezés.',
        ]);
    }

    // REGISZTRACIO - meg ki kell szervezni kulon fajlba (most csak proba van)
    public function registration(Request $request) {
        $jog_id = $request->json('jog_id');
        $vez_eng_id = $request->json('vez_eng_id');
        $jelszo = $request->json('jelszo');
        $telszam = $request->json('telszam');
        $email = $request->json('email');
        $ker_nev = $request->json('ker_nev');
        $vez_nev = $request->json('vez_nev');

        if (empty($jog_id) || empty($vez_eng_id) || empty($jelszo) || empty($telszam) || empty($email) || empty($ker_nev) || empty($vez_nev)) {
            return response()->json(['valasz' => 'Hiányos adatok!'], 404, [], JSON_UNESCAPED_UNICODE); 
        }

        User::regisztracio($jog_id, $vez_eng_id, $jelszo, $telszam, $email, $ker_nev, $vez_nev);
        return response()->json(['valasz' => 'Dolgozó hozzáadva a nyilvántartáshoz!'], 200, [], JSON_UNESCAPED_UNICODE); 
    }
}
