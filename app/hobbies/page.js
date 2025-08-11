import Footer from "../components/footer";
import BackToTop from "../components/back-to-top";

export default function HobbiesPage() {
  const music = [
    { src: "/images/hobbies/music3.jpg", caption: "Drums + guitar" },
    { src: "/images/hobbies/music4.jpg", caption: "Sheet sketches" },
  ];

  const photos = [
    { src: "/images/hobbies/photo1.jpg", caption: "Golden hour" },
    { src: "/images/hobbies/photo2.jpg", caption: "City walk" },
    { src: "/images/hobbies/photo3.jpg", caption: "Macro try" },
    { src: "/images/hobbies/photo4.jpg", caption: "Night lights" },
  ];

  return (
    <main className="min-h-screen bg-purple-50 text-purple-950">
      <section className="max-w-6xl mx-auto px-6 py-14 space-y-16">
        {/* Header band with background image */}
        <section className="relative w-screen left-1/2 -ml-[50vw] -mr-[50vw] bg-[url('/images/header2.jpg')] bg-cover bg-center bg-fixed">
          <div className="relative z-10 py-12 md:py-16 bg-purple-950/30 backdrop-brightness-95">
            <div className="max-w-6xl mx-auto px-6">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Hobbies
              </h1>
              <p className="mt-2 text-sm md:text-base text-purple-100 max-w-2xl">
                A few passions I explore in my free time — from creating music to capturing
                moments through photography.
              </p>
            </div>
          </div>
        </section>


        {/* Music */}
        <div>
          <header className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Music</h2>
              <p className="text-purple-800/80 mt-2 max-w-2xl">
                I’ve been exploring drums and guitar this year (flute/piano long-term).
                I’m into groove-focused practice and simple songwriting.
              </p>
            </div>
          </header>

          <ul className="flex flex-wrap gap-2 mb-6">
            {["Drums", "Guitar", "Flute", "Piano", "Blogging", "Practice journaling"].map(t => (
              <li key={t} className="px-3 py-1 rounded-full bg-white border text-sm">{t}</li>
            ))}
          </ul>

          <HorizontalGallery items={music} />
        </div>

        {/* Photography */}
        <div>
          <header className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Photography</h2>
              <p className="text-purple-800/80 mt-2 max-w-2xl">
                Learning with phone photography - mostly people, street, and little textures I notice.
              </p>
            </div>
          </header>

          <ul className="flex flex-wrap gap-2 mb-6">
            {["Prime lens enjoyer", "Street", "Portraits", "Light & shadow"].map(t => (
              <li key={t} className="px-3 py-1 rounded-full bg-white border text-sm">{t}</li>
            ))}
          </ul>

          <HorizontalGallery items={photos} />
        </div>
      </section>
      <BackToTop />
      <div className="mt-50 md:mt-60"><Footer /></div>
    </main>
  );
}

/* ---------- Reusable horizontal gallery ---------- */
function HorizontalGallery({ items }) {
  return (
    <div
      className="
        relative -mx-6 px-6
        overflow-x-auto
        scroll-smooth
        snap-x snap-mandatory
        flex gap-4
        [scrollbar-width:none] [-ms-overflow-style:none]
        [&::-webkit-scrollbar]:hidden
      "
      aria-label="Scrollable gallery"
    >
      {items.map((it, i) => (
        <figure
          key={i}
          className="
            snap-start shrink-0
            w-[260px] md:w-[320px]
            rounded-2xl overflow-hidden
            bg-white border
            shadow-sm
            transition-transform
            hover:-translate-y-0.5
          "
        >
          <img
            src={it.src}
            alt={it.caption}
            className="h-48 md:h-56 w-full object-cover"
            loading="lazy"
          />
          <figcaption className="p-3 text-sm text-purple-800/90">{it.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
