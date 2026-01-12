const Footer = () => {
  return (
    <footer className="bg-linear-darker border-t border-linear-border py-8">
      <div className="container mx-auto px-6">
        <ul className="flex gap-6 flex-wrap justify-center text-sm">
          <li>
            <a
              href="https://autobot.tf/"
              target="_blank"
              className="text-linear-text-secondary hover:text-linear-text transition-colors"
            >
              Autobot.tf
            </a>
          </li>
          <li>
            <a
              href="https://github.com/TF2Autobot/tf2autobot/wiki"
              target="_blank"
              className="text-linear-text-secondary hover:text-linear-text transition-colors"
            >
              Wiki
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/invite/4k5tmMkXjB"
              target="_blank"
              className="text-linear-text-secondary hover:text-linear-text transition-colors"
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://github.com/TF2Autobot/tf2autobot"
              target="_blank"
              className="text-linear-text-secondary hover:text-linear-text transition-colors"
            >
              TF2Autobot Github
            </a>
          </li>
          <li>
            <a
              href="https://github.com/adinath-23/tf2autobot-easy-config"
              target="_blank"
              className="text-linear-text-secondary hover:text-linear-text transition-colors"
            >
              EasyConfig Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
