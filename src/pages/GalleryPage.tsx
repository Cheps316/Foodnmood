import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpg";
import img9 from "@/assets/9.jpg";
import img10 from "@/assets/10.jpg";
import img11 from "@/assets/11.jpg";

const galleryImages = [
  {
    src: img1,
    alt: "restaurant image",
  },
  {
    src: img2,
    alt: "",
  },
  {
    src: img3,
    alt: "restaurant image",
  },
  {
    src: img4,
    alt: "restaurant image",
  },
  {
    src: img5,
    alt: "restaurant image",
  },
  {
    src: img6,
    alt: "restaurant image",
  },
  {
    src: img7,
    alt: "restaurant image",
  },
  {
    src: img8,
    alt: "restaurant image",
  },
  {
    src: img9,
    alt: "restaurant image",
  },
  {
    src: img10,
    alt: "restaurant image",
  },
  {
    src: img11,
    alt: "restaurant image",
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="mx-auto max-w-6xl px-2">
          <div className="mb-10 text-center">
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.45em] text-neutral-500">
              Gallery
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-bold">
              Some Glimpses Of Happiness
            </h2>
            <div className="mx-auto mt-5 h-px w-14 bg-neutral-300" />
          </div>

          {/* Mobile: 1 col · Tablet: 2 cols · Desktop: 3 cols — natural image sizes */}
          <div className="columns-1 gap-3 md:columns-2 lg:columns-3">
            {galleryImages.map((image, index) => (
              <a
                key={index}
                href={image.src}
                target="_blank"
                rel="noreferrer"
                className="group mb-3 block break-inside-avoid overflow-hidden bg-neutral-100"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="block h-auto w-full transition duration-500 group-hover:scale-[1.02]"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
