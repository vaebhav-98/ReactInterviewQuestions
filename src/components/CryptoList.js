import React from "react";

// Memoized Child Component
const CryptoList = React.memo(({ coins }) => {
    console.log("CryptoList re-rendered"); // Only logs when necessary
    return (
        <ul className="divide-y divide-gray-200">
            {coins.map((coin) => (
                <li key={coin.id} className="py-4 flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-300">{coin.name}</span>
                    <span className="text-sm text-gray-500">${coin.current_price}</span>
                </li>
            ))}
        </ul>
    );
});
export default CryptoList