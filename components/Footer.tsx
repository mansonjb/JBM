import ImageSlot from "./ImageSlot";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="overflow-x-clip pt-[80px] pb-10 lg:pt-[100px]">
      <div className="grid grid-cols-1 items-end gap-10 px-[6vw] sm:grid-cols-[minmax(0,1fr)_200px]">
        <div>
          <a
            href={`mailto:${site.email}`}
            className="u-display block text-[clamp(24px,3.4vw,58px)] leading-[1.05] tracking-[-0.01em] text-ink transition-colors hover:text-blue"
          >
            {site.email}
          </a>
          <a
            href={`tel:${site.phoneHref}`}
            className="u-display u-num mt-2 block text-[clamp(24px,3.4vw,58px)] leading-[1.05] tracking-[-0.01em] text-ink transition-colors hover:text-blue"
          >
            {site.phone}
          </a>
        </div>

        <div className="relative">
          <div className="relative h-[190px] w-[150px]">
            <ImageSlot brief="PHOTO 4 — médaillon, décontracté, instantané" />
          </div>
          <span className="u-hand absolute -top-6 -left-7 text-[26px] text-blue">
            c&apos;est moi
          </span>
          <svg
            viewBox="0 0 80 60"
            aria-hidden="true"
            className="pointer-events-none absolute top-0.5 left-[34px] h-[52px] w-[70px] overflow-visible"
          >
            <path
              d="M4 6 C24 14 38 26 52 42"
              fill="none"
              stroke="#1F3BD8"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M52 42 L40 40 M52 42 L50 30"
              fill="none"
              stroke="#1F3BD8"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="mt-16 pl-[6vw] whitespace-nowrap lg:mt-20">
        <div className="u-display text-[clamp(120px,24vw,420px)] leading-[0.82] tracking-[-0.04em] text-ink">
          {site.name}
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-between gap-3 border-t border-line px-[6vw] pt-5 text-[12px] tracking-[0.06em] text-muted uppercase sm:flex-row sm:gap-8">
        <span>{site.author}</span>
        <a href="/mentions-legales" className="text-muted hover:text-blue">
          Mentions légales
        </a>
      </div>
    </footer>
  );
}
