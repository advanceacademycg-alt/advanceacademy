"use client";
import { useRef } from "react";
import { site, waLink } from "@/lib/site";
export default function AdmissionCTA(){
  const b=useRef<HTMLAnchorElement>(null);
  const mv=(e:React.MouseEvent)=>{const r=b.current!.getBoundingClientRect();b.current!.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`;};
  return <section id="contact" className="bg-green-deep px-5 py-28 text-center text-ivory"><div className="mx-auto max-w-3xl">
    <h2 className="text-5xl font-extrabold md:text-7xl">YOUR JOURNEY STARTS HERE.</h2><p className="mt-4 text-xl opacity-80">Take the first step toward your goal.</p>
    <div className="mt-10 flex flex-wrap justify-center gap-4"><a ref={b} onMouseMove={mv} onMouseLeave={()=>b.current!.style.transform=""} href={waLink} className="rounded-full bg-gold px-8 py-4 font-bold text-green-deep transition-transform">ENQUIRE FOR ADMISSION</a>
      <a href={`tel:+91${site.phone}`} className="rounded-full border border-ivory px-8 py-4 font-bold">CALL NOW</a></div>
    <p className="mt-10 text-lg">{site.phone}</p><address className="mt-2 not-italic opacity-80">{site.address.join(", ")}</address></div></section>;
}
