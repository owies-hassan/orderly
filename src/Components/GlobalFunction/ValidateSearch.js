import React from 'react';

const ValidateSearch = ({search}) => {
    const discardFirstItem=search.slice(1,search.length)
    const uppercaseFirstItem=search.split('')[0].toUpperCase()

    return `${uppercaseFirstItem}${discardFirstItem}`

};

export default ValidateSearch;