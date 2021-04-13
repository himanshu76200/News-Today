import React, { useContext } from 'react';
import "../styles/Banner.css"
import { UrlContext } from "../UrlContext";
import env from "react-dotenv";

function Banner() {

    const [url, setUrl] = useContext(UrlContext);

    const handleClick = () => {
        setUrl(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${env.API_KEY}`);
    }

    return (
        <div className="banner">
            <div className="banner__heading" onClick={handleClick}>
                <h1>NEWS TODAY</h1>
            </div>
        </div>
    )
}

export default Banner;
