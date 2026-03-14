import Image from "next/image";
import { Container } from "./UiBits";

const WHATSAPP_LINK = "https://wa.me/SEUNUMEROAQUI";

export default function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <Container>
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_60px_rgba(0,0,0,0.55)]">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-3 rounded-full px-3 py-2"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={221}
              height={177}
              priority
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Menu */}
          <nav className="hidden items-center gap-1 md:flex">
            <a
              className="rounded-full px-3 py-2 text-xs font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
              href="#features"
            >
              Como ajudamos
            </a>
            <a
              className="rounded-full px-3 py-2 text-xs font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
              href="#how"
            >
              Como funciona
            </a>
            <a
              className="rounded-full px-3 py-2 text-xs font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
              href="#testimonials"
            >
              Depoimentos
            </a>
            <a
              className="rounded-full px-3 py-2 text-xs font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
              href="#faq"
            >
              FAQ
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 pr-1">
            <a
              className="inline-flex items-center justify-center rounded-full bg-purple-500 px-5 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.45)] transition-all hover:scale-[1.03] hover:bg-purple-600 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quero conhecer o AtendePlay no WhatsApp"
            >
              Quero conhecer o AtendePlay →
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
