import Image from "next/image";
import { Container } from "./Container";

type Props = {
  images: readonly string[];
  alt: string;
};

export function ProductGallery({ images, alt }: Props) {
  if (images.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="section-label text-sm">Our Work</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-serif text-ink">
              Recent installations.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {images.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-md bg-zinc-100 group"
            >
              <Image
                src={src}
                alt={`${alt} — installation ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
