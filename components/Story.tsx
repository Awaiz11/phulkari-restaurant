import { PHOTOS, img } from "./data";

export default function Story() {
  return (
    <section id="story" className="story section" aria-labelledby="story-title">
      <div className="wrap story__grid">
        <div className="story__text">
          <h2 id="story-title" className="h2">
            Named after the shawls our nanis embroidered
          </h2>
          <p>
            A phulkari takes a whole winter to stitch: bright silk on rough khaddar, one small
            flower at a time. Our food is made the same patient way.
          </p>
          <p>
            The karahi goes on when you order it, the kebabs are minced by hand every morning, and
            the daal simmers through the night. It takes a little longer. It tastes like home.
          </p>
        </div>

        <ul className="pillars">
          <li>
            <h3>Desi ghee in every handi</h3>
            <p>No shortcuts with oil. Our ghee comes from a dairy farm outside Kasur.</p>
          </li>
          <li>
            <h3>Real charcoal, not gas</h3>
            <p>Seekh, tikka and chops are cooked over coal, the way they are on Food Street.</p>
          </li>
          <li>
            <h3>A family hall upstairs</h3>
            <p>Room for sixty, with its own entrance. Book it for dholkis, birthdays and dinners.</p>
          </li>
        </ul>

        <figure className="story__photo">
          <img src={img(PHOTOS.tikka, 900)} alt="Charred tandoori chicken pieces" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
