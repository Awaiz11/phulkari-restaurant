"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { MENU, img } from "./data";

export default function Menu() {
  const [active, setActive] = useState(0);
  const [full, setFull] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const course = MENU[active];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % MENU.length;
    if (e.key === "ArrowLeft") next = (i - 1 + MENU.length) % MENU.length;
    if (next >= 0) {
      e.preventDefault();
      setActive(next);
      tabs.current[next]?.focus();
    }
  };

  return (
    <section id="menu" className="menu section" aria-labelledby="menu-title">
      <div className="wrap">
        <div className="menu__head">
          <h2 id="menu-title" className="h2">
            The menu
          </h2>
          <p className="menu__note">Prices in rupees, tax included. Ask us about spice levels.</p>
        </div>

        <div className="menu__tabs" role="tablist" aria-label="Menu sections">
          {MENU.map((m, i) => (
            <button
              key={m.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`tab-${m.id}`}
              aria-selected={i === active}
              aria-controls={`panel-${m.id}`}
              tabIndex={i === active ? 0 : -1}
              className="menu__tab"
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="menu__card">
          <div className="menu__photo" aria-hidden="true">
            {MENU.map((m, i) => (
              <img
                key={m.id}
                src={img(m.photo, 1100)}
                alt=""
                loading="lazy"
                className={i === active ? "is-active" : ""}
              />
            ))}
          </div>

          <div
            key={course.id}
            id={`panel-${course.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${course.id}`}
            className="menu__panel"
          >
            {course.byWeight && (
              <div className="weight" role="group" aria-label="Karahi size">
                <span className="weight__label">Karahi size</span>
                <button type="button" aria-pressed={!full} onClick={() => setFull(false)}>
                  Half kg
                </button>
                <button type="button" aria-pressed={full} onClick={() => setFull(true)}>
                  Full kg
                </button>
              </div>
            )}

            <ul className="dishes">
              {course.dishes.map((d, i) => (
                <li key={d.name} className="dish" style={{ animationDelay: `${i * 50}ms` }}>
                  <div className="dish__top">
                    <h3 className="dish__name">{d.name}</h3>
                    <span className="dish__price" aria-live="polite">
                      Rs {course.byWeight && full && d.full ? d.full : d.price}
                    </span>
                  </div>
                  <p className="dish__note">{d.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
