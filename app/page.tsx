"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Info, Package, Sparkles, ArrowRight } from 'lucide-react';

const products = [
  { 
    id: "petal-pop",
    name: "PETAL POP", 
    price: 299, 
    icon: "🌸", 
    image: "/product images/Petal box.jpeg",
    desc: "A cute little surprise for someone special.", 
    includes: ["Chocolates", "Scrunchie", "Hair Clip", "Polaroid Prints"] 
  },
  { 
    id: "blush-box",
    name: "BLUSH BOX", 
    price: 359, 
    icon: "🎀", 
    image: "/product images/blush box.jpeg",
    desc: "Thoughtfully curated for everyday celebrations.", 
    includes: ["Scrunchie", "Hair Clip", "Chocolates", "Wishes Card", "Premium Packaging"] 
  },
  { 
    id: "frame-box",
    name: "FRAME BOX", 
    price: 349, 
    icon: "🖼️", 
    image: "/product images/Frame Box.jpeg",
    desc: "Because some moments deserve a frame.", 
    includes: ["Customized Photo Frame", "Polaroid Prints", "Chocolates", "Personalized Message Card"] 
  },
  { 
    id: "memory-box",
    name: "MEMORY BOX", 
    price: 499, 
    icon: "🤍", 
    image: "/product images/Memory Box.jpeg",
    desc: "A box filled with memories and love.", 
    includes: ["Customized Photo Frame", "Polaroid Prints", "Mini Perfume", "Chocolates", "Personalized Message Card", "Premium Packaging"] 
  },
  { 
    id: "for-him",
    name: "FOR HIM", 
    price: 649, 
    icon: "🧸", 
    image: "/product images/For Him.jpeg",
    desc: "A thoughtful gift curated just for him.", 
    includes: ["T-Shirt", "Perfume", "Skincare Essential", "Personalized Message Card", "Premium Packaging", "Bouquet"] 
  },
  { 
    id: "dream-box",
    name: "DREAM BOX", 
    price: 699, 
    icon: "✨", 
    image: "/product images/For Her.jpeg",
    desc: "A dreamy collection of little joys.", 
    includes: ["Mini Perfume", "Jewelry Piece", "Hair Accessories", "Skincare Essential", "Chocolates", "Polaroid Prints", "Personalized Message Card", "Premium Packaging", "Flowers/Bouquet"] 
  },
  { 
    id: "custom-gifts",
    name: "CUSTOM GIFTS", 
    price: 199, 
    prefix: "Starting from", 
    icon: "🎁", 
    image: "/product images/custom-gifts.png",
    desc: "Customized according to your budget, preferences, and occasion.", 
    includes: [] 
  },
];

export default function HavensEcommerce() {
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
        <span className="text-[10px] font-mono tracking-[0.2em] text-zinc-500 uppercase">Est. 2026</span>
      </header>

      {/* Hero Section */}
      <main className="w-full max-w-7xl mx-auto px-6 pt-20 pb-24 flex flex-col items-center">
        
        <div className="text-center mb-20 max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-[0.15em] text-white uppercase mb-6">
            HAVENS
          </h1>
          <div className="w-8 h-[1px] bg-rose-400 mx-auto mb-6"></div>
          
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-4">
            We curate thoughtfully designed, beautiful, and affordable gift boxes and customized surprises to celebrate your loved ones.
          </p>
          
          <p className="text-xs font-mono text-rose-400/90 tracking-widest uppercase">
            Gifts aren't just given—they become memories.
          </p>
        </div>

        {/* Collections Header */}
        <div className="w-full mb-12">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] bg-zinc-900 flex-1 max-w-[80px]"></div>
            <h2 className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">OUR COLLECTIONS</h2>
            <div className="h-[1px] bg-zinc-900 flex-1 max-w-[80px]"></div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10">
          {products.map((product) => {
            return (
              <Link 
                key={product.id} 
                href={`/product/${product.id}`} 
                className="group flex flex-col justify-between bg-zinc-900/10 border border-zinc-900 rounded-lg p-3 sm:p-5 hover:border-zinc-800 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative w-full aspect-square rounded-md overflow-hidden bg-zinc-950 mb-4 border border-zinc-900">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      priority
                    />
                    <div className="absolute top-2.5 left-2.5 w-7 h-7 rounded-full bg-zinc-900/90 backdrop-blur-md flex items-center justify-center text-sm border border-zinc-800">
                      {product.icon}
                    </div>
                  </div>

                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xs sm:text-sm font-medium tracking-wider text-zinc-200 group-hover:text-white transition-colors uppercase">{product.name}</h3>
                  </div>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    {product.prefix && <span className="text-[8px] uppercase tracking-wider text-zinc-500 font-mono">{product.prefix}</span>}
                    <span className="text-xs sm:text-sm font-mono text-rose-450 text-zinc-400">₹{product.price}</span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-zinc-500 mb-4 font-light leading-relaxed line-clamp-2">{product.desc}</p>
                </div>
                
                <div className="mt-auto">
                  <div className="w-full py-2 px-3 rounded bg-transparent group-hover:bg-zinc-100 text-[10px] text-zinc-400 group-hover:text-zinc-950 border border-zinc-900 group-hover:border-zinc-100 transition-all duration-300 flex items-center justify-center gap-1 font-mono uppercase tracking-wider">
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Notes Section */}
        <div className="mt-24 w-full max-w-2xl">
          <div className="border border-zinc-900 rounded-lg p-6 sm:p-8 bg-zinc-950">
            <div className="flex items-start gap-4">
              <Info className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
              <div className="space-y-4">
                <div className="flex items-start gap-2.5 text-xs text-zinc-400 font-light leading-relaxed">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400/70 shrink-0 mt-0.5" />
                  <p>Complimentary gifts available on all hampers above ₹399.</p>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-400 font-light leading-relaxed">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400/70 shrink-0 mt-0.5" />
                  <p>Customizations available. Prices may vary based on preferences.</p>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-zinc-500 font-light leading-relaxed mt-4 pt-4 border-t border-zinc-900">
                  <Package className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <p>Shipping charges are calculated at checkout and not included in catalog pricing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-28 w-full text-center border-t border-zinc-900 pt-12">
          <div className="flex justify-center space-x-1.5 mb-6">
            <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
            <div className="w-1 h-1 bg-zinc-650 bg-zinc-600 rounded-full"></div>
            <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
          </div>
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} HAVENS. All rights reserved.
          </p>
        </footer>

      </main>
    </div>
  );
}

