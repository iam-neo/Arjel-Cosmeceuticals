import Image from "next/image";
import { useCart } from "../context/CartContext";

export default function Bundles() {
  const { addToCart } = useCart();
  const bundles = [
    {
      id: "b1",
      name: "Acne Control Kit",
      save: "Save 20%",
      desc: "A complete 3-step system to clear, calm, and prevent breakouts on oily and acne-prone skin.",
      items: ["Salicylic Acid Cleanser (100ml)", "Niacinamide Clarity Serum (30ml)", "Oil-Free Gel Moisturizer (50ml)"],
      price: 1299,
      originalPrice: 1647,
      bgColor: "from-[#EDF4FF] auto-to-[#E0EEFF]",
      img: "/images/Dermaline Pro.JPG",
      colorClass: "bg-gradient-to-br from-[#EDF4FF] to-[#E0EEFF]",
    },
    {
      id: "b2",
      name: "Daily Glow Routine",
      save: "Save 15%",
      desc: "Brighten your complexion and fade pigmentation with this powerful vitamin-rich routine.",
      items: ["Gentle Cream Cleanser (100ml)", "Vitamin C Glow Serum (30ml)", "Hydra-Barrier Moisturizer (50ml)"],
      price: 1499,
      originalPrice: 1797,
      bgColor: "from-[#FFF8ED] auto-to-[#FFEFD5]",
      img: "/images/Vitamine C.jpg",
      colorClass: "bg-gradient-to-br from-[#FFF8ED] to-[#FFEFD5]",
    },
    {
      id: "b3",
      name: "Sun Protection Set",
      save: "Save 18%",
      desc: "Complete daily UV defense with antioxidant protection. Essential for South Asian climates.",
      items: ["Invisible UV Shield SPF 50 (50ml)", "Vitamin C Glow Serum (30ml)", "After-Sun Recovery Mist (100ml)"],
      price: 1399,
      originalPrice: 1697,
      bgColor: "from-[#F0FFF4] auto-to-[#E6F9ED]",
      img: "/images/Sunscreen.jpg",
      colorClass: "bg-gradient-to-br from-[#F0FFF4] to-[#E6F9ED]",
    },
  ];

  return (
    <section className="bg-bg-warm py-24" id="bundles">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3 flex items-center justify-center gap-2 before:content-[''] before:w-6 before:h-0.5 before:bg-primary before:rounded">
            Better Together
          </div>
          <h2 className="font-[var(--font-playfair)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-tight mb-4 text-foreground">
            Skincare Bundles
          </h2>
          <p className="text-[1.05rem] text-text-secondary max-w-xl mx-auto leading-relaxed">
            Curated kits that work in synergy. Save more when you build a complete routine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {bundles.map((b, i) => (
            <div
              key={b.id}
              className={`bg-white rounded-3xl overflow-hidden transition-all duration-300 shadow-sm border border-border group hover:-translate-y-1.5 hover:shadow-2xl hover:border-transparent reveal reveal-delay-${i + 1}`}
            >
              <div className={`h-[220px] relative flex items-center justify-center overflow-hidden ${b.colorClass}`}>
                <Image src={b.img} alt={b.name} width={300} height={200} className="h-[80%] w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 right-4 px-3.5 py-1.5 bg-success text-white rounded-full text-[0.72rem] font-bold shadow-sm">
                  {b.save}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-[var(--font-playfair)] text-[1.25rem] font-semibold mb-2">{b.name}</h3>
                <p className="text-[0.88rem] text-text-secondary leading-relaxed mb-5 h-[60px]">
                  {b.desc}
                </p>
                <ul className="mb-6 flex flex-col gap-2">
                  {b.items.map(item => (
                    <li key={item} className="text-[0.82rem] text-text-secondary flex items-center gap-2">
                      <span className="text-success font-bold text-[0.75rem]">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline gap-2.5 mb-5">
                  <span className="text-[1.4rem] font-bold text-foreground">₹{b.price}</span>
                  <span className="text-[0.95rem] text-text-muted line-through">₹{b.originalPrice}</span>
                </div>
                <button 
                  onClick={() => addToCart({ slug: b.id, name: b.name, price: b.price, img: b.img })}
                  className="w-full py-3 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors shadow-sm"
                >
                  Add Kit to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
