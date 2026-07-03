import { Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <Terminal className="h-4 w-4" />
          </span>
          <span>Tiep</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Start</Link>
          <Link to="/portfolio" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Portfolio</Link>
          <Link to="/blog" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Blog</Link>
          <Link to="/kontakt" activeProps={{ className: "text-foreground" }} className="hover:text-foreground transition-colors">Kontakt</Link>
        </nav>
        <Link to="/kontakt" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Projekt starten
        </Link>
      </div>
    </header>
  );
}
