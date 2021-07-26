import React from 'react';
import News from "../news/News";

const NewsPage = ({query}) =>  {
    return (
        <div>
            <News query={query}/>
        </div>
    );
}

export default NewsPage;