import { useEffect, useState } from 'react';
import './CSS/Content.css';

const Content = () => {

    const [data, setData] = useState([])

    const news = () => {
        var url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=14c328bfa57949a2a2033883cc99d596";
        var req = new Request(url);
        return fetch(req).then((response) => response.json()).then((d) => setData(d.articles))
    }

    useEffect(() => {
        news()
    }, [])

    const titleArray = []
    const descriptionArray = []
    const urlArray = []

    for (var i = 0; i < data.length; i++) {
        titleArray.push([data[i].title, data[i].url, data[i].description]);
    }

    const List = titleArray.map((article) =>
        <span className="article-vessel" key={article[0]}>
            <div className="content">
                <a href={article[1]}><h3>{article[0]}</h3></a>
                {article[2]}
            </div>
        </span>
    );

    return (
        <>
            <span className="main-container">
                {List}
            </span>
        </>
    )
}

export default Content