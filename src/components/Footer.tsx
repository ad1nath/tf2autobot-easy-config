const Footer = () => {
  return (
    <footer className="bg-black flex justify-center text-sm border-t border-white shadow-lg text-gray-400">
      <ul className="flex gap-5 p-5 flex-wrap justify-center">
        <li className="hover:text-white">
          <a href="https://autobot.tf/" target="_blank">
            Autobot.tf
          </a>
        </li>
        <li className="hover:text-white">
          <a
            href="https://github.com/TF2Autobot/tf2autobot/wiki"
            target="_blank"
          >
            Wiki
          </a>
        </li>
        <li className="hover:text-white">
          <a href="https://discord.com/invite/4k5tmMkXjB" target="_blank">
            Discord
          </a>
        </li>
        <li className="hover:text-white">
          <a href="https://github.com/TF2Autobot/tf2autobot" target="_blank">
            TF2Autobot Github
          </a>
        </li>
        <li className="hover:text-white">
          <a
            href="https://github.com/adinath-23/tf2autobot-easy-config"
            target="_blank"
          >
            EasyConfig Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
