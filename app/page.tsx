"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gift, Info, Package, Sparkles, Heart, ArrowRight } from 'lucide-react';

const products = [
  { 
    id: "petal-pop",
    name: "PETAL POP", 
    price: 299, 
    icon: "🌸", 
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=600&auto=format&fit=crop",
    desc: "A cute little surprise for someone special.", 
    includes: ["Chocolates", "Scrunchie", "Hair Clip", "Polaroid Prints"] 
  },
  { 
    id: "blush-box",
    name: "BLUSH BOX", 
    price: 359, 
    icon: "🎀", 
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600&auto=format&fit=crop",
    desc: "Thoughtfully curated for everyday celebrations.", 
    includes: ["Scrunchie", "Hair Clip", "Chocolates", "Wishes Card", "Premium Packaging"] 
  },
  { 
    id: "frame-box",
    name: "FRAME BOX", 
    price: 349, 
    icon: "🖼️", 
    image: "https://images.unsplash.com/photo-1531243269054-5ebf6f3b0b6e?q=80&w=600&auto=format&fit=crop",
    desc: "Because some moments deserve a frame.", 
    includes: ["Customized Photo Frame", "Polaroid Prints", "Chocolates", "Personalized Message Card"] 
  },
  { 
    id: "memory-box",
    name: "MEMORY BOX", 
    price: 499, 
    icon: "🤍", 
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
    desc: "A box filled with memories and love.", 
    includes: ["Customized Photo Frame", "Polaroid Prints", "Mini Perfume", "Chocolates", "Personalized Message Card", "Premium Packaging"] 
  },
  { 
    id: "for-him",
    name: "FOR HIM", 
    price: 649, 
    icon: "🧸", 
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
    desc: "A thoughtful gift curated just for him.", 
    includes: ["T-Shirt", "Perfume", "Skincare Essential", "Personalized Message Card", "Premium Packaging", "Bouquet"] 
  },
  { 
    id: "dream-box",
    name: "DREAM BOX", 
    price: 699, 
    icon: "✨", 
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop",
    desc: "A dreamy collection of little joys.", 
    includes: ["Mini Perfume", "Jewelry Piece", "Hair Accessories", "Skincare Essential", "Chocolates", "Polaroid Prints", "Personalized Message Card", "Premium Packaging", "Flowers/Bouquet"] 
  },
  { 
    id: "custom-gifts",
    name: "CUSTOM GIFTS", 
    price: 199, 
    prefix: "Starting from", 
    icon: "🎁", 
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=600&auto=format&fit=crop",
    desc: "Customized according to your budget, preferences, and occasion.", 
    includes: [] 
  },
];

export default function HavensEcommerce() {
  const [mouseGradientStyle, setMouseGradientStyle] = useState({
    left: '0px',
    top: '0px',
    opacity: 0,
  });
  const [ripples, setRipples] = useState<{id: number, x: number, y: number}[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const floatingElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const animateWords = () => {
      const wordElements = document.querySelectorAll('.word-animate');
      wordElements.forEach(word => {
        const delay = parseInt(word.getAttribute('data-delay') || '0');
        setTimeout(() => {
          if (word) (word as HTMLElement).style.animation = 'word-appear 0.8s ease-out forwards';
        }, delay);
      });
    };
    const timeoutId = setTimeout(animateWords, 300);
    return () => clearTimeout(timeoutId);
  }, []);

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

  useEffect(() => {
    const wordElements = document.querySelectorAll('.word-animate, .glow-hover');
    const handleMouseEnter = (e: Event) => { if (e.target) (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(244, 114, 182, 0.5)'; };
    const handleMouseLeave = (e: Event) => { if (e.target) (e.target as HTMLElement).style.textShadow = 'none'; };
    wordElements.forEach(word => {
      word.addEventListener('mouseenter', handleMouseEnter);
      word.addEventListener('mouseleave', handleMouseLeave);
    });
    return () => {
      wordElements.forEach(word => {
        if (word) {
          word.removeEventListener('mouseenter', handleMouseEnter);
          word.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.floating-element-animate');
    floatingElementsRef.current = Array.from(elements) as HTMLElement[];
    const handleScroll = () => {
      if (!scrolled) {
        setScrolled(true);
        floatingElementsRef.current.forEach((el, index) => {
          setTimeout(() => {
            if (el) {
              el.style.animationPlayState = 'running';
              el.style.opacity = ''; 
            }
          }, (parseFloat(el.style.animationDelay || "0") * 1000) + index * 100);
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

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
    @keyframes word-appear { 0% { opacity: 0; transform: translateY(30px) scale(0.8); filter: blur(10px); } 50% { opacity: 0.8; transform: translateY(10px) scale(0.95); filter: blur(2px); } 100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }
    @keyframes grid-draw { 0% { stroke-dashoffset: 1000; opacity: 0; } 50% { opacity: 0.3; } 100% { stroke-dashoffset: 0; opacity: 0.15; } }
    @keyframes pulse-glow { 0%, 100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.1); } }
    .word-animate { display: inline-block; opacity: 0; margin: 0 0.1em; transition: color 0.3s ease, transform 0.3s ease; }
    .word-animate:hover { color: #fbcfe8; transform: translateY(-2px); }
    .grid-line { stroke: #f472b6; stroke-width: 0.5; opacity: 0; stroke-dasharray: 5 5; stroke-dashoffset: 1000; animation: grid-draw 2s ease-out forwards; }
    .detail-dot { fill: #fbcfe8; opacity: 0; animation: pulse-glow 3s ease-in-out infinite; }
    .corner-element-animate { position: absolute; width: 40px; height: 40px; border: 1px solid rgba(244, 114, 182, 0.2); opacity: 0; animation: word-appear 1s ease-out forwards; }
    .text-decoration-animate { position: relative; }
    .text-decoration-animate::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: linear-gradient(90deg, transparent, #fbcfe8, transparent); animation: underline-grow 2s ease-out forwards; animation-delay: 2s; }
    @keyframes underline-grow { to { width: 100%; } }
    .floating-element-animate { position: absolute; width: 3px; height: 3px; background: #fbcfe8; border-radius: 50%; opacity: 0; animation: float 4s ease-in-out infinite; animation-play-state: paused; }
    @keyframes float { 0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; } 25% { transform: translateY(-10px) translateX(5px); opacity: 0.6; } 50% { transform: translateY(-5px) translateX(-3px); opacity: 0.4; } 75% { transform: translateY(-15px) translateX(7px); opacity: 0.8; } }
    .ripple-effect { position: fixed; width: 4px; height: 4px; background: rgba(244, 114, 182, 0.6); border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; animation: pulse-glow 1s ease-out forwards; z-index: 9999; }
    
    .product-card {
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(12px);
    }
    .product-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px -10px rgba(244, 114, 182, 0.2);
      border-color: rgba(244, 114, 182, 0.3);
    }
    .product-card::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(to bottom right, rgba(244, 114, 182, 0.3), transparent);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      opacity: 0.5;
      pointer-events: none;
    }
  `;

  return (
    <>
      <style>{pageStyles}</style>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans overflow-x-hidden relative selection:bg-pink-500/30">
        
        {/* Background Grid and SVGs */}
        <svg className="fixed inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridReactDarkResponsive" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(244, 114, 182, 0.05)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridReactDarkResponsive)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: '0.5s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: '1s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: '1.5s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: '2s' }} />
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
          <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">Est. 2026</span>
        </header>

        {/* Floating Particles */}
        <div className="floating-element-animate fixed" style={{ top: '25%', left: '15%', animationDelay: '0.5s' }}></div>
        <div className="floating-element-animate fixed" style={{ top: '60%', left: '85%', animationDelay: '1s' }}></div>
        <div className="floating-element-animate fixed" style={{ top: '40%', left: '10%', animationDelay: '1.5s' }}></div>
        <div className="floating-element-animate fixed" style={{ top: '75%', left: '90%', animationDelay: '2s' }}></div>

        {/* --- HERO SECTION (MINIMAL) --- */}
        <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-16 pb-12 sm:px-8 md:px-16 flex flex-col items-center">
          
          <div className="text-center mb-16 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-tighter text-slate-50 text-decoration-animate mb-6">
              <span className="word-animate glow-hover" data-delay="300">HAVENS</span>
              <span className="word-animate text-pink-400" data-delay="500"> 🎀</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed mb-4 opacity-0" style={{ animation: 'word-appear 1.2s ease-out forwards', animationDelay: '800ms' }}>
              We curate thoughtfully designed, beautiful, and affordable gift boxes and customized surprises to celebrate your loved ones.
            </p>
            
            <p className="text-sm font-medium text-pink-300 tracking-wide uppercase font-mono opacity-0" style={{ animation: 'word-appear 1.2s ease-out forwards', animationDelay: '1.2s' }}>
              Gifts aren't just given—they become memories.
            </p>
          </div>

          {/* --- PRODUCTS GRID --- */}
          <div className="w-full">
            <div className="flex items-center justify-center gap-4 mb-10 opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '1.4s' }}>
              <div className="h-px bg-slate-800 flex-1 max-w-[100px]"></div>
              <h3 className="text-xs sm:text-sm font-mono text-pink-300/80 uppercase tracking-[0.2em]">Our Collections</h3>
              <div className="h-px bg-slate-800 flex-1 max-w-[100px]"></div>
            </div>

            {/* Grid layout is grid-cols-2 on mobile (2 in a row), and grid-cols-2 md:grid-cols-2 lg:grid-cols-3 on larger screens */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '1.6s' }}>
              {products.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`} className="product-card relative group bg-slate-900/40 border border-slate-800/50 rounded-xl sm:rounded-2xl p-3 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden cursor-pointer">
                  
                  {/* Card Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 w-full">
                    {/* Product Image Placeholder */}
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-950 mb-4 sm:mb-6 border border-slate-800 group-hover:border-pink-500/20 transition-colors">
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        priority
                      />
                      <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-slate-900/85 backdrop-blur-sm flex items-center justify-center text-lg border border-slate-800">
                        {product.icon}
                      </div>
                    </div>

                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                      <h4 className="text-sm sm:text-lg md:text-xl font-medium text-slate-100 tracking-wide line-clamp-1">{product.name}</h4>
                    </div>
                    
                    <div className="flex items-baseline gap-1 mb-3 sm:mb-4">
                      {product.prefix && <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-500">{product.prefix}</span>}
                      <span className="text-sm sm:text-lg font-light text-pink-300">₹{product.price}</span>
                    </div>

                    <p className="text-[11px] sm:text-sm text-slate-400 mb-4 font-light leading-relaxed line-clamp-2 sm:line-clamp-none">{product.desc}</p>
                  </div>
                  
                  <div className="relative z-10 w-full mt-auto">
                    <button className="w-full py-2 px-3 rounded-lg sm:rounded-xl bg-slate-850 hover:bg-pink-500/10 text-[11px] sm:text-sm text-slate-300 hover:text-pink-300 border border-slate-700/50 hover:border-pink-500/30 transition-all duration-300 flex items-center justify-center gap-1.5 group/btn font-light">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* --- NOTES SECTION --- */}
          <div className="mt-20 w-full max-w-3xl opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '1.8s' }}>
            <div className="bg-slate-900/30 border border-slate-800/50 rounded-2xl p-5 sm:p-8 backdrop-blur-sm">
              <div className="flex items-start gap-3 sm:gap-4">
                <Info className="w-5 h-5 text-pink-400/70 shrink-0 mt-0.5" />
                <div className="space-y-3">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-light">
                    <Sparkles className="w-4 h-4 text-pink-400/50 shrink-0 mt-0.5" />
                    <p>Complimentary gifts available on all hampers above ₹399.</p>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-light">
                    <Sparkles className="w-4 h-4 text-pink-400/50 shrink-0 mt-0.5" />
                    <p>Customizations available. Prices may vary based on customizations.</p>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-400/80 font-light mt-4 pt-4 border-t border-slate-800/50">
                    <Package className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>Shipping charges are not included in the above prices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Logo */}
          <div className="mt-20 mb-8 opacity-0" style={{ animation: 'word-appear 1s ease-out forwards', animationDelay: '2s' }}>
            <div className="flex justify-center space-x-2">
              <div className="w-1.5 h-1.5 bg-pink-400/40 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-pink-400/60 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-pink-400/40 rounded-full"></div>
            </div>
            <p className="mt-6 text-xs font-mono text-slate-500 uppercase tracking-widest text-center">
              © {new Date().getFullYear()} HAVENS. All rights reserved.
            </p>
          </div>

        </main>

        {/* Interactive Overlays */}
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
