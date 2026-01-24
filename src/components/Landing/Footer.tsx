import { Container } from "./UiBits";

export default function Footer() {
  return (
    <footer className="relative pb-10 pt-16">
      <Container>
        <div className="flex flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-extrabold tracking-tight">
                Atende Play
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-white/60">
              Seu atendimento, no modo play
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
