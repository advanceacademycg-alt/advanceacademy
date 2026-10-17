"use client";
import { useState } from "react";
import { courses } from "@/lib/site";
export default function Courses(){
  const [a,setA]=useState(0);
  return <section id="courses" className="bg-ivory px-5 py-28"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
    <h2 className="text-4xl font-extrabold md:col-span-2 md:text-6xl">Discipline starts with the right course.</h2>
    <ul role="tablist" aria-label="Courses" className="divide-y divide-green/15 border-y border-green/15">
      {courses.map((c,i)=><li key={c.title}><button role="tab" aria-selected={a===i} onMouseEnter={()=>setA(i)} onFocus={()=>setA(i)} onClick={()=>setA(i)}
        className={`flex w-full items-center justify-between py-5 text-left text-2xl font-bold transition-all md:text-3xl ${a===i?"pl-4 text-green":"text-green/40"}`}>{c.title}<span className={`h-2 w-2 rounded-full bg-gold transition-opacity ${a===i?"opacity-100":"opacity-0"}`}/></button></li>)}</ul>
    <div className="flex min-h-48 items-center rounded-3xl bg-green p-8 md:p-12"><p key={a} className="animate-[fade_.5s_ease] text-3xl font-bold leading-tight text-ivory md:text-4xl">{courses[a].tagline}</p></div>
  </div><style>{`@keyframes fade{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`}</style></section>;
}
