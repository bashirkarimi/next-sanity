import { sanityFetch } from "~/sanity/client";
import Link from "next/link";
import { EVENT_QUERY } from "~/sanity/queries";

export default async function Home() {
  const events = await sanityFetch<
    {
      _id: string;
      name: string;
      eventType: string;
      image: string;
      slug: { current: string };
      date: string;
    }[]
  >({
    query: EVENT_QUERY,
  });
  return (
    <main className="container mx-auto min-h-screen  ">
      <div className="container flex flex-col  gap-12 px-4 py-16 ">
        {events?.map((event) => (
          <>
            <Link href={`/events/${event.slug.current}`} key={event._id}>
              <div className="rounded border bg-slate-50 p-4">
                <h3 className="text-xl ">{event.name}</h3>
                <div className="pt-2 text-sm text-slate-500">
                  {event.date && (
                    <p className="pt-2 text-sm text-slate-500">{event.date}</p>
                  )}
                  <p>{event.eventType}</p>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </main>
  );
}
