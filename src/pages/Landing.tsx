<<<<<<< Updated upstream
import Navbar from '../components/Navbar'
import UrlInput from '../components/UrlInput'
import { supabase } from "../lib/supabaseClient";
=======
import Navbar from "../components/Navbar";
import UrlInput from "../components/UrlInput";
>>>>>>> Stashed changes

export default function Landing() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background placeholder — swap for real food image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Landing-Hero.png')" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 px-12 w-full">
          <p className="body-text text-white">Eat Good. Stay Organized.</p>

          <h1 className="heading-xl text-white max-w-4xl leading-none">
            RECIPE TRACKING MADE EASY.
          </h1>

          <p className="body-text text-white max-w-2xl">
            Paste a TikTok or YouTube link. Get ingredients, steps, and
            estimated macros — in under 30 seconds.
          </p>
          <div className="w-full max-w-2xl">
            <UrlInput />
          </div>

          <p className="text-sm text-white font-body">
            No account needed&nbsp;·&nbsp;Supports TikTok, YouTube,
            Instagram&nbsp;·&nbsp;AI-powered extraction
          </p>
        </div>

        {/* Torn paper bottom edge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="w-full h-16 fill-cream-light"
          >
            <path d="M0,60 L0,30 Q30,10 60,28 Q90,46 120,22 Q150,0 180,18 Q210,36 240,14 Q270,0 300,20 Q330,40 360,18 Q390,0 420,24 Q450,46 480,20 Q510,0 540,22 Q570,44 600,18 Q630,0 660,26 Q690,50 720,22 Q750,0 780,20 Q810,40 840,16 Q870,0 900,22 Q930,44 960,18 Q990,0 1020,24 Q1050,46 1080,20 Q1110,0 1140,22 Q1170,42 1200,20 L1200,60 Z" />
          </svg>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-cream-light py-24 px-12">
        <div className="text-center">
          <h2 className="heading-md text-green mb-16">HOW IT WORKS</h2>

          <div className="grid grid-cols-3 gap-16 text-left">
            {[
              {
                title: "Paste a Link",
                desc: "Copy any recipe video URL from TikTok, YouTube, or Instagram.",
                icon: "🔗",
              },
              {
                title: "AI Extracts It",
                desc: "Our AI transcribes and parses ingredients, steps, and macros automatically.",
                icon: "⚡",
              },
              {
                title: "Save & Plan",
                desc: "Edit the recipe, add it to your meal plan, and track your nutrition.",
                icon: "📋",
              },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="flex items-start gap-8">
                <span className="text-7xl shrink-0">{icon}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="heading-sm text-green-dark">{title}</h3>
                  <p className="body-text text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PrepPal */}
      <section className="bg-green py-24 px-12 text-center">
        <div className="flex flex-col items-center gap-8">
          <h2 className="heading-lg text-white">WHY PREPPAL?</h2>
          <p className="body-text text-white max-w-2xl">
            Stop screenshot-ing recipes and losing track of what you ate.
            PrepPal turns any social media recipe into a structured, searchable
            meal plan — in seconds.
          </p>
          <a
            href="/signup"
            className="mt-4 px-10 py-4 bg-gold text-green-dark font-body font-semibold rounded-full hover:brightness-110 transition"
          >
            Get Started Free
          </a>
        </div>
      </section>
    </div>
  );
}
