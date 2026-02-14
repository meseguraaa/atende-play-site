import {
  Container,
  SectionHeader,
  Card,
  Pill,
} from "@/components/Landing/UiBits";

export const metadata = {
  title: "Suporte – AtendePlay",
  description:
    "Central de suporte do AtendePlay. Saiba como pedir ajuda, recuperar acesso e falar com nosso time.",
};

const SUPPORT_EMAIL = "contato@atendeplay.com.br";

type SupportLink = { label: string; href: string };

type SupportSection = {
  number: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  after?: string;
  contactEmail?: string;
  links?: SupportLink[];
};

const sections: SupportSection[] = [
  {
    number: "1",
    title: "Como pedir ajuda",
    paragraphs: [
      "Se você estiver com qualquer problema para acessar ou usar o AtendePlay, fale com a gente pelo e-mail abaixo.",
      "Para agilizar, envie junto: seu nome, o e-mail usado no cadastro e uma descrição do que aconteceu (se possível, com print da tela).",
    ],
    contactEmail: SUPPORT_EMAIL,
  },
  {
    number: "2",
    title: "Problemas comuns",
    items: [
      "Não consigo fazer login",
      "Esqueci minha senha",
      "Erro ao entrar com Google / Apple",
      "App não abre ou fecha sozinho",
      "Dúvidas sobre cadastro e agendamentos",
    ],
    after:
      "Se o problema não estiver na lista, tudo bem. Descreva o que aconteceu e nós te orientamos.",
  },
  {
    number: "3",
    title: "Privacidade e dados",
    paragraphs: [
      "Se você quiser solicitar acesso, correção ou exclusão de dados, envie um e-mail com o assunto “Dados pessoais – AtendePlay”.",
      "A gente pode pedir algumas informações para confirmar sua identidade antes de atender solicitações relacionadas a dados.",
    ],
    links: [
      {
        label: "Ver Política de Privacidade",
        href: "/politica-de-privacidade",
      },
    ],
  },
  {
    number: "4",
    title: "Prazo de resposta",
    paragraphs: [
      "Nosso objetivo é responder o quanto antes. Em dias úteis, normalmente respondemos em até 1 dia útil.",
      "Em casos urgentes (ex.: acesso bloqueado), sinalize isso no assunto do e-mail.",
    ],
  },
];

function SectionCard({
  number,
  title,
  paragraphs,
  items,
  after,
  contactEmail,
  links,
}: SupportSection) {
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

      {links?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex items-center rounded-full border border-border bg-[#0A0D16] px-4 py-2 text-sm font-semibold text-white/80 hover:opacity-90"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

export default function SuportePage() {
  return (
    <main className="relative pt-24 md:pt-28">
      <Container>
        <SectionHeader
          eyebrow="SUPORTE"
          title="Suporte – AtendePlay"
          subtitle="Precisa de ajuda com acesso, cadastro ou uso do app? Fale com a gente. Vamos resolver."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sections.slice(0, 2).map((s) => (
            <SectionCard
              key={s.number}
              number={s.number}
              title={s.title}
              paragraphs={s.paragraphs}
              items={s.items}
              after={s.after}
              contactEmail={s.contactEmail}
              links={s.links}
            />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {sections.slice(2).map((s) => (
            <SectionCard
              key={s.number}
              number={s.number}
              title={s.title}
              paragraphs={s.paragraphs}
              items={s.items}
              after={s.after}
              contactEmail={s.contactEmail}
              links={s.links}
            />
          ))}
        </div>

        <div className="mt-10 pb-24">
          <Card className="p-6">
            <div className="mb-3">
              <Pill>IMPORTANTE</Pill>
            </div>
            <p className="text-sm leading-relaxed text-white/65">
              Se você estiver falando com a Apple (App Review), pode informar
              que o suporte do AtendePlay está disponível nesta página e pelo
              e-mail acima.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}
