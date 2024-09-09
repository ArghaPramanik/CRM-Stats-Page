
import "./App.css";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-[#282e38] dark:text-white transition-colors duration-200">
        <Header />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;