'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useLanguage } from '@/components/language-provider';

export function TestimonialsSection() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      quote: t.testimonials.quote1,
      author: t.testimonials.author1,
      company: t.testimonials.company1,
      source: t.testimonials.source1,
      rating: 5,
    },
    {
      quote: t.testimonials.quote2,
      author: t.testimonials.author2,
      company: t.testimonials.company2,
      source: t.testimonials.source2,
      rating: 5,
    },
    {
      quote: t.testimonials.quote3,
      author: t.testimonials.author3,
      company: t.testimonials.company3,
      source: t.testimonials.source3,
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <Skeleton className="w-48 h-6 bg-zinc-800/80 mb-8 mx-auto" />
        <div className="p-8 md:p-12 rounded-3xl bg-[#111114] border border-zinc-800/80">
          <Skeleton className="w-12 h-12 bg-zinc-800/80 mb-6" />
          <Skeleton className="w-full h-6 mb-4 bg-zinc-800/80" />
          <Skeleton className="w-3/4 h-6 mb-8 bg-zinc-800/80" />
          <div className="flex items-center gap-4">
            <Skeleton className="w-12 h-12 rounded-full bg-zinc-800/80" />
            <div className="flex-1">
              <Skeleton className="w-32 h-5 mb-2 bg-zinc-800/80" />
              <Skeleton className="w-48 h-4 bg-zinc-800/80" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const current = testimonials[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
          {t.testimonials.label}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Was Kunden sagen</h2>
      </div>

      <div className="relative p-8 md:p-12 rounded-3xl bg-[#111114] border border-zinc-800/80 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="relative z-10">
          {/* Quote icon */}
          <Quote className="w-10 h-10 text-emerald-500/30 mb-6" />

          {/* Rating stars */}
          <div className="flex gap-1 mb-6">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            ))}
          </div>

          {/* Quote */}
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-8 italic"
            >
              "{current.quote}"
            </motion.p>
          </AnimatePresence>

          {/* Author info */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-semibold text-lg">{current.author}</div>
              <div className="text-zinc-400 text-sm">{current.company}</div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 mt-2">
                <ExternalLink className="w-3 h-3" />
                <span>{current.source}</span>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex gap-2 mt-6 justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-emerald-400 w-6'
                    : 'bg-zinc-700 hover:bg-zinc-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}