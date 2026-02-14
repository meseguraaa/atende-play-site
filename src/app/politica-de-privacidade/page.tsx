// src/app/politica-de-privacidade/page.tsx
import {
  Container,
  SectionHeader,
  Card,
  Pill,
} from "@/components/Landing/UiBits";

export const metadata = {
  title: "Política de Privacidade – AtendePlay",
  description:
    "Política de Privacidade do AtendePlay. Entenda quais dados coletamos, como usamos e como protegemos suas informações.",
};

const sections = [
  {
    number: "1",
    title: "Informações coletadas",
    items: [
      "nome",
      "e-mail",
      "dados de cadastro",
      "informações relacionadas a agendamentos e uso do aplicativo",
    ],
    after:
      "Essas informações são utilizadas exclusivamente para o funcionamento correto do serviço.",
  },
  {
    number: "2",
    title: "Uso da câmera e arquivos",
    paragraphs: [
      "O AtendePlay não acessa a câmera de forma automática.",
      "Caso o usuário opte por utilizar funcionalidades que envolvam o envio de imagens (como foto de perfil), o acesso à câmera ou à galeria será solicitado somente mediante autorização explícita do usuário, conforme exigido pelo sistema operacional Android.",
      "As imagens não são utilizadas para fins de rastreamento ou publicidade.",
    ],
  },
  {
    number: "3",
    title: "Uso das informações",
    items: [
      "permitir o funcionamento das funcionalidades do aplicativo",
      "melhorar a experiência do usuário",
      "oferecer suporte e comunicação quando necessário",
    ],
    after:
      "O AtendePlay não vende, aluga ou compartilha dados pessoais com terceiros, exceto quando necessário para o funcionamento do serviço ou por obrigação legal.",
  },
  {
    number: "4",
    title: "Armazenamento e segurança",
    paragraphs: [
      "Adotamos medidas técnicas e organizacionais para proteger as informações dos usuários contra acesso não autorizado, perda ou uso indevido.",
    ],
  },
  {
    number: "5",
    title: "Compartilhamento com terceiros",
    paragraphs: [
      "O aplicativo pode utilizar serviços de terceiros (como infraestrutura de servidores e serviços de análise) que seguem padrões adequados de segurança e privacidade.",
    ],
  },
  {
    number: "6",
    title: "Direitos do usuário",
    items: [
      "solicitar acesso, correção ou exclusão de seus dados",
      "revogar permissões concedidas ao aplicativo diretamente nas configurações do dispositivo",
    ],
  },
  {
    number: "7",
    title: "Alterações nesta política",
    paragraphs: [
      "Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que o usuário revise este documento sempre que houver alterações.",
    ],
  },
  {
    number: "8",
    title: "Contato",
    paragraphs: [
      "Em caso de dúvidas sobre esta Política de Privacidade ou sobre o uso de dados, entre em contato pelo e-mail:",
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

export default function PoliticaDePrivacidadePage() {
  return (
    <main className="relative pt-24 md:pt-28">
      <Container>
        <SectionHeader
          eyebrow="DOCUMENTO"
          title="Política de Privacidade – AtendePlay"
          subtitle="O AtendePlay valoriza a privacidade dos seus usuários e está comprometido em proteger as informações pessoais coletadas por meio do aplicativo."
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
              Recomendamos revisar esta página periodicamente para acompanhar
              atualizações. Se você quiser, posso adicionar também uma linha de
              “Última atualização” automática via env/constante, do jeitinho que
              as lojas gostam.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}
