import { stats, results } from "@/lib/site";
import Counter from "./Counter";import ResultCard from "./ResultCard";import Reveal from "./Reveal";import Timeline from "./Timeline";
export default function Results(){
  return <><section id="results" className="bg-green px-5 py-28 text-ivory"><div className="mx-auto max-w-7xl">
    <Reveal><h2 className="max-w-3xl text-4xl font-extrabold md:text-6xl">Results are where preparation shows.</h2></Reveal>
    <dl className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">{stats.map(s=><div key={s.label}><dd className="text-5xl font-extrabold text-gold md:text-6xl"><Counter value={s.value}/></dd><dt className="mt-1 text-sm opacity-70">{s.label}</dt></div>)}</dl>
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{results.map((r,i)=><Reveal key={i}><ResultCard {...r}/></Reveal>)}</div></div></section>
    <section id="about" className="bg-ivory px-5 py-28"><div className="mx-auto max-w-4xl">
      <Reveal><h2 className="text-4xl font-extrabold md:text-6xl">10 years.<br/>Thousands of dreams.<br/>Countless stories.<br/>One commitment.</h2></Reveal><Timeline/></div></section></>;
}
