import { testimonials } from "@/lib/site";import Photo from "./Photo";import Reveal from "./Reveal";
export default function Testimonials(){
  return <section className="bg-green px-5 py-28 text-ivory"><div className="mx-auto max-w-6xl"><h2 className="text-4xl font-extrabold md:text-6xl">In their words.</h2>
    <div className="mt-14 space-y-16">{testimonials.map((t,i)=><Reveal key={i}><figure className="grid items-center gap-8 md:grid-cols-[200px_1fr]"><Photo src={t.photo} label={t.name} className="aspect-square rounded-full"/>
      <div><blockquote className="text-2xl font-semibold leading-snug md:text-4xl">“{t.quote}”</blockquote><figcaption className="mt-4 text-gold">{t.name} · {t.course} · {t.year}</figcaption></div></figure></Reveal>)}</div></div></section>;
}
