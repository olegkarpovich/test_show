import React, {Component} from 'react'
import './style.scss';

function ShowItem(props) {
    const {show, children} = props;
    return (
        <section id="show-general-information">
            <aside id="show-main-image">
                <figure>
                    {show.image && <img src={show.image.medium} alt={show.name}/>}
                </figure>
            </aside>
            <article id="show-description">
                <h3>{show.name}</h3>
                <section className="show-data-blocks">
                    <article id="show-data-blocks-language"> {`Language: ${show.language}`} </article>
                    <article id="show-data-blocks-raiting"> {`Rating: ${show.rating && show.rating.average}`} </article>
                </section>
                <div dangerouslySetInnerHTML={{__html: show.summary}}/>
                {children}
            </article>
        </section>
    )
}

export default ShowItem;
