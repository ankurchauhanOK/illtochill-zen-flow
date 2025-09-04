import { siteContent } from '../../data/siteContent';

export function CustomerStoriesSection() {
  const { stories } = siteContent;

  return (
    <section className="customer-stories bg-background text-foreground py-20 px-8 md:px-16">
      <h3 className="text-3xl md:text-4xl font-bold text-center font-heading mb-10">
        Customer Stories
      </h3>

      <div 
        className="mt-10 grid gap-6"
        style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))' }}
      >
        {stories.map((story, index) => {
          // Varying grid spans for masonry effect
          const spans = [
            'col-span-12 md:col-span-6 lg:col-span-4 row-span-1',
            'col-span-12 md:col-span-6 lg:col-span-8 row-span-2',
            'col-span-12 md:col-span-6 lg:col-span-4 row-span-1',
            'col-span-12 md:col-span-6 lg:col-span-5 row-span-1',
            'col-span-12 md:col-span-6 lg:col-span-7 row-span-1'
          ];
          
          const isLarge = index === 1; // Second card is large
          
          return (
            <article
              key={index}
              className={`story-card ${spans[index] || 'col-span-12 md:col-span-6 lg:col-span-4 row-span-1'} 
                         rounded-2xl p-6 bg-surface/60 backdrop-blur border border-divider hover:border-primary/30 transition-all duration-300`}
            >
              <p className={`${isLarge ? 'text-xl' : 'text-lg'} leading-relaxed font-body text-foreground`}>
                "{story.quote}"
              </p>
              <div className="mt-4 text-sm text-subtext font-body">
                {story.author}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}