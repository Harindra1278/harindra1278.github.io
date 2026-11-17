'use client';

import React, { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CvDownloadButtonProps {
  label: string;
  className?: string;
  iconSize?: number;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const CV_URL = '/G_H_Harindra_CV.pdf';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

export default function CvDownloadButton({ label, className = '', iconSize = 18 }: CvDownloadButtonProps) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const triggerDownload = () => {
    const a = document.createElement('a');
    a.href = CV_URL;
    a.download = 'G_H_Harindra_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDownload = () => {
    triggerDownload();
    setStatus('idle');
    setErrorMsg('');
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('access_key', ACCESS_KEY);
    data.append('subject', 'New message from portfolio (after CV download)');
    data.append('from_name', 'Portfolio Website');

    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, { method: 'POST', body: data });
      const json = await res.json();
      if (json?.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(json?.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  return (
    <>
      <button type="button" onClick={handleDownload} className={className}>
        <Icon name="ArrowDownTrayIcon" size={iconSize} />
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-dialog-title"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close dialog"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon name="XMarkIcon" size={20} />
            </button>

            <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-accent">CV downloaded</p>
            <h3 id="cv-dialog-title" className="mt-2 text-2xl font-extrabold text-card-foreground">
              Let&apos;s stay in touch
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Your download has started. Leave your details and a short note and I&apos;ll get back to you.
            </p>

            {status === 'success' ? (
              <div className="mt-6 rounded-xl border border-border bg-secondary p-5 text-center">
                <p className="text-base font-semibold text-card-foreground">Thank you! Your message was sent.</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                <div>
                  <label htmlFor="cv-name" className="mb-1 block text-sm font-medium text-card-foreground">
                    Name
                  </label>
                  <input
                    id="cv-name"
                    name="name"
                    type="text"
                    required
                    className="min-h-[44px] w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="cv-email" className="mb-1 block text-sm font-medium text-card-foreground">
                    Email
                  </label>
                  <input
                    id="cv-email"
                    name="email"
                    type="email"
                    required
                    className="min-h-[44px] w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="cv-message" className="mb-1 block text-sm font-medium text-card-foreground">
                    Message
                  </label>
                  <textarea
                    id="cv-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                </div>
                {status === 'error' && (
                  <p role="alert" className="text-sm text-destructive">
                    {errorMsg}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
