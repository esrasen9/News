import React, {useContext} from 'react';
import {NewsContext} from "../context/NewsContext";

const SlideNewsRight = ({news}) =>  {
    const context = useContext(NewsContext)
    const {goToNewsSource} = context;
    return (
        <div className="slide-news-right-container">
            {
                news.map((item) =>{
                    const {title,url,urlToImage} = item;
                    return (
                        <div className="slide-news-right-card">
                            <h1 onClick={()=>goToNewsSource(url)} className="news-title">{title}</h1>
                            <img onClick={()=> goToNewsSource(url)} className="news-img" src={urlToImage} alt={news.author}/>
                        </div>
                    )}

                )
            }
        </div>
    );
}

export default SlideNewsRight;