import { modules } from "@/data/modules";
import ModulePageClient from "./ModulePageClient";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ModulePageClient slug={slug} />;
}
