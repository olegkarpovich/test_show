import React from 'react'
import './style.scss';
import {BackButton} from "../Buttons";

function EpisodeItem (props) {
    const {episode} = props;
    return (
        <section id="episode-general-information">
            <BackButton />
            <aside id="episode-main-image">
                <figure>
                    {episode.image && <img src={episode.image.medium} alt={episode.name}/>}
                </figure>
            </aside>
            <article id="episode-description">
                <h3>{episode.name}</h3>
                <div dangerouslySetInnerHTML={{__html: episode.summary}}/>
            </article>
        </section>
    )
}

export default EpisodeItem;
