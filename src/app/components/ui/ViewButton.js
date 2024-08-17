import React from "react";

const ViewButton = ({ title }) => {
  return (
    <button className="bg-transparent rounded-full border border-black/40 text-base font-medium w-full md:w-1/6 py-2">
      {title}
    </button>
  );
};

export default ViewButton;
