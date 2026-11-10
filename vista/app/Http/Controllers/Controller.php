<?php

namespace App\Http\Controllers;

use App\Models\Dolgozo;

class Controller {
    public function osszesDolgozo() {
        $dolgozok = Dolgozo::dolgozokLekerese();
        return response()->json($dolgozok);
    }
}
