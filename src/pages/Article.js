import React from 'react'

const Article = (props) => {
    const {article} = props
    return (
        <div class="site-wrap page w1000">

            <section>
                <img src={article.imgUrl} />
                <h1 >{article.heading}</h1>
                {article.content.map(item => <p>{item}</p>)}
            </section>


        </div>
    )
}

export default Article