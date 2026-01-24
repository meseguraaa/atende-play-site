import { Container, Pill, Button, FakeDashboard } from "./UiBits";

export default function Hero() {
  return (
    <section className="relative pt-16 md:pt-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight md:text-6xl">
            Organize sua agenda Controle seu negócio Faça o dinheiro sobrar
          </h1>

          <p className="mt-4 text-balance text-sm leading-relaxed text-white/65 md:text-base">
            AtendePlay automatiza agendamentos, pagamentos e comissões para quem
            precisa crescer sem complicação.
          </p>
        </div>

        <FakeDashboard />
      </Container>
    </section>
  );
}
