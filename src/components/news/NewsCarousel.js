import React,{useState,useContext,useEffect} from 'react';
import {NewsContext} from "../context/NewsContext";
import NewsContainer from "./NewsContainer";
import CarouselItem from "./CarouselItem";
import SlideNewsRight from "./SlideNewsRight";

const NewsCarousel = () => {
    const context = useContext(NewsContext);
    const [news,setNews] =useState([]);
    useEffect(()=>{
        context.getDetails("general").then((data) =>setNews(data))
    },[])

    const getNews = (allNews) => {
      const slideNewsLeft = [];
      const slideNewsRight = [];
      const otherNews = [];
      allNews.forEach((news,index) => {
              if (index < 3) {
                  slideNewsLeft.push(news);
              } else if (index >= 3 && index < 5) {
                  slideNewsRight.push(news)
              } else {
                  otherNews.push(news)
              }
          }
      );
      return {slideNewsLeft,slideNewsRight,otherNews};
    }

    const {slideNewsLeft,slideNewsRight,otherNews} = getNews(news);
    return (
        <div className="slide-news-container">
            <div className="top-news-container">
                <CarouselItem slideNewsLeft={slideNewsLeft} />
                <SlideNewsRight className="slide-news-right" news={slideNewsRight}/>
            </div>
            <NewsContainer className="other-news-container" news={otherNews}/>
        </div>

    );

}


export default NewsCarousel;
