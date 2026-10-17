import Photo from "./Photo";
export default function ResultCard(r:{name:string;exam:string;score:string;rank:string;year:string;photo:string}){
  return <article className="group overflow-hidden rounded-2xl bg-green-deep text-ivory"><Photo src={r.photo} label={r.name} className="h-64 transition-transform duration-500 group-hover:scale-105"/>
    <div className="relative bg-green-deep p-5"><h3 className="text-xl font-bold">{r.name}</h3><p className="text-sm opacity-70">{r.exam}</p>
      <p className="mt-3 text-3xl font-extrabold text-gold">{r.score}</p>{r.rank&&<p className="text-sm">Rank {r.rank}</p>}</div></article>;
}
