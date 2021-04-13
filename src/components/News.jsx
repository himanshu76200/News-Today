import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import "../styles/News.css";
import { UrlContext } from "../UrlContext";

function News() {
    const [news, setNews] = useState([]);
    const [url, setUrl] = useContext(UrlContext);

    useEffect(() => {

        const fetchData = async () => {

            const response = await axios.get(url);
            setNews(response.data.articles);
            console.log("request >>>>> ", response);
            return response;

        }

        fetchData();

    }, [url])

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
                            <p>{newsItem.content} <a href={newsItem.url} target="_blank" rel="noreferrer">Read more</a></p>
                        </div>

                    </div>

                </div>
            )



        })






    )
}

export default News;
