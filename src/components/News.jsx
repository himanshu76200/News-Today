import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../styles/News.css";

const url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=af7f385e6e7f44528612e10359c472ef"

// let config = {
//     headers: {
//         "x-bingapis-sdk": true,
//         "x-rapidapi-key": "9dc3c28d57msh7e0e551d314dbb6p140b53jsn095d899c2dd9",
//         "x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
//     },
//     params: {
//         "safeSearch": "off",
//         "textFormat": "Raw"
//     }
// };

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            const response = await axios.get(url);
            setNews(response.data.articles);
            console.log("request >>>>> ", response);
            return response;

        }

        fetchData();

    }, [])

    useEffect(() => {
        console.log(news)
    }, [news])

    // const handleClick = () => {

    // }

    return (

        news.map((newsItem, index) => {

            return (
                <div className="news">

                    <div className="news__title">
                        <h2>{newsItem.title}</h2>
                    </div>

                    <div className="news__content">

                        <div className="news__image">
                            <img src={newsItem.urlToImage}
                                alt="img"
                            />
                        </div>

                        <div className="news__description">
                            <p>{newsItem.description}</p>
                            <p>{newsItem.content} <a href={newsItem.url}>Read more</a></p>
                        </div>

                    </div>

                </div>
            )



        })






    )
}

export default News;
