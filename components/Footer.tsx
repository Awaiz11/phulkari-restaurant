import { PLACE } from "./data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <p className="logo logo--footer">
            <span className="logo__mark" aria-hidden="true" />
            {PLACE.name}
          </p>
          <p className="footer__small">{PLACE.area}</p>
        </div>
        <p className="footer__credit">
          Phulkari is a concept restaurant. Website designed and built by{" "}
          <a href="https://nexaflow-brown.vercel.app/" target="_blank" rel="noopener noreferrer">
            NexaFlow
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
