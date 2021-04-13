import React, { useState, useContext } from 'react';
import "../styles/SearchBar.css";
import SearchIcon from '@material-ui/icons/Search';
import { UrlContext } from "../UrlContext";
import env from "react-dotenv";


// context api

function SearchBar() {

    const [input, setInput] = useState("");
    const [url, setUrl] = useContext(UrlContext);

    const handleChange = (event) => {
        setInput(event.target.value);
    }


    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            setUrl(`https://newsapi.org/v2/everything?q=${input}&apiKey=${env.API_KEY}`);
        }
    }

    return (
        <div className="searchBar">
            <SearchIcon />
            <input
                placeholder="search for News, Articles or Topics"
                type="text"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
        </div>
    )
}

export default SearchBar;

