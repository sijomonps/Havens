"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Heart, Sparkles, MessageCircle, Info, Check } from 'lucide-react';

const products = [
  { 
    id: "petal-pop",
    name: "PETAL POP", 
    price: 299, 
    icon: "🌸", 
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop",
    desc: "A cute little surprise for someone special.", 
    includes: ["Chocolates", "Scrunchie", "Hair Clip", "Polaroid Prints"],
    longDesc: "The Petal Pop is designed as the perfect small gesture. Whether it's to brighten a friend's day, say a quick thank you, or offer a sweet mini-surprise, this pocket-friendly hamper packs lots of joy. Carefully packed and wrapped to feel incredibly premium."
  },
  { 
    id: "blush-box",
    name: "BLUSH BOX", 
    price: 359, 
    icon: "🎀", 
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&auto=format&fit=crop",
    desc: "Thoughtfully curated for everyday celebrations.", 
    includes: ["Scrunchie", "Hair Clip", "Chocolates", "Wishes Card", "Premium Packaging"],
    longDesc: "Our Blush Box balances affordability with charm. Handpicked aesthetic hair accessories, delicious chocolates, and a customizable wishes card make it the go-to box for birthdays, anniversaries, or just to say you care."
  },
  { 
    id: "frame-box",
    name: "FRAME BOX", 
    price: 349, 
    icon: "🖼️", 
    image: "https://images.unsplash.com/photo-1531243269054-5ebf6f3b0b6e?q=80&w=600&auto=format&fit=crop",
    desc: "Because some moments deserve a frame.", 
    includes: ["Customized Photo Frame", "Polaroid Prints", "Chocolates", "Personalized Message Card"],
    longDesc: "Moments fly by, but the best ones deserve to be framed. The Frame Box features a high-quality personalized photo frame, retro-style polaroid prints, chocolates, and your custom letter. Ideal for saving a memory forever."
  },
  { 
    id: "memory-box",
    name: "MEMORY BOX", 
    price: 499, 
    icon: "🤍", 
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
    desc: "A box filled with memories and love.", 
    includes: ["Customized Photo Frame", "Polaroid Prints", "Mini Perfume", "Chocolates", "Personalized Message Card", "Premium Packaging"],
    longDesc: "Our signature memory chest. Combining sensory triggers like mini perfumes, visual memories through polaroids and a customized frame, and a touch of sweetness. Everything is packed in our premium signature HAVENS box."
  },
  { 
    id: "for-him",
    name: "FOR HIM", 
    price: 649, 
    icon: "🧸", 
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
    desc: "A thoughtful gift curated just for him.", 
    includes: ["T-Shirt", "Perfume", "Skincare Essential", "Personalized Message Card", "Premium Packaging", "Bouquet"],
    longDesc: "Curating for men can be challenging, but we've got you covered. This package brings together comfortable daily apparel, premium cologne, gentle skincare items, and an elegant floral arrangement to create a complete, thoughtful experience."
  },
  { 
    id: "dream-box",
    name: "DREAM BOX", 
    price: 699, 
    icon: "✨", 
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop",
    desc: "Customized according to your budget, preferences, and occasion.", 
    includes: ["Custom Curation", "Budget Optimization", "Occasion Personalization", "Tailored Contents"],
    longDesc: "Got something specific in mind? Or working with a unique budget? We curate surprises of all scales. Tell us what they love, and we will package the dream gift hamper to fit your specific vision."
  },
];

export default function ProductClient({ id }: { id: string }) {
  const product = products.find(p => p.id === id);

  const [mouseGradientStyle, setMouseGradientStyle] = useState({
    left: '0px',
    top: '0px',
    opacity: 0,
  });
  const [ripples, setRipples] = useState<{id: number, x: number, y: number}[]>([]);
  const [ordered, setOrdered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseGradientStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        opacity: 1,
      });
    };
    const handleMouseLeave = () => {
      setMouseGradientStyle(prev => ({ ...prev, opacity: 0 }));
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) return;
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 1000);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-100 p-6">
        <h1 className="text-2xl font-light mb-4">Product not found</h1>
        <Link href="/" className="text-pink-400 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>
      </div>
    );
  }

  const pageStyles = `
    #mouse-gradient-react {
      position: fixed;
      pointer-events: none;
      border-radius: 9999px;
      background-image: radial-gradient(circle, rgba(244, 114, 182, 0.08), rgba(251, 113, 133, 0.05), transparent 70%);
      transform: translate(-50%, -50%);
      will-change: left, top, opacity;
      transition: left 70ms linear, top 70ms linear, opacity 300ms ease-out;
      z-index: 1;
    }
    @keyframes pulse-glow { 0%, 100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.1); } }
    .ripple-effect { position: fixed; width: 4px; height: 4px; background: rgba(244, 114, 182, 0.6); border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; animation: pulse-glow 1s ease-out forwards; z-index: 9999; }
    
    .glass-container {
      backdrop-filter: blur(16px);
      background: rgba(15, 23, 42, 0.4);
      border: 1px solid rgba(244, 114, 182, 0.1);
    }
  `;

  return (
    <>
      <style>{pageStyles}</style>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans overflow-x-hidden relative selection:bg-pink-500/30">
        
        {/* Background Grid */}
        <svg className="fixed inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridReactDarkResponsive" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(244, 114, 182, 0.04)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridReactDarkResponsive)" />
        </svg>

        {/* Header containing the logo */}
        <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="HAVENS Logo" 
              width={120} 
              height={40} 
              className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <Link href="/" className="text-xs font-mono text-slate-400 hover:text-pink-300 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> BACK TO CATALOG
          </Link>
        </header>

        {/* Product Details Section */}
        <main className="relative z-10 w-full max-w-5xl mx-auto px-6 py-8 sm:py-16 md:px-12 flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Image Container */}
          <div className="w-full md:w-1/2 aspect-square md:aspect-[4/5] relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
            <Image 
              src={product.image}
              alt={product.name}
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-slate-900/90 backdrop-blur-md flex items-center justify-center text-2xl border border-slate-800">
              {product.icon}
            </div>
          </div>

          {/* Info Container */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <nav className="text-xs text-slate-500 font-mono mb-4 flex items-center gap-2">
                <Link href="/" className="hover:text-slate-300">HAVENS</Link>
                <span>/</span>
                <span className="text-pink-300/80">{product.name}</span>
              </nav>

              <h1 className="text-3xl sm:text-4xl font-extralight tracking-wide text-slate-50 mb-2">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-1.5 mb-6">
                {product.prefix && <span className="text-xs uppercase tracking-wider text-slate-500">{product.prefix}</span>}
                <span className="text-2xl font-light text-pink-300">₹{product.price}</span>
                <span className="text-xs text-slate-500 ml-2">(shipping charges not included)</span>
              </div>

              <div className="h-px bg-slate-800/85 mb-6"></div>

              <p className="text-slate-400 font-light leading-relaxed mb-6">
                {product.longDesc}
              </p>

              {product.includes.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-4 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-pink-400" /> What's Inside the Chest:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.includes.map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-300 font-light bg-slate-900/40 border border-slate-850 p-2.5 rounded-lg">
                        <Check className="w-4 h-4 text-pink-400 mr-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {ordered ? (
                <div className="glass-container p-4 rounded-xl text-center text-sm text-pink-300 border border-pink-500/20 bg-pink-500/5 animate-pulse">
                  🎁 WhatsApp Ordering Simulation Triggered!
                </div>
              ) : (
                <button 
                  onClick={() => {
                    setOrdered(true);
                    setTimeout(() => setOrdered(false), 3000);
                  }}
                  className="w-full py-4 rounded-xl bg-pink-500 hover:bg-pink-600 text-slate-950 hover:text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-pink-500/10"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Order via WhatsApp (Mock)</span>
                </button>
              )}

              <div className="bg-slate-900/20 border border-slate-800/40 rounded-xl p-4 flex gap-3 text-xs text-slate-400 font-light">
                <Info className="w-4.5 h-4.5 text-pink-400/60 shrink-0 mt-0.5" />
                <p>
                  Prices may vary based on extra customizations. Free surprise gift included for any orders above ₹399.
                </p>
              </div>
            </div>

          </div>

        </main>

        {/* Footer */}
        <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 border-t border-slate-900/60 text-center">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            © {new Date().getFullYear()} HAVENS. All rights reserved.
          </p>
        </footer>

        {/* Interactive Glow Overlay */}
        <div 
          id="mouse-gradient-react"
          className="w-80 h-80 blur-2xl sm:w-96 sm:h-96 sm:blur-3xl"
          style={{
            left: mouseGradientStyle.left,
            top: mouseGradientStyle.top,
            opacity: mouseGradientStyle.opacity,
          }}
        ></div>

        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple-effect"
            style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
          ></div>
        ))}
      </div>
    </>
  );
}
