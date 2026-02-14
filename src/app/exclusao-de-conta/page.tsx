// src/app/exclusao-de-conta/page.tsx
import {
  Container,
  SectionHeader,
  Card,
  Pill,
} from "@/components/Landing/UiBits";

export const metadata = {
  title: "Exclusão de conta e dados – AtendePlay",
  description:
    "Saiba como solicitar a exclusão da sua conta e dos seus dados pessoais no AtendePlay.",
};

const sections = [
  {
    number: "1",
    title: "O que esta página faz",
    paragraphs: [
      "Esta página explica como você pode solicitar a exclusão da sua conta e a remoção dos seus dados pessoais associados ao AtendePlay.",
      "Se você quiser excluir sua conta, siga o passo a passo abaixo.",
    ],
  },
  {
    number: "2",
    title: "Como solicitar a exclusão",
    paragraphs: [
      "Envie um e-mail para o nosso suporte solicitando a exclusão.",
      "No assunto do e-mail, escreva: “Solicitação de exclusão de conta”.",
    ],
    items: [
      "Nome completo",
      "E-mail usado no cadastro",
      "Empresa vinculada (se souber) (opcional)",
      "Motivo da solicitação (opcional)",
    ],
    after:
      "Após o recebimento, podemos solicitar uma confirmação adicional para garantir que a solicitação foi feita pelo titular da conta.",
  },
  {
    number: "3",
    title: "O que será excluído",
    items: [
      "Conta de usuário e credenciais associadas",
      "Dados de perfil (nome, e-mail e informações de cadastro)",
      "Dados relacionados ao uso do aplicativo, quando aplicável",
    ],
    after:
      "A exclusão é realizada para remover a associação do usuário com o AtendePlay e apagar os dados pessoais sob nosso controle, conforme a solicitação.",
  },
  {
    number: "4",
    title: "Prazo de processamento",
    paragraphs: [
      "O prazo padrão para processamento é de até 30 dias.",
      "Em alguns casos, podemos concluir antes, dependendo do volume e da natureza dos dados.",
    ],
  },
  {
    number: "5",
    title: "Retenção por obrigação legal",
    paragraphs: [
      "Alguns dados podem precisar ser mantidos temporariamente para cumprimento de obrigações legais, regulatórias, auditorias, prevenção a fraudes e/ou resolução de disputas.",
      "Quando isso ocorrer, manteremos apenas o mínimo necessário e pelo tempo exigido.",
    ],
  },
  {
    number: "6",
    title: "Contato",
    paragraphs: [
      "Para solicitar a exclusão de conta e dados, entre em contato pelo e-mail:",
    ],
    contactEmail: "contato@atendeplay.com.br",
  },
];

function SectionCard({
  number,
  title,
  paragraphs,
  items,
  after,
  contactEmail,
}: {
  number: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  after?: string;
  contactEmail?: string;
}) {
  return (
    <Card className="p-6">
      <div className="mb-4 flex items-center gap-3">
        <Pill>{`SEÇÃO ${number}`}</Pill>
        <h2 className="text-lg font-extrabold tracking-tight">{title}</h2>
      </div>

      {paragraphs?.map((p, idx) => (
        <p key={idx} className="mt-2 text-sm leading-relaxed text-white/65">
          {p}
        </p>
      ))}

      {items?.length ? (
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-white/65">
          {items.map((it) => (
            <li key={it} className="flex gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {after ? (
        <p className="mt-3 text-sm leading-relaxed text-white/65">{after}</p>
      ) : null}

      {contactEmail ? (
        <div className="mt-4 rounded-2xl border border-border bg-[#0A0D16] p-4">
          <div className="text-sm text-white/65">
            <span className="mr-2">📧</span>
            <a
              className="font-semibold text-white underline underline-offset-4 hover:opacity-90"
              href={`mailto:${contactEmail}`}
            >
              {contactEmail}
            </a>
          </div>
        </div>
      ) : null}
    </Card>
  );
}

export default function ExclusaoDeContaPage() {
  return (
    <main className="relative pt-24 md:pt-28">
      <Container>
        <SectionHeader
          eyebrow="SUPORTE"
          title="Exclusão de conta e dados – AtendePlay"
          subtitle="Aqui você encontra o caminho oficial para solicitar a exclusão da sua conta e dos seus dados pessoais."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sections.slice(0, 4).map((s) => (
            <SectionCard
              key={s.number}
              number={s.number}
              title={s.title}
              paragraphs={s.paragraphs}
              items={s.items}
              after={s.after}
              contactEmail={s.contactEmail}
            />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {sections.slice(4).map((s) => (
            <SectionCard
              key={s.number}
              number={s.number}
              title={s.title}
              paragraphs={s.paragraphs}
              items={s.items}
              after={s.after}
              contactEmail={s.contactEmail}
            />
          ))}
        </div>

        <div className="mt-10 pb-24">
          <Card className="p-6">
            <div className="mb-3">
              <Pill>IMPORTANTE</Pill>
            </div>
            <p className="text-sm leading-relaxed text-white/65">
              Esta página existe para atender requisitos do Google Play e para
              garantir transparência ao usuário. Se você quiser, eu também posso
              adicionar “Última atualização” e um link cruzado para a sua
              Política de Privacidade.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}
