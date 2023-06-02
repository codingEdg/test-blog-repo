import React, { useEffect, useState } from 'react'
import articles from '../sampleContent/articles.json'
import ArticleCard from '../components/ArticleCard'
import Article from './Article';
import AddArticle from './AddArticle';

const Home = (props) => {
    const [currentArtile, SetCurrentArticle] = useState({});
    const [active, setActive] = useState({ home: true });

    useEffect(()=>{
            setActive(props.obj)
    }, [props.obj])

    const updateCurrent = (obj, activeObj={})=>{
        setActive(activeObj)
        SetCurrentArticle(obj)
    }


    const renderHome = () => {
        return (
            <div class="site-wrap">
                <div class="main">
                    <h1>Responsive Card Grid Layout</h1>
                    <ul class="cards">
                        {articles.map(item => <ArticleCard article={item} updateCurrent={updateCurrent} />)}
                    </ul>
                </div>
                <h3 class="made_by">Made with ♡</h3>
            </div>
        )
    }

    if (active.article) {
        return <Article article={currentArtile}/>
    } else if (active.addArticle) {
        return <AddArticle />
    } else {
        return renderHome();
    }

}

export default Home