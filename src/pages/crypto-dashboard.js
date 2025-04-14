
import CryptoList from '@/components/CryptoList';
import SearchInput from '@/components/SearchInput';
import SortButton from '@/components/SortButton';
import React, { useCallback, useEffect, useMemo, useState } from 'react'

const index = () => {
    const [coins, setCoins] = useState([]);
    const [filter, setFilter] = useState("");
    const [sortByPrice, setSortByPrice] = useState(false);

    // Fetch cryptocurrency data
    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
            .then((res) => res.json())
            .then((data) => setCoins(data));
    }, []);

    // Memoized function to avoid re-renders of SearchInput
    const handleFilterChange = useCallback((e) => {
        setFilter(e.target.value);
    }, []);

    // Memoized function to avoid re-renders of SortButton
    const toggleSortByPrice = useCallback(() => {
        setSortByPrice((prev) => !prev);
    }, []);

    // Memoized filtered & sorted coins
    const filteredCoins = useMemo(() => {
        console.log("Filtering and sorting coins...");
        let result = coins.filter((coin) =>
            coin.name.toLowerCase().includes(filter.toLowerCase())
        );

        if (sortByPrice) {
            result = result.sort((a, b) => a.current_price - b.current_price);
        }

        return result;
    }, [coins, filter, sortByPrice]);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Crypto Dashboard</h2>
            <SearchInput onFilterChange={handleFilterChange} />
            <SortButton onToggleSort={toggleSortByPrice} />
            <CryptoList coins={filteredCoins} />
        </div>
    )
}

export default index
