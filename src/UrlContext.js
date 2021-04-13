import React, { createContext, useState } from "react";

export const UrlContext = createContext();

export const UrlProvider = (props) => {

    const defaultUrl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=af7f385e6e7f44528612e10359c472ef";

    const [url, setUrl] = useState(defaultUrl);

    return (
        <UrlContext.Provider value={[url, setUrl]}>
            {props.children}
        </UrlContext.Provider>
    )

}