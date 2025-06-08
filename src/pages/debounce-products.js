import useDebounce from '../components/useDebounce';
import React, { useEffect, useState } from 'react'

const index = () => {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);

    const searchValue = useDebounce(value, 900);


    const fetchProducts = async (searchValue = '') =>{
        try{
            let url = `https://dummyjson.com/products/`
            const response = await fetch(url);
            const result = await response.json();
            if(result.products){
                setData(result.products);
            }
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        if(searchValue){
            const filteredProduct = data.filter((item)=> item.title.toLowerCase().includes(searchValue.toLowerCase()))
            setData(filteredProduct)
            console.log(filteredProduct)
        }
        else{
            fetchProducts()
        }
    },[searchValue])

  return (
    <div>
      <input
      type='text'
      placeholder='search title here'
      value={value}
      onChange={(e)=> setValue(e.target.value)}
      />
    </div>
  )
}

export default index
