import { sanityFetch } from "~/sanity/client";
import { groq } from 'next-sanity';
import Link from "next/link";

const EVENT_QUERY = groq`*[_type == "event"] { _id, title, slug, date }`;
export default async function Home() {
  const events = await sanityFetch<{ _id: string; title: string; slug: { current: string }; date: string }[]>({
    query: EVENT_QUERY
  })
  return (
    <main className="container mx-auto min-h-screen  ">
      <div className="container flex flex-col  gap-12 px-4 py-16 ">
        {events?.map((event) => (
          <Link href={`/events/${event.slug.current}`} key={event._id}>
            <div className="rounded border bg-slate-50 p-4">
              <h3 className="text-xl ">{event.title}</h3>
              {event.date && (
                <p className="pt-2 text-sm text-slate-500">{event.date}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}