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
}
