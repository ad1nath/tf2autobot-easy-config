import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

import Footer from "../components/Footer";

function Index() {
  return (
    <div className="min-h-screen bg-linear-dark text-linear-text">
      <nav className="px-6 py-4 border-b border-linear-border bg-linear-darker">
        <h1 className="text-linear-text font-semibold text-lg">
          TF2Autobot EasyConfig
        </h1>
      </nav>
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-semibold mb-6 text-linear-text">
            Configure Your TF2Autobot
            <span className="text-linear-accent"> Effortlessly</span>
          </h1>
          <p className="text-xl text-linear-text-secondary mb-8 leading-relaxed">
            A user-friendly tool to generate and customize your TF2Autobot
            configuration files with just a few clicks.
          </p>
          <Link
            to="/generate"
            className="bg-linear-accent hover:bg-linear-accent-hover text-linear-dark px-8 py-3 font-medium transition-colors inline-flex items-center gap-2"
          >
            Get Started
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </header>
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12 text-linear-text">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            number="1"
            title="Configure"
            description="Configure the options according to your needs and adjust the settings to perfectly match your tf2autobot requirements."
          />
          <FeatureCard
            number="2"
            title="Download"
            description="Once you’re happy with your settings, download the generated config file and place it into your bot’s folder."
          />
          <FeatureCard
            number="3"
            title="Command Generation"
            description="While the bot is running, generate commands on the fly and simply copy-paste them into the bot chat to update the configuration."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-linear-gray p-6 border border-linear-border">
      <div className="flex items-center justify-center w-10 h-10 bg-linear-accent text-linear-dark font-medium mb-4">
        {number}
      </div>
      <h3 className="text-xl font-medium mb-2 text-linear-text">{title}</h3>
      <p className="text-linear-text-secondary">{description}</p>
    </div>
  );
}
