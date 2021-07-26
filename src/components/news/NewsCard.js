import React, {useContext} from 'react';
import uniqid from "uniqid";
import {Link} from "react-router-dom";
import {NewsContext} from "../context/NewsContext";

const NewsCard = ({news}) =>  {
    const context = useContext(NewsContext);
    const {title,url,urlToImage,description,
        publishedAt,source,author} = news;
    const {goToNewsSource} = context;
    return (
        <div className="news-detail-card"  key={uniqid()}>
            <div className="main-info">
                <h1 onClick={()=>goToNewsSource(url)} className="news-title">{title}</h1>
                <img onClick={()=> goToNewsSource(url)} className="news-img" src={urlToImage} alt={news.author}/>
            </div>
            <div className="news-details">
                <p className="news-desc">{description}</p>
                <span className="news-author">{author}</span>
                <span className="news-published-date">{publishedAt}</span>
                <span className="news-source-name">
                    <Link to={{pathname:news.url}} target="_blank">{source.name}</Link>
                </span>
            </div>
        </div>
    );
}

export default NewsCard;