import Image from "next/image";
import { Container, Button } from "./UiBits";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-white/100 bg-white/100">
        <Container className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={221}
                height={177}
                priority
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* Menu */}
          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
            <a
              className="text-purple-500 hover:text-purple-600 transition-colors"
              href="#features"
            >
              Como ajudamos
            </a>
            <a
              className="text-purple-500 hover:text-purple-600 transition-colors"
              href="#how"
            >
              Como funciona
            </a>
            <a
              className="text-purple-500 hover:text-purple-600 transition-colors"
              href="#testimonials"
            >
              Depoimentos
            </a>
            <a
              className="text-purple-500 hover:text-purple-600 transition-colors"
              href="#faq"
            >
              FAQ
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2"></div>
        </Container>
      </div>
    </header>
  );
}
