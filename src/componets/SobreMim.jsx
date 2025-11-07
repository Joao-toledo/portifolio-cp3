import { Github, Code, Database } from "lucide-react";

export const SobreMim = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Estudante de Engenharia de Software na FIAP
            </h3>

            <p className="text-muted-foreground">
              Tenho interesse em tecnologia e no desenvolvimento de soluções para problemas, sempre buscando aprender novas ferramentas e aprimorar minhas habilidades técnicas. Atualmente, estou focado em construir uma base sólida em programação, boas práticas e experiência com projetos práticos.
            </p>

            <p className="text-muted-foreground">
              Acredito no poder da tecnologia para transformar o mundo e conectar pessoas. Busco desafios que me façam evoluir, aprimorando minhas habilidades com curiosidade e dedicação. Meu objetivo é crescer como desenvolvedor e contribuir para projetos inovadores e impactantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Meu contato
              </a>

              <a
                href="/src/assets/Currículo - João.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Meu Currículo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Python</h4>
                  <p className="text-muted-foreground">
                    Desenvolvimento de soluções automatizadas, análise de dados e aplicações utilizando bibliotecas modernas para otimizar processos e resolver problemas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Banco de Dados</h4>
                  <p className="text-muted-foreground">
                    Modelagem, integração e manipulação de dados com PostgreSQL, garantindo eficiência e consistência nas aplicações.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Github className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Git/GitHub</h4>
                  <p className="text-muted-foreground">
                    Uso diário de Git e GitHub para controle de versões, colaboração e gerenciamento de projetos, mantendo o código sempre limpo e bem documentado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};