"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site, waLink } from "@/lib/site";

// Scroll progress p (0..1) drives: bottom-up feathered mask reveal of each next frame
// (coat "rises" over the student), plus lighting (brightness/saturation),
// background (school green > clinical white) and text colour.
// The headline is static (no scroll text animation).
export default function HeroTransformation() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Stops iOS from re-measuring when the URL bar collapses/expands
    ScrollTrigger.config({ ignoreMobileResize: true });

    const el = root.current!;
    const L = [...el.querySelectorAll<HTMLElement>("[data-l]")];
    const stage = el.querySelector<HTMLElement>("[data-stage]")!;
    const bg = el.querySelector<HTMLElement>("[data-bg]")!;
    const n = L.length;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const u = (p: number) => {
        L.forEach((l, i) => {
          if (!i) return;
          const t = gsap.utils.clamp(0, 1, p * (n - 1) - (i - 1));
          const m = `linear-gradient(to top,#000 ${t * 150 - 50}%,transparent ${t * 150}%)`;
          l.style.webkitMaskImage = m;
          l.style.maskImage = m;
          l.style.opacity = t > 0 ? "1" : "0";
        });
        stage.style.filter = `brightness(${0.92 + p * 0.13}) saturate(${0.9 + p * 0.15})`;
        const k = gsap.utils.clamp(0, 1, (p - 0.3) / 0.6);
        bg.style.background = gsap.utils.interpolate("#0B3D2E", "#E9EFEA", k);
        el.style.color = gsap.utils.interpolate("#F7F3E8", "#072A20", k);
      };

      u(0);
      const st = ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (s) => u(s.progress),
      });
      return () => st.kill();
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      el.style.height = "auto";
      L[n - 1].style.opacity = "0";
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="home"
      ref={root}
      aria-label="Student to doctor"
      className="relative h-[420vh] text-ivory"
    >
      <div
        data-bg
        className="sticky top-0 box-border flex h-[100svh] flex-col-reverse overflow-hidden bg-green pt-20 md:grid md:grid-cols-2 md:items-center md:pt-24"
      >
        <div className="relative z-10 px-6 md:px-16">
          <h1 className="whitespace-pre-line text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-[clamp(2.5rem,min(11vh,6vw),6rem)]">
            {site.hero[0]}
          </h1>
          <p className="mt-2 max-w-md text-base opacity-80 md:text-lg">
            {site.heroSub}
          </p>
          <div className="mt-4 flex flex-wrap gap-2 md:mt-6 md:gap-3">
            <a
              href={waLink}
              className="rounded-full bg-gold px-5 py-3 text-sm font-bold text-green-deep md:px-7 md:py-3.5 md:text-base"
            >
              START YOUR JOURNEY
            </a>
            <a
              href="#results"
              className="rounded-full border border-current px-5 py-3 text-sm font-bold md:px-7 md:py-3.5 md:text-base"
            >
              EXPLORE OUR RESULTS
            </a>
            <a href={site.registerUrl}target="_blank"rel="noopener noreferrer"className="rounded-full border-2 border-gold px-7 py-3.5 font-bold">REGISTER NOW</a>
          </div>
        </div>

        <div
          data-stage
          className="relative h-[46svh] md:h-[calc(100vh-6rem)] md:origin-bottom md:translate-y-[4%] md:scale-[1.15] will-change-[filter]"
        >
          {site.frames.map((f, i) => (
            <img
              key={f}
              data-l
              src={f}
              alt={i === 0 ? "Advance Academy student preparing for NEET" : ""}
              aria-hidden={i !== 0}
              fetchPriority={i === 0 ? "high" : "auto"}
              decoding="async"
              className="absolute inset-0 h-full w-full object-contain object-bottom"
              style={i ? { opacity: 0 } : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
