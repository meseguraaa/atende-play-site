// src/components/Landing/Steps.tsx
import Image from "next/image";
import { Container, SectionHeader, Card } from "./UiBits";

const steps = [
  {
    title: "Seus clientes agendam sozinhos",
    desc: "Seu cliente escolhe o horário disponível e confirma o agendamento, sem precisar mandar mensagem ou esperar resposta.",
    image: "/cel_agendamento.png",
  },
  {
    title: "Produtos disponíveis na hora certa",
    desc: "Seu cliente vê os produtos disponíveis, entende o que você oferece e pode comprar junto com o atendimento, sem perder tempo.",
    image: "/cel_produto.png",
  },
  {
    title: "Vantagens exclusivas",
    desc: "Clientes têm acesso a produtos de parceiros com condições especiais, descontos e novidades, tudo integrado ao atendimento.",
    image: "/cel_parceiro.png",
  },
];

export default function Steps() {
  return (
    <section id="how" className="relative pt-24 md:pt-28">
      <Container>
        <SectionHeader
          eyebrow="COMO FUNCIONA"
          title="O AtendePlay melhora a experiência de quem agenda com você, enquanto o app cuida do controle por trás."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <Card
              key={s.title}
              className="relative flex flex-col overflow-hidden p-0"
            >
              {/* Texto */}
              <div className="relative z-10 p-6">
                <h3 className="text-lg font-extrabold tracking-tight">
                  {s.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {s.desc}
                </p>
              </div>

              {/* Área da imagem – proporção exata 293x601 */}
              <div className="relative mt-auto w-full bg-[#0A0D16]">
                <div className="mx-auto aspect-[293/601] w-[293px] max-w-full">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    priority
                    className="object-contain"
                    sizes="293px"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
