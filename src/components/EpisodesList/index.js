import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import './style.scss';

function EpisodesList(props) {
    const {episodes} = props;
    return (
        <section className="ep-blocks">
            <header className="ep-block ep-block-header">
                <div className="ep-season-number">Number</div>
                <div className="ep-season">Season</div>
                <div className="ep-number">Number</div>
                <div className="ep-date">Date</div>
                <div className="ep-time">Time</div>
                <div className="ep-date-time">Date</div>
                <div className="ep-name">Name</div>
                <div className="ep-score">Score</div>
            </header>
            {episodes.map((episode, i) => (
                <article key={i} className="ep-block">
                    <div className="ep-season-number">{`s${episode.season}-e${episode.number}`}</div>
                    <div className="ep-season">{episode.season}</div>
                    <div className="ep-number">{episode.number}</div>
                    <div className="ep-date">{episode.airdate}</div>
                    <div className="ep-time">{episode.airtime}</div>
                    <div className="ep-date-time">{`${episode.airdate} ${episode.airtime}`}</div>
                    <div className="ep-name"><Link to={`/season/${episode.season}/episode/${episode.number}`} > {episode.name}</Link> </div>
                    <div className="ep-score">-</div>
                </article>
            ))}
        </section>
    )
}
export default EpisodesList;
