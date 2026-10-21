"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site, waLink } from "@/lib/site";
// Scroll progress p (0..1) drives: bottom-up feathered mask reveal of each next frame (coat "rises" over the student), plus lighting (brightness/saturation), background (school green > clinical white) and text colour.
export default function HeroTransformation(){
  const root=useRef<HTMLElement>(null);
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const el=root.current!;const L=[...el.querySelectorAll<HTMLElement>("[data-l]")];
    const C=[...el.querySelectorAll<HTMLElement>("[data-c]")];
    const stage=el.querySelector<HTMLElement>("[data-stage]")!;
    const bg=el.querySelector<HTMLElement>("[data-bg]")!;
    const n=L.length;
    const mm=gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)",()=>{
      const u=(p:number)=>{
        L.forEach((l,i)=>{if(!i)return;
          const t=gsap.utils.clamp(0,1,p*(n-1)-(i-1));
          const m=`linear-gradient(to top,#000 ${t*150-50}%,transparent ${t*150}%)`;l.style.webkitMaskImage=m;l.style.maskImage=m;l.style.opacity=t>0?"1":"0";});
        stage.style.filter=`brightness(${.92+p*.13}) saturate(${.9+p*.15})`;
        const k=gsap.utils.clamp(0,1,(p-.3)/.6);bg.style.background=gsap.utils.interpolate("#0B3D2E","#E9EFEA",k);
        el.style.color=gsap.utils.interpolate("#F7F3E8","#072A20",k);
        C.forEach((c,i)=>{const a=p>=[0,.36,.7][i]&&p<[.3,.66,1.01][i]?1:0;c.style.opacity=String(a);c.style.transform=`translateY(${a?0:24}px)`;});
      };
      u(0);const st=ScrollTrigger.create({trigger:el,start:"top top",end:"bottom bottom",scrub:true,onUpdate:s=>u(s.progress)});
      return()=>st.kill();
    });
    mm.add("(prefers-reduced-motion: reduce)",()=>{el.style.height="auto";C[0].style.opacity="1";L[n-1].style.opacity="0";});
    return()=>mm.revert();
  },[]);
  return <section id="home" ref={root} aria-label="Student to doctor" className="relative h-[420vh] text-ivory">
    <div data-bg className="sticky top-5 flex h-screen flex-col-reverse overflow-hidden bg-green md:grid md:grid-cols-2 md:items-center">
      <div className="relative z-10 px-6 md:px-16 md:pb-0 ">
        <div className="relative h-36 sm:h-44 md:h-72">
          {site.hero.map((h,i)=>{const Tag=i?"p":"h1";return <Tag key={i} data-c style={{opacity:i?0:1}} className="absolute inset-0 whitespace-pre-line text-4xl font-extrabold leading-[1.05] tracking-tight transition-all duration-500 sm:text-5xl md:text-6xl lg:text-7xl">{h}</Tag>;})}
        </div>
        <p className="mt-2 max-w-md text-base opacity-80 md:text-lg">{site.heroSub}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={waLink} className="rounded-full bg-gold px-7 py-3.5 font-bold text-green-deep">START YOUR JOURNEY</a>
          <a href="#results" className="rounded-full border border-current px-7 py-3.5 font-bold">EXPLORE OUR RESULTS</a></div>
      </div>
      <div data-stage className="relative h-[52vh] md:h-screen will-change-[filter]">
        {site.frames.map((f,i)=><img key={f} data-l src={f} alt={i===0?"Advance Academy student preparing for NEET":""} aria-hidden={i!==0} fetchPriority={i===0?"high":"auto"} decoding="async"
          className="absolute inset-0 h-full w-full object-contain object-bottom" style={i?{opacity:0}:undefined}/>)}
      </div>
      </div>
      </section>;
}
