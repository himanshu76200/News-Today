import React, { createContext, useState } from "react";
import env from "react-dotenv";

export const UrlContext = createContext();

export const UrlProvider = (props) => {

    const defaultUrl = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${env.API_KEY}`

    const [url, setUrl] = useState(defaultUrl);

    return (
        <UrlContext.Provider value={[url, setUrl]}>
            {props.children}
        </UrlContext.Provider>
    )

}