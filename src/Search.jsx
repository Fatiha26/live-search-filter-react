import React, { useState } from 'react'
import SearchResult from './SearchResult';

const Search = (props) => {
    const [img,setImg] = useState("");
    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);
        console.log(data);
    }
    return(
        <>
        <div className="searchbar">
            <input type="text" placeholder='Search here....' value={img} onChange={inputEvent} />
        </div>
        <SearchResult name={img}/>
        </>
    )
};

export default Search;