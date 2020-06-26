import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
    getEpisodes,
    getShowInfo
} from '../actions'
import ShowItem from '../components/ShowItem'
import EpisodesList from "../components/EpisodesList";

function ShowInfo(props) {
    const {episodes, isFetching, showInfo, dispatch, selectedShow} = props

    useEffect(() => {
        dispatch(getShowInfo(selectedShow))
        dispatch(getEpisodes(selectedShow))
    }, [dispatch, selectedShow]);

    return (
        <div>
            <ShowItem show={showInfo}>
                <section id="episodes-table">
                    {isFetching && episodes.length === 0 && <h2>Loading...</h2>}
                    {!isFetching && episodes.length === 0 && <h2>Empty.</h2>}
                    {episodes.length > 0 && (
                        <div id="episodes-table-wrapper" style={{opacity: isFetching ? 0.5 : 1}}>
                            <h3>Episodes:</h3>
                            <EpisodesList episodes={episodes}/>
                        </div>
                    )}
                </section>
            </ShowItem>
        </div>
    )
}

ShowInfo.propTypes = {
    selectedShow: PropTypes.string.isRequired,
    showInfo: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    episodes: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps({selectedShow, episodesByShow}) {
    const {isFetching, showInfo, episodes} = episodesByShow[selectedShow] || {
        isFetching: true,
        showInfo: {},
        episodes: []
    }

    return {
        selectedShow,
        episodes,
        showInfo,
        isFetching
    }
}

export default connect(mapStateToProps)(ShowInfo)
