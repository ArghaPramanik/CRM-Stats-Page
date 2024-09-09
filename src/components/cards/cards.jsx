/* eslint-disable react/prop-types */
import Common from "../../common/Common";

const Cards = ({ timeRange }) => {
  // Create different data based on time range
  const getDataForTimeRange = (timeRange) => {
    switch (timeRange) {
      case "1 day":
        return { totalRevenue: 256, sales: 32, profit: 70 };
      case "1 week":
        return { totalRevenue: 1024, sales: 128, profit: 80 };
      case "1 month":
        return { totalRevenue: 5000, sales: 450, profit: 90 };
      case "3 months":
        return { totalRevenue: 15000, sales: 1200, profit: 95 };
      case "6 months":
        return { totalRevenue: 30000, sales: 2400, profit: 85 };
      case "1 year":
        return { totalRevenue: 60000, sales: 4800, profit: 92 };
      default:
        return { totalRevenue: 256, sales: 32, profit: 70 };
    }
  };

  const data = getDataForTimeRange(timeRange);

  // Define the Progress component
  const Progress = ({ done }) => {
    return (
      <div className="relative w-11/12 mx-auto bg-gray-300 dark:bg-[#2a544b] rounded-full mt-11 h-1.5">
        <div
          className="bg-[#38d16a] h-full rounded-full transition-all duration-300 ease-in-out"
          style={{
            width: `${done}%`,
          }}
        ></div>
      </div>
    );
  };

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="bg-white dark:bg-[#313844] p-5 rounded-lg shadow-lg transition-colors duration-200">
        {/* Ensure Common is not overriding text color */}
        <Common title={<span className="text-gray-900 dark:text-white">Total Revenue</span>} />
        <h1 className="text-3xl font-medium text-gray-900 dark:text-white">
          {data.totalRevenue}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Revenue for {timeRange}
        </p>
      </div>

      <div className="bg-white dark:bg-[#313844] p-6 rounded-lg shadow-lg transition-colors duration-200">
        <Common title={<span className="text-gray-900 dark:text-white">Sales Analytics</span>} />
        <h1 className="text-3xl font-medium text-gray-900 dark:text-white">
          {data.sales}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Sales for {timeRange}
        </p>
        <Progress done={data.profit} />
      </div>

      <div className="bg-white dark:bg-[#313844] p-5 rounded-lg shadow-lg transition-colors duration-200">
        <Common title={<span className="text-gray-900 dark:text-white">Total Revenue</span>} />
        <h1 className="text-3xl font-medium text-gray-900 dark:text-white">
          {data.totalRevenue}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Revenue for {timeRange}
        </p>
      </div>

      <div className="bg-white dark:bg-[#313844] p-6 rounded-lg shadow-lg transition-colors duration-200">
        <Common title={<span className="text-gray-900 dark:text-white">Sales Analytics</span>} />
        <h1 className="text-3xl font-medium text-gray-900 dark:text-white">
          {data.sales}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Sales for {timeRange}
        </p>
        <Progress done={data.profit} />
      </div>
    </section>
  );
};

export default Cards;
