import {createContext} from "react";

export const  NewsContext = createContext();


export const NewsContextProvider = (props) => {

    const apiKey = "2c7d9c406bd447b1be766fbbdf275f38";
    const baseUrl = "https://newsapi.org/v2/everything?q";

    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month =  ("0"+ (date.getUTCMonth()+1)).slice(-2);
        const day = ("0" + date.getUTCDate()).slice(-2);
        return `${year}-${month}-${day}`;

    }

    const getDetails = async (query) => {
        const currentDate = getCurrentDate();
        const url = `${baseUrl}=${query}&language=en&from=${currentDate}&sortBy=relevancy&apiKey=${apiKey}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.articles;
        }catch (err){
            console.error(new Error(err));
        }
    }

    const goToNewsSource = (url) => {
        window.location.href = url;
    }


    return (
        <NewsContext.Provider value={{ getDetails , goToNewsSource}}>
            {props.children}
        </NewsContext.Provider>
    );
}

