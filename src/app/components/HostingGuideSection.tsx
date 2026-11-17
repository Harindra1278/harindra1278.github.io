import React from 'react';
import Reveal from './Reveal';

const steps = [
  {
    code: 'STEP 01',
    title: 'Enable static export',
    body: 'In next.config.mjs set output: "export", images: { unoptimized: true }, and basePath / assetPrefix to "/your-repo-name" if the site is not on a custom domain.',
  },
  {
    code: 'STEP 02',
    title: 'Add your CV',
    body: 'Place G_H_Harindra_CV.pdf inside the public/ folder so it is served at /G_H_Harindra_CV.pdf and the download buttons work.',
  },
  {
    code: 'STEP 03',
    title: 'Build the site',
    body: 'Run npm install then npm run build. Next.js writes the finished static site to the out/ folder.',
  },
  {
    code: 'STEP 04',
    title: 'Push to GitHub',
    body: 'Create a repository, commit your project and push it to the main branch.',
  },
  {
    code: 'STEP 05',
    title: 'Turn on GitHub Pages',
    body: 'In the repository open Settings, then Pages, and set Source to "GitHub Actions". Use the Next.js static-export workflow (or publish out/ to a gh-pages branch).',
  },
  {
    code: 'STEP 06',
    title: 'Go live',
    body: 'After the workflow finishes, the site is live at https://<username>.github.io/<repo-name>/. Add a .nojekyll file in public/ so the _next folder is served correctly.',
  },
];

export default function HostingGuideSection() {
  return (
    <section id="hosting" className="relative bg-background py-16 lg:py-20" aria-labelledby="hosting-title">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="section-label mb-4">// Deploy Checklist</p>
            <h2 id="hosting-title" className="text-section-xl font-extrabold text-foreground">
              Host this portfolio on GitHub Pages
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Six pre-flight checks from code to live URL. No server needed, the site exports as plain static files.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps?.map((s, i) => (
            <Reveal key={s?.code} delay={(i % 3) * 110}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary">
                <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-primary">{s?.code}</span>
                <h3 className="mt-4 text-lg font-bold text-card-foreground">{s?.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s?.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-secondary">
            <div className="flex items-center gap-2 border-b border-border px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
              <span className="h-2.5 w-2.5 rounded-full bg-warning" />
              <span className="h-2.5 w-2.5 rounded-full bg-success" />
              <span className="ml-3 font-mono-tech text-xs text-muted-foreground">next.config.mjs</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono-tech text-sm leading-relaxed text-secondary-foreground">
{`const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
};
export default nextConfig;`}
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}