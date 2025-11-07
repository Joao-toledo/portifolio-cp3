import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const Tema  = () => {
    const [modoEscuroAtivo, definirModoEscuroAtivo] = useState(false);

    return <button> {modoEscuroAtivo ?  <Sun /> : <Moon />}</button>
}