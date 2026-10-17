import { site } from "@/lib/site";
export default function Footer(){
  return <footer className="bg-green-deep px-5 py-10 text-center text-sm text-ivory/70">{site.offer&&<p className="mb-3 font-semibold text-gold">{site.offer}</p>}
    <p>{site.name}, {site.cityHi} · {site.tagline}</p><p className="mt-1">© {new Date().getFullYear()} {site.name}</p></footer>;
}
