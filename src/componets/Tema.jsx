import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utilidade.js";

export const Tema = () => {
  const [modoEscuroAtivo, definirModoEscuroAtivo] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      definirModoEscuroAtivo(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      definirModoEscuroAtivo(false);
    }
  }, []);

  const toggleTheme = () => {
    if (modoEscuroAtivo) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      definirModoEscuroAtivo(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      definirModoEscuroAtivo(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
      {modoEscuroAtivo ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};