"use client";

import { useState, type FormEvent } from "react";
import { HOURS, PLACE } from "./data";

type Errors = Partial<Record<"name" | "date" | "time", string>>;

export default function Visit() {
  const [errors, setErrors] = useState<Errors>({});
  const today = new Date().toISOString().slice(0, 10);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const date = String(f.get("date") || "");
    const time = String(f.get("time") || "");
    const guests = String(f.get("guests") || "4");
    const occasion = String(f.get("occasion") || "Just dinner");

    const next: Errors = {};
    if (!name) next.name = "Add your name so we know who the table is for.";
    if (!date) next.date = "Pick a date.";
    if (!time) next.time = "Pick a time.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const when = new Date(`${date}T${time}`).toLocaleString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "numeric",
      minute: "2-digit",
    });
    const msg =
      `Assalam o alaikum, I'd like to book a table at ${PLACE.name}.\n` +
      `Name: ${name}\nGuests: ${guests}\nWhen: ${when}\nOccasion: ${occasion}`;
    window.open(`https://wa.me/${PLACE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  };

  return (
    <section id="visit" className="visit section" aria-labelledby="visit-title">
      <div className="wrap visit__grid">
        <div>
          <h2 id="visit-title" className="h2">
            Come hungry
          </h2>
          <p className="visit__address">{PLACE.area}</p>
          <a className="link" href={PLACE.mapsUrl} target="_blank" rel="noopener noreferrer">
            Get directions
          </a>

          <table className="hours">
            <caption>Opening hours</caption>
            <tbody>
              {HOURS.map((h) => (
                <tr key={h.days}>
                  <th scope="row">{h.days}</th>
                  <td>{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="visit__small">Free parking for 40 cars. Call or WhatsApp {PLACE.phoneDisplay}.</p>
        </div>

        <form id="book" className="book" onSubmit={onSubmit} noValidate>
          <h3 className="book__title">Book a table</h3>
          <p className="book__hint">We&apos;ll confirm your booking on WhatsApp.</p>

          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined} />
            {errors.name && <p className="field__error" id="err-name">{errors.name}</p>}
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="date">Date</label>
              <input id="date" name="date" type="date" min={today} aria-invalid={!!errors.date} aria-describedby={errors.date ? "err-date" : undefined} />
              {errors.date && <p className="field__error" id="err-date">{errors.date}</p>}
            </div>
            <div className="field">
              <label htmlFor="time">Time</label>
              <input id="time" name="time" type="time" aria-invalid={!!errors.time} aria-describedby={errors.time ? "err-time" : undefined} />
              {errors.time && <p className="field__error" id="err-time">{errors.time}</p>}
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="guests">Guests</label>
              <select id="guests" name="guests" defaultValue="4">
                {["2", "3", "4", "5", "6", "8", "10", "12", "15+"].map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" name="occasion" defaultValue="Just dinner">
                <option>Just dinner</option>
                <option>Birthday</option>
                <option>Family get-together</option>
                <option>Office dinner</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn--gold btn--block">
            Send booking on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
