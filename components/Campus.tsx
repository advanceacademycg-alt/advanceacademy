import { campus } from "@/lib/site";
export default function Campus(){
  return <section className="bg-ivory px-5 py-28"><div className="mx-auto max-w-7xl"><h2 className="text-4xl font-extrabold md:text-6xl">Where preparation happens.</h2>
    <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]">{campus.map((c,i)=>
      <div key={c.label} role="img" aria-label={c.label} style={{backgroundImage:`url(${c.photo})`}} className={`flex items-end rounded-2xl bg-green bg-cover bg-center p-4 text-ivory ${i===0?"col-span-2 row-span-2":""}`}>
        <span className="rounded-full bg-green-deep/80 px-3 py-1 text-sm">{c.label}</span></div>)}</div></div></section>;
}
