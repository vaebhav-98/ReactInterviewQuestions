import React, { useEffect, useState } from 'react'

const index = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);

    const pageHandler = (selectedPage) => {
        // alert(selectedPage)
        if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
            setPage(selectedPage)
        }
    }

    const fetchProducts = async () => {
        const response = await fetch(`https://www.dummyjson.com/products?limit=100`);
        const result = await response.json();

        if (result && result.products) {
            setProducts(result.products)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            {
                products.length > 0 && products.slice(page * 10 - 10, page * 10).map((item) => {
                    return (
                        <div>{item.title}</div>
                    )
                })
            }

            {
                products.length > 0 && <div>
                    <button disabled={page <= 1 ? true : false} onClick={() => pageHandler(page - 1)}>Prev</button>

                    {
                        [...Array(products.length / 10)].map((_, idx) => {
                            return (
                                <button onClick={() => pageHandler(idx + 1)}>{idx + 1}</button>
                            )
                        })
                    }

                    <button disabled={page < products.length / 10 ? false : true} onClick={() => pageHandler(page + 1)}>Next</button>
                </div>
            }
        </div>
    )
}

export default index
