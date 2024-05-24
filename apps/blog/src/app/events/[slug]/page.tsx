import { sanityFetch } from "~/sanity/client";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const EVENT_QUERY = `*[_type == "event" && slug.current == $slug][0] { _id, title, date, venue->, details }`;

const EventDetails = async ({ params }: { params: { slug: string } }) => {

  const event = await sanityFetch<{
    _id: string;
    title: string;
    date: string;
    venue: { name: string };
    details: PortableTextBlock;
  }>({
    query: EVENT_QUERY,
    params,
  });
  return (
    <div className="container mx-auto px-4 py-16">
      {event && (
        <div key={event._id}>
          {event.title && <h1 className="text-2xl">{event.title}</h1>}
          {event.date && <p className="text-sm text-slate-500">{event.date}</p>}
          {event.venue && <p className="text-slate-800">{event.venue.name}</p>}
          {event.details && <PortableText value={event.details} />}
        </div>
      )}
    </div>
  );
};

export default EventDetails;
