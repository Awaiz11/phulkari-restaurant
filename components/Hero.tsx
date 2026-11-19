import { PHOTOS, img } from "./data";

/** Diamond frame with a running-stitch border that sews itself in on load. */
function StitchFrame() {
  const outer = "M200 6 L394 200 L200 394 L6 200 Z";
  const inner = "M200 26 L374 200 L200 374 L26 200 Z";
  return (
    <svg className="stitch" viewBox="0 0 400 400" aria-hidden="true">
      <defs>
        {/* The mask "sews" the dashed thread in, one stitch after another */}
        <mask id="sew" maskUnits="userSpaceOnUse" x="0" y="0" width="400" height="400">
          <path className="sew sew--outer" d={outer} pathLength={1000} />
          <path className="sew sew--inner" d={inner} pathLength={1000} />
        </mask>
      </defs>
      <g mask="url(#sew)">
        <path className="thread thread--gold" d={outer} />
        <path className="thread thread--pink" d={inner} />
      </g>
      {[
        [200, 6],
        [394, 200],
        [200, 394],
        [6, 200],
      ].map(([x, y], i) => (
        <path
          key={`${x}-${y}`}
          className="knot"
          style={{ animationDelay: `${1.2 + i * 0.25}s` }}
          d={`M${x} ${y - 10} L${x + 10} ${y} L${x} ${y + 10} L${x - 10} ${y} Z`}
        />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner wrap">
        <div className="hero__copy">
          <p className="hero__name" aria-hidden="true">
            Phulkari
          </p>
          <h1 id="hero-title" className="hero__title">
            Punjabi food, cooked slow and served to share
          </h1>
          <p className="hero__lede">
            Karahi in desi ghee, kebabs off the charcoal and naan straight from the tandoor. Bring
            the whole family to DHA Phase 5.
          </p>
          <div className="hero__actions">
            <a href="#book" className="btn btn--gold">
              Book a table
            </a>
            <a href="#menu" className="btn btn--line">
              See the menu
            </a>
          </div>
          <p className="hero__hours">Lunch and dinner every day, until midnight</p>
        </div>

        <div className="hero__art">
          <div className="diamond">
            <div className="diamond__clip">
              <img
                src={img(PHOTOS.hero, 1000)}
                alt="Chicken handi in a brass pot with cream and coriander"
                fetchPriority="high"
              />
            </div>
          </div>
          <StitchFrame />
        </div>
      </div>
    </section>
  );
}
