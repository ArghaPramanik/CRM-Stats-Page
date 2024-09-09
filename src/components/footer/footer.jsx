const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-[#313844] py-5 mt-10 text-gray-900 dark:text-white transition-colors duration-200">
      <div className="container mx-auto flex justify-between items-center">
        <div className="legal">
          <p className="text-xl">
            2024 © TailorTalk theme by <span className="text-green-500">Argha Pramanik</span>
          </p>
        </div>
        <div className="flex space-x-8">
          <li className="ml-8 text-xl">About Us</li>
          <li className="ml-8 text-xl">Help</li>
          <li className="ml-8 text-xl">Contact Us</li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;