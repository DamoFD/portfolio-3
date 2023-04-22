import React from "react";

function Skills() {
  return (
    <div className="text-white h-screen">
      <div className="flex justify-center items-center">
        <div className="h-2 w-10 bg-purple-600 mr-10 mt-2" />
        <h2 className="text-7xl text-center">Skills I Offer</h2>
        <div className="h-2 w-10 bg-purple-600 ml-10 mt-2" />
      </div>
      <div className="bg-gray-800">
        <img alt='React' />
        <img alt='Vite' />
        <img alt='Javascript' />
      </div>
    </div>
  );
}

export default Skills;
