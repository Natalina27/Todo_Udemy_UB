import React from 'react';

const SearchItem = () => {
    const searchStyle = {
        fontSize: '25px'
    };
    const searchText = 'Type here to search';
    return <input
        placeholder={searchText}
        style={searchStyle}
    />;
};

export default SearchItem;