import { faculty } from "@/lib/site";import Photo from "./Photo";import Reveal from "./Reveal";
export default function Faculty(){
  return <section id="faculty" className="bg-ivory px-5 py-28"><div className="mx-auto max-w-7xl"><h2 className="text-4xl font-extrabold md:text-6xl">The mentors behind the journey.</h2>
    <div className="mt-14 grid gap-8 md:grid-cols-3">{faculty.map((f,i)=><Reveal key={i}><article><Photo src={f.photo} label={f.name} className="aspect-[4/5] rounded-2xl"/>
      <h3 className="mt-4 text-2xl font-bold">{f.name}</h3><p className="font-semibold text-green">{f.subject} · {f.experience}</p><p className="opacity-70">{f.bio}</p></article></Reveal>)}</div></div></section>;
}
