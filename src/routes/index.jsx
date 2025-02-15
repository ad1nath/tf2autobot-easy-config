import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

import React from "react";
import Footer from "@/components/Footer";

function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <nav className="p-5    flex justify-between">
        <h1 className=" text-slate-100 text-xl font-bold">
          TF2Autobot EasyConfig
        </h1>
      </nav>
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Configure Your TF2Autobot
            <span className="text-lime-500"> Effortlessly</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            A user-friendly tool to generate and customize your TF2Autobot
            configuration files with just a few clicks.
          </p>
          <Link
            to="/generate"
            className="bg-lime-500 hover:bg-lime-600 text-white px-8 py-3 rounded-lg max-w-fit font-semibold flex items-center gap-2 mx-auto transition-colors"
          >
            Get Started
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </header>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
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

function FeatureCard({ number, title, description }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg text-center">
      <div className="flex-shrink-0 w-8 h-8 bg-lime-600 rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
