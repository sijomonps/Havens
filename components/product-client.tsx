"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Sparkles, MessageCircle, Info, Check } from 'lucide-react';

const products = [
  { 
    id: "petal-pop",
    name: "PETAL POP", 
    price: 299, 
    icon: "🌸", 
    image: "/product images/Petal box.jpeg",
    desc: "A cute little surprise for someone special.", 
    includes: ["Chocolates", "Scrunchie", "Hair Clip", "Polaroid Prints"],
    longDesc: "The Petal Pop is designed as the perfect small gesture. Whether it's to brighten a friend's day, say a quick thank you, or offer a sweet mini-surprise, this pocket-friendly hamper packs lots of joy. Carefully packed and wrapped to feel incredibly premium."
  },
  { 
    id: "blush-box",
    name: "BLUSH BOX", 
    price: 359, 
    icon: "🎀", 
    image: "/product images/blush box.jpeg",
    desc: "Thoughtfully curated for everyday celebrations.", 
    includes: ["Scrunchie", "Hair Clip", "Chocolates", "Wishes Card", "Premium Packaging"],
    longDesc: "Our Blush Box balances affordability with charm. Handpicked aesthetic hair accessories, delicious chocolates, and a customizable wishes card make it the go-to box for birthdays, anniversaries, or just to say you care."
  },
  { 
    id: "frame-box",
    name: "FRAME BOX", 
    price: 349, 
    icon: "🖼️", 
    image: "/product images/Frame Box.jpeg",
    desc: "Because some moments deserve a frame.", 
    includes: ["Customized Photo Frame", "Polaroid Prints", "Chocolates", "Personalized Message Card"],
    longDesc: "Moments fly by, but the best ones deserve to be framed. The Frame Box features a high-quality personalized photo frame, retro-style polaroid prints, chocolates, and your custom letter. Ideal for saving a memory forever."
  },
  { 
    id: "memory-box",
    name: "MEMORY BOX", 
    price: 499, 
    icon: "🤍", 
    image: "/product images/Memory Box.jpeg",
    desc: "A box filled with memories and love.", 
    includes: ["Customized Photo Frame", "Polaroid Prints", "Mini Perfume", "Chocolates", "Personalized Message Card", "Premium Packaging"],
    longDesc: "Our signature memory chest. Combining sensory triggers like mini perfumes, visual memories through polaroids and a customized frame, and a touch of sweetness. Everything is packed in our premium signature HAVENS box."
  },
  { 
    id: "for-him",
    name: "FOR HIM", 
    price: 649, 
    icon: "🧸", 
    image: "/product images/For Him.jpeg",
    desc: "A thoughtful gift curated just for him.", 
    includes: ["T-Shirt", "Perfume", "Skincare Essential", "Personalized Message Card", "Premium Packaging", "Bouquet"],
    longDesc: "Curating for men can be challenging, but we've got you covered. This package brings together comfortable daily apparel, premium cologne, gentle skincare items, and an elegant floral arrangement to create a complete, thoughtful experience."
  },
  { 
    id: "dream-box",
    name: "DREAM BOX", 
    price: 699, 
    icon: "✨", 
    image: "/product images/For Her.jpeg",
    desc: "A dreamy collection of little joys.", 
    includes: ["Mini Perfume", "Jewelry Piece", "Hair Accessories", "Skincare Essential", "Chocolates", "Polaroid Prints", "Personalized Message Card", "Premium Packaging", "Flowers/Bouquet"],
    longDesc: "The ultimate pampering hamper. Curated with premium beauty, skincare, jewelry accessories, and fresh flowers, the Dream Box is designed to make anyone feel like royalty. Handcrafted with extra love."
  },
  { 
    id: "custom-gifts",
    name: "CUSTOM GIFTS", 
    price: 199, 
    prefix: "Starting from", 
    icon: "🎁", 
    image: "/product images/custom-gifts.png",
    desc: "Customized according to your budget, preferences, and occasion.", 
    includes: ["Custom Curation", "Budget Optimization", "Occasion Personalization", "Tailored Contents"],
    longDesc: "Got something specific in mind? Or working with a unique budget? We curate surprises of all scales. Tell us what they love, and we will package the dream gift hamper to fit your specific vision."
  },
];

export default function ProductClient({ id }: { id: string }) {
  const product = products.find(p => p.id === id);
  const [ordered, setOrdered] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-zinc-100 p-6 font-sans">
        <h1 className="text-xl font-light mb-4 tracking-wider">Product not found</h1>
        <Link href="/" className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-2 font-mono uppercase">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-rose-500/20 selection:text-rose-200">
      
      {/* Header containing the logo */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-zinc-900">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="HAVENS Logo" 
            width={110} 
            height={36} 
            className="h-9 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
            priority
          />
        </Link>
        <Link href="/" className="text-[10px] font-mono text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1.5 uppercase tracking-wider">
          <ArrowLeft className="w-3.5 h-3.5" /> BACK TO CATALOG
        </Link>
      </header>

      {/* Product Details Section */}
      <main className="w-full max-w-6xl mx-auto px-6 py-12 sm:py-20 flex flex-col md:flex-row gap-10 lg:gap-16">
        
        {/* Image Container */}
        <div className="w-full md:w-1/2 aspect-square relative rounded-lg overflow-hidden bg-zinc-950 border border-zinc-900">
          <Image 
            src={product.image}
            alt={product.name}
            fill
            className="object-cover opacity-95"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-zinc-900/90 backdrop-blur-md flex items-center justify-center text-lg border border-zinc-800">
            {product.icon}
          </div>
        </div>

        {/* Info Container */}
        <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
          <div>
            <nav className="text-[10px] text-zinc-500 font-mono mb-4 flex items-center gap-2 uppercase tracking-wider">
              <Link href="/" className="hover:text-zinc-300 font-medium">HAVENS</Link>
              <span>/</span>
              <span className="text-zinc-400">{product.name}</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-light tracking-widest text-white uppercase mb-3">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-1.5 mb-6">
              {product.prefix && <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">{product.prefix}</span>}
              <span className="text-lg font-mono text-zinc-300">₹{product.price}</span>
              <span className="text-[10px] text-zinc-500 ml-2 font-light tracking-wide">(shipping charges calculated at checkout)</span>
            </div>

            <div className="h-[1px] bg-zinc-900 mb-6"></div>

            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8">
              {product.longDesc}
            </p>

            {product.includes.length > 0 && (
              <div className="mb-10">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-mono mb-4 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400/80" /> WHAT'S INSIDE THE CHEST:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.includes.map((item, i) => (
                    <li key={i} className="flex items-center text-xs text-zinc-300 font-light bg-zinc-900/10 border border-zinc-900 p-3 rounded">
                      <Check className="w-3.5 h-3.5 text-rose-400/80 mr-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {ordered ? (
              <div className="p-3.5 rounded border border-rose-900/30 bg-rose-950/20 text-center text-xs font-mono text-rose-350 tracking-wider uppercase animate-pulse">
                🎁 WhatsApp Ordering Simulation Triggered!
              </div>
            ) : (
              <button 
                onClick={() => {
                  setOrdered(true);
                  setTimeout(() => setOrdered(false), 3000);
                }}
                className="w-full py-4 rounded bg-zinc-100 hover:bg-zinc-200 text-zinc-950 font-mono text-xs uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Order via WhatsApp</span>
              </button>
            )}

            <div className="border border-zinc-900 rounded p-4 flex gap-3 text-[11px] text-zinc-500 font-light">
              <Info className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
              <p>
                Prices may vary based on extra customizations. Free surprise gift included for any orders above ₹399.
              </p>
            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-12 border-t border-zinc-900 text-center">
        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} HAVENS. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
