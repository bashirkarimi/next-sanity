import { sanityFetch } from "~/sanity/client";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";

const EVENT_QUERY = `*[_type == "event" && slug.current == $slug][0] { _id, name, date, venue->, details }`;

const EventDetails = async ({ params }: { params: { slug: string } }) => {
  const event = await sanityFetch<{
    _id: string;
    name: string;
    date: string;
    venue: { name: string; country: string; city: string };
    city: string;
    details: PortableTextBlock;
  }>({
    query: EVENT_QUERY,
    params,
  });
  return (
    <div className="container mx-auto px-4 py-16">
      {event && (
        <div key={event._id}>
          {JSON.stringify(event)}
          {event.name && <h1 className="text-2xl">{event.name}</h1>}
          {event.date && <p className="text-sm text-slate-500">{event.date}</p>}
          {event.venue && (
            <p className="text-slate-800">
              {event.venue.name},{event.venue.city}, {event.venue.country}
            </p>
          )}
          {event.city && <p className="text-slate-800">{event.city}</p>}
          {event.details && <PortableText value={event.details} />}
        </div>
      )}
    </div>
  );
};

export default EventDetails;
