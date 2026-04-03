import Bundles from "../components/Bundles";

export const metadata = {
  title: "Skincare Bundles & Kits — Arjel Cosmeceuticals",
  description: "Curated kits that work in synergy. Save more when you build a complete skincare routine.",
};

export default function BundlesPage() {
  return (
    <main className="min-h-screen pt-20 bg-bg-warm">
      <Bundles />
    </main>
  );
}
