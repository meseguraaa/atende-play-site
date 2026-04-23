// src/components/Landing/FAQ.tsx
import { Container, SectionHeader, Card } from "./UiBits";

const faqs = [
  {
    q: "O AtendePlay cobra mensalidade?",
    a: "Não. O AtendePlay não cobra mensalidade fixa. Nosso modelo foi pensado para não pesar no seu caixa e crescer junto com o seu negócio.",
  },
  {
    q: "O aplicativo é exclusivo para o meu negócio?",
    a: "Sim. Cada cliente AtendePlay tem um aplicativo próprio, com a identidade do seu negócio. Seu logo, suas cores e sua marca, entregando uma experiência profissional para seus clientes.",
  },
  {
    q: "Posso vender qualquer tipo de produto pelo app?",
    a: "Sim. Você pode cadastrar e vender qualquer produto, inclusive produtos de parceiros. Essa é uma excelente forma de aumentar o faturamento além dos atendimentos.",
  },
  {
    q: "Existe limite para cadastro de produtos, serviços ou profissionais?",
    a: "Não. Você pode cadastrar quantos produtos, serviços e profissionais quiser, sem limitações. O AtendePlay acompanha o crescimento do seu negócio.",
  },
  {
    q: "O AtendePlay oferece suporte?",
    a: "Sim. Nosso time acompanha você de perto, oferecendo suporte contínuo e orientação, para garantir que você utilize a plataforma da melhor forma e tenha resultados reais.",
  },
  {
    q: "Como funcionam as parcerias no AtendePlay?",
    a: "Nós cuidamos de toda a conexão com nossos parceiros para que eles estejam integrados ao seu negócio. Você não precisa negociar, configurar ou se preocupar com nada. O AtendePlay gerencia essas parcerias e você aproveita os benefícios sem custo adicional.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-border bg-white/3 p-5 open:bg-white/5">
      <summary className="cursor-pointer list-none select-none">
        <div className="flex items-center justify-between gap-4">
          <div className="text-sm font-extrabold text-white/90">{q}</div>
          <div className="grid h-8 w-8 place-items-center rounded-full border border-border bg-white/5 text-white/70 transition group-open:rotate-45">
            +
          </div>
        </div>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-white/65">{a}</p>
    </details>
  );
}

export default function FAQ() {
  const left = faqs.slice(0, 3);
  const right = faqs.slice(3);

  const whatsappNumber = "5511985970667";
  const whatsappMessage = "Olá! Quero conhecer o AtendePlay.";
  const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="faq" className="relative pt-24 md:pt-28">
      <Container>
        <SectionHeader
          eyebrow="COM DÚVIDAS?"
          title="Encontre respostas rápidas sobre nosso produto."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            {left.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
          <div className="space-y-4">
            {right.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Card className="flex flex-col items-center justify-between gap-4 p-6 md:flex-row">
            <div>
              <div className="text-sm font-extrabold">
                Dê o próximo passo para organizar seu negócio.
              </div>
              <div className="mt-1 text-sm text-white/65">
                Converse com a gente no WhatsApp e descubra como o AtendePlay
                pode ajudar você a ganhar tempo e controle.
              </div>
            </div>

            <a
              className="inline-flex items-center justify-center rounded-full bg-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quero conhecer o AtendePlay no WhatsApp"
            >
              Quero conhecer o AtendePlay →
            </a>
          </Card>
        </div>
      </Container>
    </section>
  );
}
