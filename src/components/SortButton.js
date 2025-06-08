import React from "react";


const SortButton = React.memo(({ onToggleSort }) => {
  console.log("SortButton re-rendered");
  return (<button
    onClick={onToggleSort}
    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    Sort by Price
  </button>);
});


export default SortButton