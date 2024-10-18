import React from "react";

function CardEvent(p) {
  return (
    <div className="grid gap-[10px] items-center justify-center p-[2rem] bg-gray-300 rounded-2xl text-center w-auto ml-[10px] mr-[10px] md:h-auto">
      <div className="overflow-hidden">
        <img
          className="md:w-[400px] md:h-[400px] hover:scale-[1.3] duration-100 rounded-lg hover:rounded-lg "
          src={p.image}
          alt="Loading"
        />
      </div>

      <a target="_blank" href={p.link} className="hover:text-blue-500">
        {p.title}title
        <br />
        <button className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read More
        </button>
      </a>
    </div>
  );
}

export default CardEvent;
