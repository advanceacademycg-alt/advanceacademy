"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
export default function Navbar(){
  const [s,setS]=useState(false),[o,setO]=useState(false);
  useEffect(()=>{const f=()=>setS(scrollY>40);f();addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f);},[]);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${s||o?"bg-green-deep/95 backdrop-blur py-2":"py-5"}`}>
    <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-5 text-ivory">
      <a href="#home" className="flex items-center gap-3 font-bold"><img src={site.logo} alt={`${site.name} logo`} className={`transition-all ${s?"h-9":"h-12"} w-auto`}/><span className="whitespace-nowrap text-base font-bold sm:text-lg">{site.name}</span></a>
      <ul className="hidden items-center gap-8 text-sm lg:flex">{site.nav.map(([l,h])=><li key={h}><a href={h} className="hover:text-gold">{l}</a></li>)}</ul>
      <div className="flex items-center gap-3">
        <a href="#contact" className="hidden rounded-full bg-gold px-5 py-2 text-sm font-bold text-green-deep sm:block">Admission Enquiry</a>
        <button aria-label="Menu" aria-expanded={o} onClick={()=>setO(!o)} className="relative h-10 w-10 lg:hidden">
          <span className={`absolute left-2 h-0.5 w-6 bg-ivory transition-all ${o?"top-5 rotate-45":"top-3"}`}/>
          <span className={`absolute left-2 top-5 h-0.5 w-6 bg-ivory transition-opacity ${o?"opacity-0":""}`}/>
          <span className={`absolute left-2 h-0.5 w-6 bg-ivory transition-all ${o?"top-5 -rotate-45":"top-7"}`}/></button>
          </div>
          </nav>
    <div className={`grid overflow-hidden bg-green-deep text-ivory transition-all duration-300 lg:hidden ${o?"grid-rows-[1fr]":"grid-rows-[0fr]"}`}><ul className="min-h-0 px-5">
      {site.nav.map(([l,h])=><li key={h}><a onClick={()=>setO(false)} href={h} className="block border-b border-ivory/10 py-4 text-lg">{l}</a></li>)}
      <li className="py-4"><a onClick={()=>setO(false)} href="#contact" className="inline-block rounded-full bg-gold px-6 py-3 font-bold text-green-deep">Admission Enquiry</a></li></ul></div>
  </header>;
}
