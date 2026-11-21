'use client';

import React, { useEffect, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CvDownloadButtonProps {
  label: string;
  className?: string;
  iconSize?: number;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const CV_URL = '/assets/images/G_H_Harindra_CV.pdf';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? '';

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export default function CvDownloadButton({
  label,
  className = '',
  iconSize = 18,
}: CvDownloadButtonProps) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // Open form first. Do not download CV yet.
  const handleOpenForm = () => {
    setStatus('idle');
    setErrorMsg('');
    setOpen(true);
  };

  // Download CV only after successful form submission.
  const triggerDownload = () => {
    const a = document.createElement('a');

    a.href = CV_URL;
    a.download = 'G_H_H_Harindra_CV.pdf';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Close modal using Escape key.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && status !== 'sending') {
        setOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, status]);

  // Submit visitor details to Web3Forms.
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (status === 'sending') return;

    // Validate actual access key.
    if (!UUID_PATTERN.test(ACCESS_KEY)) {
      setStatus('error');
      setErrorMsg(
        'Web3Forms access key is missing or invalid. Please configure NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.'
      );
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    data.set('access_key', ACCESS_KEY);
    data.set('subject', 'New CV Download Request - Harindra');
    data.set('from_name', 'Harindra Portfolio');

    setStatus('sending');
    setErrorMsg('');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
      });

      const result = await response.json();

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.message || 'Unable to submit your details.'
        );
      }

      // Reset form after successful submission.
      form.reset();

      // Download CV only after Web3Forms confirms success.
      triggerDownload();

      setStatus('success');

    } catch (error) {
      setStatus('error');

      setErrorMsg(
        error instanceof Error
          ? error.message
          : 'Network error. Please try again.'
      );
    }
  };

  return (
    <>
      {/* CV Download Button */}
      <button
        type="button"
        onClick={handleOpenForm}
        className={className}
      >
        <Icon name="ArrowDownTrayIcon" size={iconSize} />
        {label}
      </button>

      {/* Visitor Details Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-dialog-title"
          onClick={() => {
            if (status !== 'sending') setOpen(false);
          }}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close dialog"
              disabled={status === 'sending'}
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground disabled:opacity-40"
            >
              <Icon name="XMarkIcon" size={20} />
            </button>

            <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-accent">
              Resume Request
            </p>

            <h3
              id="cv-dialog-title"
              className="mt-2 text-2xl font-extrabold text-card-foreground"
            >
              Let&apos;s stay in touch
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Please share your details before downloading my resume.
              I&apos;d love to know who is viewing my profile.
            </p>

            {/* Success Message */}
            {status === 'success' ? (
              <div className="mt-6 rounded-xl border border-border bg-secondary p-5 text-center">

                <div className="mb-3 flex justify-center text-primary">
                  <Icon name="CheckCircleIcon" size={42} />
                </div>

                <p className="text-base font-semibold text-card-foreground">
                  Thank you! Your details were submitted successfully.
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Your resume download has started.
                </p>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
              >
                {/* Honeypot for spam prevention */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* REQUIRED: Name */}
                <div>
                  <label
                    htmlFor="cv-name"
                    className="mb-1 block text-sm font-medium text-card-foreground"
                  >
                    Full Name *
                  </label>

                  <input
                    id="cv-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="min-h-[44px] w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                {/* REQUIRED: Email */}
                <div>
                  <label
                    htmlFor="cv-email"
                    className="mb-1 block text-sm font-medium text-card-foreground"
                  >
                    Email Address *
                  </label>

                  <input
                    id="cv-email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    autoComplete="email"
                    required
                    className="min-h-[44px] w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                {/* REQUIRED: Contact Number */}
                <div>
                  <label
                    htmlFor="cv-phone"
                    className="mb-1 block text-sm font-medium text-card-foreground"
                  >
                    Contact Number *
                  </label>

                  <input
                    id="cv-phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter contact number"
                    autoComplete="tel"
                    required
                    className="min-h-[44px] w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                {/* OPTIONAL: Organization */}
                <div>
                  <label
                    htmlFor="cv-organization"
                    className="mb-1 block text-sm font-medium text-card-foreground"
                  >
                    Organization
                    <span className="ml-1 text-muted-foreground">(Optional)</span>
                  </label>

                  <input
                    id="cv-organization"
                    name="organization"
                    type="text"
                    placeholder="Company / Organization"
                    autoComplete="organization"
                    className="min-h-[44px] w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                {/* OPTIONAL: Designation */}
                <div>
                  <label
                    htmlFor="cv-designation"
                    className="mb-1 block text-sm font-medium text-card-foreground"
                  >
                    Designation
                    <span className="ml-1 text-muted-foreground">(Optional)</span>
                  </label>

                  <input
                    id="cv-designation"
                    name="designation"
                    type="text"
                    placeholder="Your Job Title"
                    autoComplete="organization-title"
                    className="min-h-[44px] w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                {/* OPTIONAL: LinkedIn */}
                <div>
                  <label
                    htmlFor="cv-linkedin"
                    className="mb-1 block text-sm font-medium text-card-foreground"
                  >
                    LinkedIn Profile
                    <span className="ml-1 text-muted-foreground">(Optional)</span>
                  </label>

                  <input
                    id="cv-linkedin"
                    name="linkedin"
                    type="url"
                    placeholder="https://www.linkedin.com/in/your-profile"
                    className="min-h-[44px] w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                {/* OPTIONAL: Description */}
                <div>
                  <label
                    htmlFor="cv-description"
                    className="mb-1 block text-sm font-medium text-card-foreground"
                  >
                    Description
                    <span className="ml-1 text-muted-foreground">(Optional)</span>
                  </label>

                  <textarea
                    id="cv-description"
                    name="description"
                    rows={4}
                    placeholder="Purpose of downloading my resume or any additional message..."
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                  />
                </div>

                {/* Error Message */}
                {status === 'error' && (
                  <p
                    role="alert"
                    className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive"
                  >
                    {errorMsg}
                  </p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    'Submitting Details...'
                  ) : (
                    <>
                      <Icon name="ArrowDownTrayIcon" size={18} />
                      Submit & Download CV
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Your information will be used to respond to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}