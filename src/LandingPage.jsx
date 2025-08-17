export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight">Your Brand</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:opacity-80">Features</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-gray-50">Get Started</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Build a clean, responsive website in minutes
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              This starter landing page is production-ready with a modern layout, accessible markup, and mobile-first styling using Tailwind CSS.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-white font-medium hover:opacity-90">Contact Us</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 font-medium hover:bg-gray-50">See Features</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">No frameworks required — just drop into any React app.</div>
          </div>
          <div className="rounded-3xl shadow-xl border p-6">
            <div className="aspect-video rounded-2xl bg-gray-100 grid place-items-center text-gray-500">
              <span className="text-sm">Hero Image / Product Shot</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-gray-500">
              <div className="h-16 rounded-xl bg-gray-100" />
              <div className="h-16 rounded-xl bg-gray-100" />
              <div className="h-16 rounded-xl bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Features</h2>
          <p className="mt-2 text-gray-600">Opinionated defaults. Easy to customize.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[{
              title: 'Responsive by default',
              desc: 'Scales beautifully from mobile to desktop with sensible spacing and typography.'
            }, {
              title: 'Accessible markup',
              desc: 'Semantic HTML and good contrast so more people can use your site.'
            }, {
              title: 'Clean, modern UI',
              desc: 'Rounded corners, soft shadows, and a balanced grid layout out of the box.'
            }].map((f, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-lg font-medium">{f.title}</div>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl bg-gray-100 aspect-video" />
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">About Us</h3>
            <p className="mt-3 text-gray-600">
              Replace this text with your story, mission, and value proposition. Keep it short and scannable.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm list-disc list-inside">
              <li>Trusted by customers worldwide</li>
              <li>Fast setup, clear pricing</li>
              <li>Friendly support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Get in touch</h3>
          <p className="mt-2 text-gray-600">Drop us a line and we’ll get back to you soon.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid md:grid-cols-3 gap-3">
            <input className="rounded-2xl border px-4 py-3" placeholder="Your name" />
            <input type="email" className="rounded-2xl border px-4 py-3" placeholder="Email address" />
            <button className="rounded-2xl bg-black text-white px-4 py-3 font-medium">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Your Brand</span>
          <a href="#" className="hover:opacity-80">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
