/* eslint-disable react/prop-types */

import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const Common = ({ title, color = 'text-white' }) => {
  return (
    <div className="flex items-center justify-between text-gray-700">
      <h3 className={`font-semibold text-xl ${color}`}>{title}</h3>
      <MoreVertOutlinedIcon className="text-white" />
    </div>
  );
};

export default Common;
