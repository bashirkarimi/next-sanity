// import { groq } from 'next-sanity';

/**
 * A GROQ query to fetch event data from Sanity.
 * 
 * @remarks
 * This query fetches the `_id`, `title`, `slug`, and `date` fields of all documents with the `_type` "event".
 */
export const EVENT_QUERY = `*[_type == "event"] { _id, eventType, image, venue, name, doorsOpen, headline,  slug, date }`;
export const POST_QUERY = `*[_type == "post"][0]`;
