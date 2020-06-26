import React, {Component, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getEpisodeInfo} from '../actions'
import EpisodeItem from '../components/EpisodeItem'

function EpisodeInfo(props) {
    const {dispatch, selectedShow, match, episodeInfo} = props

    useEffect(() => {
        const {seasonId, episodeId} = match.params
        dispatch(getEpisodeInfo(selectedShow, seasonId, episodeId))
    }, [dispatch, match.params, selectedShow]);

    return (
        <EpisodeItem episode={episodeInfo}/>
    )
}

EpisodeInfo.propTypes = {
    selectedShow: PropTypes.string.isRequired,
    episodeInfo: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps({selectedShow, episodesByShow}) {
    const {isFetching, episodeInfo} = episodesByShow[selectedShow] || {
        isFetching: true,
        episodeInfo: {}
    }

    return {
        selectedShow,
        isFetching,
        episodeInfo
    }
}

export default connect(mapStateToProps)(EpisodeInfo)
