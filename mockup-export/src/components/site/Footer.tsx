export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-muted-foreground">
        <div>
          <div className="font-display text-foreground font-semibold">vuxuantiep.de — IT Freelancer</div>
          <div className="mt-1">Cloud · KI · Web Engineering</div>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">GitHub</a>
          <a href="#" className="hover:text-foreground">LinkedIn</a>
          <a href="#" className="hover:text-foreground">Mastodon</a>
          <a href="#" className="hover:text-foreground">RSS</a>
        </div>
        <div>© {new Date().getFullYear()} · Impressum · Datenschutz</div>
      </div>
    </footer>
  );
}
