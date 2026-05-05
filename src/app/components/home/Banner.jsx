"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LogIn, Sparkles, Zap } from "lucide-react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Banner() {
  return (
    <section className="relative h-[85vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative h-full text-white">
            <Image
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000"
              alt="Library shelves"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/80 via-black/40 to-transparent">
              <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
                <div className="max-w-2xl space-y-6">
                  <div className="flex w-fit items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-accent">
                    <Sparkles size={16} />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">
                      Curated Collection
                    </span>
                  </div>
                  <h1 className="text-4xl font-black leading-[1.1] text-white md:text-7xl">
                    Find Your Next <br />
                    <span className="text-accent underline decoration-4 underline-offset-8">
                      Literary Escape
                    </span>
                  </h1>
                  <p className="max-w-lg text-lg font-light leading-relaxed text-gray-300 md:text-xl">
                    Explore thousands of digital titles across science,
                    technology, and classical storytelling. Your journey into
                    the infinite begins here.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/all-books"
                      className="btn btn-primary btn-lg rounded-full px-10 text-white shadow-xl shadow-primary/20 transition-transform hover:scale-105"
                    >
                      Browse Now
                      <ArrowRight size={20} />
                    </Link>
                    <Link
                      href="/login"
                      className="btn btn-outline btn-lg rounded-full px-10 text-white"
                    >
                      <LogIn size={19} />
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-full text-white">
            <Image
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=2000"
              alt="Tech library"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center bg-gradient-to-r from-black/80 via-black/40 to-transparent">
              <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
                <div className="max-w-2xl space-y-6">
                  <div className="flex w-fit items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-4 py-1.5 text-green-400">
                    <Zap size={16} />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">
                      Tech Revolution
                    </span>
                  </div>
                  <h1 className="text-4xl font-black leading-[1.1] text-white md:text-7xl">
                    Master the <br />
                    <span className="text-green-400">Digital Horizon</span>
                  </h1>
                  <p className="max-w-lg text-lg font-light leading-relaxed text-gray-300 md:text-xl">
                    The most comprehensive technical library for developers,
                    engineers, and visionaries. Stay ahead of the curve.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/all-books"
                      className="btn btn-primary btn-lg rounded-full px-10 text-white shadow-xl"
                    >
                      Browse Now
                      <ArrowRight size={20} />
                    </Link>
                    <Link
                      href="/login"
                      className="btn btn-outline btn-lg rounded-full px-10 text-white"
                    >
                      <LogIn size={19} />
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
