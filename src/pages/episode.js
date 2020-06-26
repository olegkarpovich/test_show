import React from 'react';
import EpisodeInfo from '../containers/EpisodeInfo';

class Episode extends React.Component {
    render() {
        const { props } = this;
        return <div>
            <h3>{`Episode ${props.match.params.episodeId} Season ${props.match.params.seasonId}`}</h3>
            <EpisodeInfo {...props}/>
        </div>
    }
}export default Episode
