import React from "react";
import useInfiniteScroll from "../components/useInfiniteScroll";
import { useState, useEffect } from "react";

  const fetchData = async (page: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
    return res.json();
  };

export default function infinitescroll() {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    setLoading(true);
    const newData = await fetchData(page);
    setData((prev) => [...prev, ...newData]);
    setPage((prev) => prev + 1);
    setLoading(false);
  };

  const triggerRef = useInfiniteScroll(loadMore);

  useEffect(() => {
    loadMore();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Infinite Scroll Example</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id} className="p-2 border-b">{item.title}</li>
        ))}
      </ul>

      {loading && <p className="text-center mt-4">Loading...</p>}

      <div ref={triggerRef} className="h-10"></div>
    </div>
  );
}
