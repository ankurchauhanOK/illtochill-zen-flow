import { siteContent } from '../../data/siteContent';

export function ChronicSection() {
  const { chronic } = siteContent;

  return (
    <section className="chronic-section relative h-screen bg-background text-foreground">
      <div className="container mx-auto h-full flex gap-8 px-8 md:px-16">
        {/* Left fixed panel */}
        <aside className="w-1/3 flex flex-col justify-center shrink-0">
          <h2 className="text-4xl font-bold font-heading">{chronic.heading}</h2>
          <p className="mt-3 text-subtext font-body">{chronic.subheading}</p>
          <video 
            className="mt-6 w-full max-h-64 rounded-xl object-cover" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={chronic.video} type="video/mp4" />
          </video>
        </aside>

        {/* Right moving track */}
        <div className="w-2/3 overflow-hidden">
          <div className="chronic-track flex gap-10 will-change-transform">
            {chronic.columns.map((column, colIndex) => (
              <div key={colIndex} className="grid grid-cols-1 gap-6 min-w-[420px]">
                {column.map((card, cardIndex) => (
                  <a
                    key={cardIndex}
                    href={card.slug}
                    className="chronic-card block rounded-2xl p-6 bg-surface hover:bg-surface-elevated transition-colors border border-divider hover:border-primary/30"
                    style={{ height: `${card.h * 4}px` }}
                  >
                    <div className="text-base font-semibold text-foreground font-body">
                      {card.title}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-wide text-subtext">
                      {card.kind}
                    </div>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}