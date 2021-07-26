import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import {NewsContext} from "../context/NewsContext";
import {useContext} from "react";

const CarouselItem = ({slideNewsLeft}) => {
    const context = useContext(NewsContext);
    styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;`;
    return (
        <Carousel className="slide-news-left" easing="ease">
            {
                slideNewsLeft.map(item => {
                    const {urlToImage,url} = item;
                    return(
                        <div
                            className="each-slide">
                            <img src={urlToImage}
                                 alt="news-slide"
                                 className="slide-image"
                                 onClick={()=>context.goToNewsSource(url)}
                            />
                        </div>
                    )
                })

            }
        </Carousel>
    );
}

export default CarouselItem;