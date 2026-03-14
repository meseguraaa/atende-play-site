// src/components/Landing/Testimonials.tsx
import Image from "next/image";
import { Container, SectionHeader, Card } from "./UiBits";

const testimonials = [
  {
    name: "Kleiton Fonseca",
    role: "Espaço F.E.K.",
    text: "Depois do AtendePlay, meus clientes agendam sozinhos e eu parei de perder tempo no WhatsApp. Hoje consigo atender mais e com a agenda organizada.",
    image: "/kleiton.jpg",
  },
  /*{
    name: "Rosangela Araújo",
    role: "Beauty Academy",
    text: "Agora eu sei exatamente quanto entra, quanto pago de comissão e quanto sobra no mês. O AtendePlay me deu controle do meu negócio.",
    image: "/rosangela.jpg",
  },*/
  {
    name: "Jeferson Celani",
    role: "Seu Figas",
    text: "O sistema facilitou muito para meus clientes e pra mim. Agenda, produtos e parceiros tudo no mesmo lugar. Ficou muito mais simples trabalhar.",
    image: "/jeferson.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative pt-24 md:pt-28">
      <Container>
        <SectionHeader
          eyebrow="DEPOIMENTOS"
          title="O que nossos usuários estão dizendo"
          subtitle="Ouça pessoas que otimizaram seus agendamentos e recuperaram seu tempo."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-purple-500 bg-white/5">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>

                {/* Nome + cargo */}
                <div>
                  <div className="text-sm font-extrabold">{t.name}</div>
                  <div className="text-xs text-white/55">{t.role}</div>
                </div>
              </div>

              {/* Texto */}
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                “{t.text}”
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
