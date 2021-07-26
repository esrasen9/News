import React, {useContext, useEffect,useState} from 'react';
import NewsContainer from "./NewsContainer";
import {NewsContext} from "../context/NewsContext";

const News = ({query}) =>  {
    const context = useContext(NewsContext);

    const [news,setNews] =useState([]);
    useEffect(()=>{
        context.getDetails(query).then((data) =>setNews(data))
    },[])

    return (
        <div>
            <NewsContainer news={news}/>
        </div>
    );
}

export default News;