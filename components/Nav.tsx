import { nav, site } from "@/lib/site";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 flex items-baseline justify-between border-b border-line bg-paper/92 px-[6vw] py-4 backdrop-blur-sm">
      <a
        href="#top"
        className="u-display text-lg tracking-[0.02em] text-ink md:text-xl"
      >
        {site.name}
      </a>
      <div className="hidden gap-6 text-[13px] tracking-[0.08em] text-muted uppercase md:flex lg:gap-7">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="u-link"
          >
            {item.label}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="text-[12px] tracking-[0.08em] text-blue uppercase md:hidden"
      >
        Contact
      </a>
    </nav>
  );
}
