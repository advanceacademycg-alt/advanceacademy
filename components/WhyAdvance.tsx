import { why } from "@/lib/site";import Reveal from "./Reveal";
export default function WhyAdvance(){
  return <section className="bg-green-soft px-5 py-28"><div className="mx-auto max-w-7xl"><Reveal><h2 className="max-w-3xl text-4xl font-extrabold md:text-6xl">Why students choose Advance Academy.</h2></Reveal>
    <ul className="mt-14 grid gap-x-12 gap-y-8 sm:grid-cols-2">{why.map(([t,d])=><li key={t} className="flex gap-4 border-t border-green/20 pt-5"><span aria-hidden className="mt-2 h-3 w-3 shrink-0 rounded-full bg-gold"/><div><h3 className="text-xl font-bold">{t}</h3><p className="opacity-70">{d}</p></div></li>)}</ul></div></section>;
}
