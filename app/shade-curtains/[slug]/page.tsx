import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/ProductDetailPage";
import { PRODUCTS, getProductBySlug } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.filter((p) => p.category === "shade-curtains").map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p || p.category !== "shade-curtains") return { title: "Not Found" };
  return { title: p.title, description: p.shortBlurb };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p || p.category !== "shade-curtains") notFound();
  return <ProductDetailPage product={p} />;
}
