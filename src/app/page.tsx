import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center md:px-10 lg:px-40">
          <div className="layout-content-container flex flex-1 flex-col max-w-[1100px]">
            <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg px-4 md:px-10 py-3">
              <div className="flex items-center gap-4">
                <div className="size-8 text-primary">
                  <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.59L5.41 11 4 12.41l7 7 9-9L18.59 9 11 16.59z"></path>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z" opacity="0.3"></path>
                  </svg>
                </div>
                <h2 className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">WP Creators</h2>
              </div>
              <div className="hidden md:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <a className="text-[#0d121b] dark:text-gray-300 dark:hover:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#services">Services</a>
                  <a className="text-[#0d121b] dark:text-gray-300 dark:hover:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#portfolio">Portfolio</a>
                  <a className="text-[#0d121b] dark:text-gray-300 dark:hover:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#testimonials">Testimonials</a>
                  <a className="text-[#0d121b] dark:text-gray-300 dark:hover:text-white text-sm font-medium leading-normal hover:text-primary transition-colors" href="#contact">Contact</a>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 hover:shadow-glow-primary transition-all duration-300">
                  <span className="truncate">Request a Quote</span>
                </button>
              </div>
              <div className="md:hidden">
                <button className="p-2">
                  <span className="material-symbols-outlined text-[#0d121b] dark:text-white">menu</span>
                </button>
              </div>
            </header>
            <main className="flex flex-col gap-20 md:gap-24 lg:gap-32 px-4">
              <section className="text-center py-20 md:py-32" id="hero">
                <div className="flex flex-col gap-6 items-center max-w-3xl mx-auto">
                  <div className="inline-block bg-primary/10 dark:bg-primary/20 text-primary dark:text-purple-300 text-sm font-bold px-4 py-2 rounded-full">AWARD-WINNING WORDPRESS DEVELOPMENT</div>
                  <h1 className="text-[#0d121b] dark:text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                    Crafting Digital Experiences That Captivate &amp; Convert
                  </h1>
                  <h2 className="text-[#4c669a] dark:text-gray-400 text-lg md:text-xl font-normal leading-normal max-w-2xl">
                    We build bespoke, high-performance WordPress sites that elevate your brand and drive business growth.
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 hover:shadow-glow-primary transition-all duration-300">
                      <span className="truncate">Start Your Project</span>
                    </button>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-gray-200 dark:bg-surface-dark text-[#0d121b] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-opacity-80 transition-colors">
                      <span className="truncate">See Our Work</span>
                    </button>
                  </div>
                </div>
              </section>
              <section id="services">
                <div className="text-center mb-12">
                  <h2 className="text-[#0d121b] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">Our Core Expertise</h2>
                  <p className="text-[#4c669a] dark:text-gray-400 mt-3 text-lg">From stunning designs to robust backends, we do it all.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col items-center text-center gap-3 rounded-xl bg-white dark:bg-surface-dark p-6 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/20 hover:-translate-y-2">
                    <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary text-3xl mb-3">
                      <span className="material-symbols-outlined">palette</span>
                    </div>
                    <h3 className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight">Custom Theme Design</h3>
                    <p className="text-[#4c669a] dark:text-gray-400 text-sm font-normal leading-normal">Unique designs that reflect your brand and captivate your audience.</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3 rounded-xl bg-white dark:bg-surface-dark p-6 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/20 hover:-translate-y-2">
                    <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary text-3xl mb-3">
                      <span className="material-symbols-outlined">shopping_bag</span>
                    </div>
                    <h3 className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight">E-commerce Powerhouses</h3>
                    <p className="text-[#4c669a] dark:text-gray-400 text-sm font-normal leading-normal">Powerful WooCommerce stores engineered to maximize your online sales.</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3 rounded-xl bg-white dark:bg-surface-dark p-6 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/20 hover:-translate-y-2">
                    <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary text-3xl mb-3">
                      <span className="material-symbols-outlined">widgets</span>
                    </div>
                    <h3 className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight">Bespoke Plugin Creation</h3>
                    <p className="text-[#4c669a] dark:text-gray-400 text-sm font-normal leading-normal">Custom plugins to extend functionality and meet your specific business needs.</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-3 rounded-xl bg-white dark:bg-surface-dark p-6 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/20 hover:-translate-y-2">
                    <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 text-primary text-3xl mb-3">
                      <span className="material-symbols-outlined">speed</span>
                    </div>
                    <h3 className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight">Performance &amp; SEO</h3>
                    <p className="text-[#4c669a] dark:text-gray-400 text-sm font-normal leading-normal">Optimizing for speed and search engines to drive organic traffic and engagement.</p>
                  </div>
                </div>
              </section>
              <section id="portfolio">
                <div className="text-center mb-12">
                  <h2 className="text-[#0d121b] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">Our Showcase</h2>
                  <p className="text-[#4c669a] dark:text-gray-400 mt-3 text-lg">Check out some of the stunning websites we've launched.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="group relative overflow-hidden rounded-xl col-span-1 md:col-span-2 aspect-[4/3]">
                    <Image className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Modern e-commerce website for a fashion brand" src="/fashion-retailer.jpg" width={800} height={600} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                      <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <h3 className="text-white text-2xl font-bold">Fashion Retailer Site</h3>
                        <p className="text-white/80 text-base mt-1">E-commerce</p>
                      </div>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl col-span-1 md:row-span-2 aspect-[2/3]">
                    <Image className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Portfolio website for a creative agency" src="/creative-agency.jpg" width={600} height={900} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                      <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <h3 className="text-white text-2xl font-bold">Creative Agency Portfolio</h3>
                        <p className="text-white/80 text-base mt-1">Portfolio</p>
                      </div>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-xl col-span-1 md:col-span-2 aspect-[4/3]">
                    <Image className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Sleek corporate website for a tech startup" src="/tech-startup.jpg" width={800} height={600} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                      <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <h3 className="text-white text-2xl font-bold">Tech Startup Hub</h3>
                        <p className="text-white/80 text-base mt-1">Corporate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="testimonials">
                <div className="text-center mb-12">
                  <h2 className="text-[#0d121b] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">Loved by Businesses Worldwide</h2>
                  <p className="text-[#4c669a] dark:text-gray-400 mt-3 text-lg">Don't just take our word for it. Here's what our clients have to say.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-surface-dark p-8 border-l-4 border-secondary">
                    <p className="text-[#4c669a] dark:text-gray-400 text-lg">"Working with WP Creators was a game-changer. They delivered a site that exceeded all expectations, and their team was a pleasure to work with. Our online presence has never been stronger."</p>
                    <div className="flex items-center gap-4 pt-4">
                      <Image className="h-14 w-14 rounded-full object-cover" alt="Profile picture of John Doe" src="/john-doe.jpg" width={56} height={56} />
                      <div>
                        <h4 className="font-bold text-[#0d121b] dark:text-white text-lg">John Doe</h4>
                        <p className="text-sm text-secondary font-semibold">CEO, Innovate Inc.</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-surface-dark p-8 border-l-4 border-secondary">
                    <p className="text-[#4c669a] dark:text-gray-400 text-lg">"The WooCommerce solution they built is robust, user-friendly, and has significantly boosted our sales. Their expertise is unmatched. Highly recommended!"</p>
                    <div className="flex items-center gap-4 pt-4">
                      <Image className="h-14 w-14 rounded-full object-cover" alt="Profile picture of Jane Smith" src="/jane-smith.jpg" width={56} height={56} />
                      <div>
                        <h4 className="font-bold text-[#0d121b] dark:text-white text-lg">Jane Smith</h4>
                        <p className="text-sm text-secondary font-semibold">Founder, The Crafty Corner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-16 my-10" id="contact">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="flex flex-col gap-4 text-center lg:text-left">
                    <h2 className="text-white text-4xl font-bold leading-tight tracking-tight">Ready to Elevate Your Digital Presence?</h2>
                    <p className="text-white/80 text-lg">Let's build something amazing together. Fill out the form, and we'll get back to you within 24 hours to discuss your project and provide a free, no-obligation quote.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                    <form className="flex flex-col gap-4">
                      <div>
                        <label className="sr-only" htmlFor="name">Name</label>
                        <input className="w-full rounded-lg border-white/20 bg-white/10 focus:border-white focus:ring-white text-white placeholder:text-white/60" id="name" placeholder="Your Name" type="text" />
                      </div>
                      <div>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input className="w-full rounded-lg border-white/20 bg-white/10 focus:border-white focus:ring-white text-white placeholder:text-white/60" id="email" placeholder="Your Email" type="email" />
                      </div>
                      <div>
                        <label className="sr-only" htmlFor="details">Project Details</label>
                        <textarea className="w-full rounded-lg border-white/20 bg-white/10 focus:border-white focus:ring-white text-white placeholder:text-white/60" id="details" placeholder="Tell us about your project..." rows={4}></textarea>
                      </div>
                      <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-white text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors" type="submit">
                        <span className="truncate">Send Request</span>
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            </main>
            <footer className="border-t border-solid border-[#e7ebf3] dark:border-gray-800 mt-10 py-8 px-4">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="size-6 text-primary">
                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.59L5.41 11 4 12.41l7 7 9-9L18.59 9 11 16.59z"></path>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z" opacity="0.3"></path>
                    </svg>
                  </div>
                  <p className="text-sm text-[#4c669a] dark:text-gray-500">© 2024 WP Creators. All rights reserved.</p>
                </div>
                <div className="flex gap-6 text-[#4c669a] dark:text-gray-400">
                  <a className="hover:text-primary transition-colors" href="#">Facebook</a>
                  <a className="hover:text-primary transition-colors" href="#">Twitter</a>
                  <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
