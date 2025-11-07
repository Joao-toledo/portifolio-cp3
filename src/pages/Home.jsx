import { Contato } from "../componets/contato";
import { Estrela } from "../componets/Estrela";
import { Habilidades } from "../componets/Habilidades";
import { Inicio } from "../componets/Inicio";
import { Navbar } from "../componets/NavBar";
import { Projetos } from "../componets/Projetos";
import { Rodape } from "../componets/Rodape";
import { SobreMim } from "../componets/SobreMim";
import { Tema } from "../componets/Tema";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Tema/>
            <Estrela />
            <Navbar />

            <main>
                <Inicio />
                <SobreMim />
                <Habilidades />
                <Projetos />
                <Contato />
            </main>
            <Rodape />
            
        </div>
    )

};