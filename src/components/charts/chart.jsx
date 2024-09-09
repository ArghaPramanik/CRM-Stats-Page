/* eslint-disable react/prop-types */


import ReactApexChart from "react-apexcharts";
import { useTheme } from "../../context/ThemeContext.jsx";

const Charts = ({ timeRange }) => {
  const { isDarkMode } = useTheme();
  
  const getChartDataForTimeRange = (timeRange) => {
    switch (timeRange) {
      case "1 day":
        return {
          sales: [30, 40, 35, 50, 49, 60, 70, 91, 125],
          revenue: [1000, 1200, 1300, 1400, 1800, 2000, 2200, 2400, 2600],
          barData: [44, 55, 41, 67, 22, 43],
          pieData: [44, 55, 13, 43, 22],
        };
      case "1 week":
        return {
          sales: [40, 50, 45, 60, 59, 70, 80, 101, 135],
          revenue: [1500, 1700, 1800, 1900, 2300, 2500, 2700, 2900, 3100],
          barData: [54, 65, 51, 77, 32, 53],
          pieData: [54, 65, 23, 53, 32],
        };
      
      case "1 month":
        return {
          sales: [100, 120, 90,120,200,900,500],
          revenue: [50, 80, 140,190,130,160],
          barData: [60, 70, 50,40,30 ],
          pieData: [60, 25, 15,10,25],
        };
      case "3 months":
        return {
          sales: [200, 150, 100],
          revenue: [90, 110, 160],
          barData: [70, 80, 60],
          pieData: [65, 20, 15],
        };
      case "6 months":
        return {
          sales: [300, 200, 150],
          revenue: [140, 160, 190],
          barData: [80, 90, 70],
          pieData: [70, 15, 15],
        };
      case "1 year":
        return {
          sales: [600, 450, 300],
          revenue: [300, 400, 500],
          barData: [90, 100, 80],
          pieData: [75, 10, 15],
        };
      default:
        return {
          sales: [30, 40, 35, 50, 49, 60, 70, 91, 125],
          revenue: [1000, 1200, 1300, 1400, 1800, 2000, 2200, 2400, 2600],
          barData: [44, 55, 41, 67, 22, 43],
          pieData: [44, 55, 13, 43, 22],
        };
    }
  };

  const chartData = getChartDataForTimeRange(timeRange);

  const getChartOptions = (type) => {
    const baseOptions = {
      chart: {
        height: 350,
        type: type,
        foreColor: isDarkMode ? '#f0f0f0' : '#333',
        background: 'transparent',
      },
      theme: {
        mode: isDarkMode ? 'dark' : 'light',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      yaxis: {
        title: {
          text: type === 'line' ? 'Revenue ($)' : 'Sales',
        },
      },
      colors: isDarkMode ? ['#38d16a', '#35B8E0', '#6658DD'] : ['#008FFB', '#00E396', '#FEB019'],
      tooltip: {
        theme: isDarkMode ? 'dark' : 'light',
      },
    };

    if (type === 'pie' || type === 'donut') {
      baseOptions.labels = ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'];
      baseOptions.responsive = [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }];
    }

    return baseOptions;
  };

  const lineChartOptions = {
    ...getChartOptions('line'),
    stroke: {
      curve: 'smooth',
    },
  };

  const barChartOptions = {
    ...getChartOptions('bar'),
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  const pieChartOptions = {
    ...getChartOptions('donut'),
    legend: {
      position: 'bottom',
    },
  };

  // Add the necessary Tailwind CSS classes for text color here
  const textColorClass = isDarkMode ? "text-white" : "text-black";  // Ensure black text in light mode

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      <div className={`p-6 bg-white dark:bg-[#313844] rounded-lg shadow-lg transition-colors duration-200`}>
        <h2 className={`font-semibold text-lg ${textColorClass}`}>Revenue Trend</h2>
        <ReactApexChart 
          options={lineChartOptions} 
          series={[{
            name: 'Revenue',
            data: chartData.revenue
          }]} 
          type="line" 
          height={350} 
        />
      </div>
      <div className={`p-6 bg-white dark:bg-[#313844] rounded-lg shadow-lg transition-colors duration-200`}>
        <h2 className={`font-semibold text-lg ${textColorClass}`}>Sales Analytics</h2>
        <ReactApexChart 
          options={barChartOptions} 
          series={[{
            name: 'Sales',
            data: chartData.barData
          }]} 
          type="bar" 
          height={350} 
        />
      </div>
      <div className={`p-6 bg-white dark:bg-[#313844] rounded-lg shadow-lg transition-colors duration-200`}>
        <h2 className={`font-semibold text-lg ${textColorClass}`}>Product Distribution</h2>
        <ReactApexChart 
          options={pieChartOptions} 
          series={chartData.pieData} 
          type="donut" 
          height={350} 
        />
      </div>
    </section>
  );
};

export default Charts;