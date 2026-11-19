import { PHOTOS, PLACE, img } from "./data";

const enquiry = `https://wa.me/${PLACE.whatsapp}?text=${encodeURIComponent(
  `Assalam o alaikum, I'd like to ask about booking the family hall at ${PLACE.name}.`
)}`;

export default function Events() {
  return (
    <section id="events" className="events" aria-labelledby="events-title">
      <img className="events__bg" src={img(PHOTOS.hall, 1600)} alt="" loading="lazy" />
      <div className="wrap events__inner">
        <div className="events__card">
          <h2 id="events-title" className="h2">
            Dholkis, birthdays and office dinners
          </h2>
          <p>
            The family hall upstairs seats sixty, with its own entrance and sound system. Tell us
            the date and headcount and we&apos;ll put together a set menu that fits your budget.
          </p>
          <a className="btn btn--gold" href={enquiry} target="_blank" rel="noopener noreferrer">
            Ask about the hall
          </a>
        </div>
      </div>
    </section>
  );
}
