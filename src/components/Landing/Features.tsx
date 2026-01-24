// src/components/Landing/Features.tsx
import Image from "next/image";
import { Container, SectionHeader, Card, Pill } from "./UiBits";

const features = [
  {
    eyebrow: "GESTÃO DE ATENDIMENTOS",
    title: "Organizamos sua agenda para você focar no que importa.",
    desc: "Chega de agendas manuais, mensagens perdidas e horários mal aproveitados. O AtendePlay automatiza seus agendamentos e ajuda você a atender mais, com menos confusão.",
    image: "/agendamento.jpg",
  },
  {
    eyebrow: "CONTROLE FINANCEIRO",
    title: "Você entende para onde o dinheiro está indo no seu negócio.",
    desc: "Veja claramente quanto entrou, quanto saiu, quanto foi pago em comissões e quanto realmente sobrou no fim do mês.\nNada de achismo. Apenas números que fazem sentido.",
    image: "/controle_financeiro.jpg",
  },
  {
    eyebrow: "ORGANIZAÇÃO DO NEGÓCIO",
    title: "Tudo o que acontece no seu negócio em um só lugar.",
    desc: "Atendimentos, produtos, profissionais, clientes e histórico financeiro organizados de forma simples, sem planilhas complicadas.",
    image: "/organizacao.jpg",
  },
  {
    eyebrow: "DECISÕES INTELIGENTES",
    title: "Dados que ajudam você a crescer.",
    desc: "O AtendePlay transforma informações do dia a dia em dados claros, mostrando quais serviços dão mais retorno e quais produtos vendem mais.",
    image: "/decisao.jpg",
  },
  {
    eyebrow: "FEITO PARA QUEM ATENDE",
    title: "Criado para quem vive do próprio negócio",
    desc: "Salões, barbearias, estúdios, clínicas, profissionais autônomos e pequenos negócios que precisam de controle.",
    image: "/atendimento.jpg",
  },
];

function FeatureImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-[#0A0D16] p-4">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-2xl" />

      <div className="relative">
        {/* Imagem */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/5 bg-black/20 aspect-[16/9]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 520px"
          />
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative pt-24 md:pt-28">
      <Container>
        <SectionHeader
          eyebrow="COMO AJUDAMOS"
          title="Muito mais que agenda. Uma forma inteligente de gerir seu negócio."
          subtitle="O AtendePlay nasceu para ajudar micro e pequenos empreendedores a organizarem atendimentos, controlarem o financeiro e tomarem decisões melhores, usando dados reais do dia a dia."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.slice(0, 2).map((f) => (
            <Card key={f.title} className="p-6">
              <div className="mb-4">
                <Pill>{f.eyebrow}</Pill>
              </div>

              <h3 className="text-xl font-extrabold tracking-tight">
                {f.title}
              </h3>

              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-white/65">
                {f.desc}
              </p>

              <div className="mt-5">
                <FeatureImage src={f.image} alt={`${f.eyebrow} - ${f.title}`} />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {features.slice(2).map((f) => (
            <Card key={f.title} className="p-6">
              <div className="mb-4">
                <Pill>{f.eyebrow}</Pill>
              </div>

              <h3 className="text-lg font-extrabold tracking-tight">
                {f.title}
              </h3>

              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-white/65">
                {f.desc}
              </p>

              <div className="mt-5">
                <FeatureImage src={f.image} alt={`${f.eyebrow} - ${f.title}`} />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
