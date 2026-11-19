import { FEASTS, PLACE } from "./data";

const orderLink = (name: string, serves: string) =>
  `https://wa.me/${PLACE.whatsapp}?text=${encodeURIComponent(
    `Assalam o alaikum, I'd like to order the ${name} (${serves}) at ${PLACE.name}. Please share the next available time.`
  )}`;

export default function Feasts() {
  return (
    <section id="dawat" className="feasts section" aria-labelledby="feasts-title">
      <div className="wrap">
        <h2 id="feasts-title" className="h2">
          Dawat platters for the whole table
        </h2>
        <p className="feasts__lede">
          Coming with family? Pick a platter and we&apos;ll have it ready when you sit down. Order a day
          ahead for groups of eight or more.
        </p>

        <div className="feasts__row">
          {FEASTS.map((f) => (
            <article key={f.name} className="feast">
              <header className="feast__head">
                <h3>{f.name}</h3>
                <p>{f.serves}</p>
              </header>
              <ul className="feast__list">
                {f.includes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p className="feast__price">Rs {f.price}</p>
              <a className="btn btn--maroon btn--block" href={orderLink(f.name, f.serves)} target="_blank" rel="noopener noreferrer">
                Order on WhatsApp
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
