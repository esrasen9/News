import React from 'react';
import NewsCard from "./NewsCard";
import uniqid from "uniqid";

const NewsContainer = ({news}) =>  {
    return (
        <div className="news-container">
            {
                news.map(item => <NewsCard
                    key={uniqid()}
                    news={item}/>)
            }
        </div>
    );
}

export default NewsContainer;