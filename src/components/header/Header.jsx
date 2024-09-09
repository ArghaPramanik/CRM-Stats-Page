import Head from "../head/Head.jsx";

const Header = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200">
      <Head />
      <header className="bg-gray-200 dark:bg-gray-700 transition-colors duration-200"></header>
    </section>
  );
};

export default Header;
