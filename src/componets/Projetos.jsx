import {  Wrench } from "lucide-react";

export const Projetos = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Projetos em<span className="text-primary"> Destaque </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aqui estão alguns dos meus projetos recentes. Cada um foi desenvolvido com atenção aos detalhes, desempenho e experiência do usuário.
        </p>

        {}
        <div className="text-center p-16 border-2 border-dashed border-border/50 rounded-xl bg-card/50 max-w-3xl mx-auto shadow-lg">
          <Wrench className="w-12 h-12 mx-auto text-primary mb-5 animate-bounce-slow" />
          <h3 className="text-2xl font-bold text-foreground mb-3">
            {" "}
            🚧 Em Construção: Meu Portfólio de Projetos 🚧{" "}
          </h3>
          <p className="text-muted-foreground mb-6 text-lg">
            A seção de projetos está sendo cuidadosamente preparada! Ainda não há projetos em destaque para exibir, mas estou trabalhando ativamente em iniciativas incríveis.
          </p>
          <p className="text-sm text-muted-foreground/80 italic">
            Volte em breve!
          </p>
        </div>
        {
        }

      </div>
    </section>
  );
};