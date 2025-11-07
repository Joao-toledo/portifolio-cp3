import { Estrela } from "../componets/Estrela";
import { Navbar } from "../componets/NavBar";
import { Tema } from "../componets/Tema";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Tema/>
            <Estrela />
            <Navbar />
            
        </div>
    )

};