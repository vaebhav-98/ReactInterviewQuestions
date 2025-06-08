import React from "react";

// Memoized Search Input
const SearchInput = React.memo(({ onFilterChange }) => {
    console.log("SearchInput re-rendered");
    return <input
        type="text"
        onChange={onFilterChange}
        placeholder="Search coin..."
        className="mb-4 p-2 border border-gray-300 rounded w-full text-zinc-900"
    />;
});

export default SearchInput;