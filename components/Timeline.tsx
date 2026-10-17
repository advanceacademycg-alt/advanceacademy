"use client";
import { useEffect, useRef } from "react";
import { milestones } from "@/lib/site";
export default function Timeline(){
  const r=useRef<HTMLOListElement>(null),l=useRef<HTMLSpanElement>(null);
  useEffect(()=>{const f=()=>{const b=r.current!.getBoundingClientRect();const p=Math.min(1,Math.max(0,(innerHeight*.6-b.top)/b.height));l.current!.style.transform=`scaleY(${p})`;};
    f();addEventListener("scroll",f,{passive:true});return()=>removeEventListener("scroll",f);},[]);
  return <ol ref={r} className="relative mt-16 space-y-12 pl-8"><span className="absolute left-0 top-0 h-full w-0.5 bg-green/15"/>
    <span ref={l} className="absolute left-0 top-0 h-full w-0.5 origin-top bg-gold" style={{transform:"scaleY(0)"}}/>
    {milestones.map((m,i)=><li key={i}><p className="text-2xl font-extrabold text-green">{m.year}</p><p className="text-lg opacity-80">{m.title}</p></li>)}</ol>;
}
