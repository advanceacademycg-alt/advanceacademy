import { director } from "@/lib/site";
import Photo from "./Photo";
import Reveal from "./Reveal";
export default function Director() {
  return (
    <section id="director" className="bg-green-soft px-5 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[2fr_3fr]">
        <Reveal>
          <Photo
            src={director.photo}
            label={director.name}
            className="aspect-[4/5] rounded-3xl"
          />
        </Reveal>
        <Reveal>
          <h2 className="text-4xl font-extrabold md:text-6xl">
            A message from the Director.
          </h2>
          <blockquote className="mt-8 text-xl leading-relaxed opacity-80 md:text-2xl">
            “{director.message}”
          </blockquote>
          <p className="mt-8 text-2xl font-bold">{director.name}</p>
          <p className="font-semibold text-green">{director.title}</p>
          {director.qualification && (
            <p className="opacity-70">{director.qualification}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
