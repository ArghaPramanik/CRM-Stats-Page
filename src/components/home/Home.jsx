import { useState } from 'react';
import TimeSelector from '../timeSelector/TimeSelector.jsx';
import Charts from '../charts/chart.jsx';
import Cards from '../cards/cards.jsx';
const Home = () => {
  const [timeRange, setTimeRange] = useState("1 day");
  
  return (
    <section className="py-10 bg-gray-100 dark:bg-[#282e38] transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="heading flex justify-between items-center mb-6">
          <h3 className="text-3xl font-medium text-gray-900 dark:text-white">CRM Stats</h3>
          <span className="text-3xl text-gray-900 dark:text-white font-medium">TailorTalk / CRM Stats</span>
        </div>
        
        <div className="mb-8"> {/* Added margin-bottom */}
          <TimeSelector setTimeRange={setTimeRange} />
        </div>
        
        <div className="mb-8"> {/* Added margin-bottom */}
          <Cards timeRange={timeRange} />
        </div>
        
        <Charts timeRange={timeRange} />
      </div>
    </section>
  );
};

export default Home;
