import ProductClient from "@/components/product-client";

export async function generateStaticParams() {
  return [
    { id: "petal-pop" },
    { id: "blush-box" },
    { id: "frame-box" },
    { id: "memory-box" },
    { id: "for-him" },
    { id: "dream-box" },
    { id: "custom-gifts" },
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  return <ProductClient id={resolvedParams.id} />;
}
