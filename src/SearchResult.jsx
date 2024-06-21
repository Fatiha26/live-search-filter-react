import React from 'react'

const SearchResult = (props) => {
    const img = 'https://picsum.photos/200/200/?${props.name}';
    return(
        <>
         <div className="img">
            <img src={img} alt="lorem" />
         </div>
        </>
    )
};

export default SearchResult;