'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/components/language-provider';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(t.contact.error);
      }

      toast.success(t.contact.success, {
        description: t.contact.successDesc,
      });
      form.reset();
    } catch (err) {
      toast.error(t.contact.error, {
        description: t.contact.errorDesc,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
          <input 
            id="name" 
            name="name"
            required 
            type="text" 
            className="w-full bg-[#0a0a0c] border border-zinc-800/80 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" 
            placeholder="Max Mustermann" 
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-400">E-Mail</label>
          <input 
            id="email" 
            name="email"
            required 
            type="email" 
            className="w-full bg-[#0a0a0c] border border-zinc-800/80 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors" 
            placeholder="max@beispiel.de" 
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-zinc-400">Nachricht</label>
        <textarea 
          id="message" 
          name="message"
          required 
          rows={5} 
          className="w-full bg-[#0a0a0c] border border-zinc-800/80 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none" 
          placeholder="Lass uns über dein Projekt sprechen..."
        ></textarea>
      </div>
      <div className="pt-2 flex justify-center">
        <button 
          type="submit" 
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed text-zinc-950 font-semibold px-8 py-3.5 rounded-lg transition-colors"
        >
          {loading ? 'Wird gesendet...' : 'Nachricht senden'}
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
