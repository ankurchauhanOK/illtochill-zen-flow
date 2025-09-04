import { siteContent } from '../../data/siteContent';

export function MentalSection() {
  const { mental } = siteContent;

  return (
    <section className="mental-section relative h-screen bg-surface text-foreground">
      <div className="mental-inner h-full flex gap-8 px-8 md:px-16">
        {/* Left: grid (now first) */}
        <div className="w-2/3 overflow-hidden">
          <div className="mental-track flex gap-8 will-change-transform">
            {mental.columns.map((column, colIndex) => (
              <div key={colIndex} className="grid grid-cols-2 gap-4 min-w-[480px]">
                {column.map((card, cardIndex) => (
                  <a
                    key={cardIndex}
                    href={card.slug}
                    className="mental-card group block rounded-xl p-4 bg-surface-elevated hover:bg-background transition-all duration-300 border border-divider hover:border-primary/30 hover:shadow-medium"
                    style={{ height: `${card.h * 3}px` }}
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className="text-sm font-semibold text-foreground font-body group-hover:text-primary transition-colors">
                          {card.title}
                        </div>
                        <div className="mt-1 text-xs uppercase tracking-wide text-subtext">
                          {card.kind}
                        </div>
                      </div>
                      <div className="mt-3 flex items-center text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Shop now</span>
                        <svg className="w-3 h-3 ml-1" viewBox="0 0 12 12" fill="currentColor">
                          <path d="M3.5 5.5h4m0 0L6 4m1.5 1.5L6 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Right: heading + video */}
        <aside className="w-1/3 flex flex-col justify-center shrink-0">
          <h2 className="text-4xl font-bold font-heading">{mental.heading}</h2>
          <p className="mt-3 text-subtext font-body">{mental.subheading}</p>
          <video 
            className="mt-6 w-full max-h-64 rounded-xl object-cover" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={mental.video} type="video/mp4" />
          </video>
        </aside>
      </div>
    </section>
  );
}