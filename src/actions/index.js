import fetch from 'cross-fetch'

export const REQUEST_SHOW = 'REQUEST_SHOW'
export const RECEIVE_SHOW = 'RECEIVE_SHOW'
export const REQUEST_EPISODES = 'REQUEST_EPISODES'
export const RECEIVE_EPISODES = 'RECEIVE_EPISODES'
export const REQUEST_EPISODE_ITEM = 'REQUEST_EPISODE_ITEM'
export const RECEIVE_EPISODE_ITEM = 'RECEIVE_EPISODE_ITEM'

function requestEpisodes(showId) {
    return {
        type: REQUEST_EPISODES,
        showId
    }
}

function receiveEpisodes(showId, episodes) {
    return {
        type: RECEIVE_EPISODES,
        showId,
        episodes
    }
}

function fetchEpisodes(showId) {
    return dispatch => {
        dispatch(requestEpisodes(showId))
        return fetch(`http://api.tvmaze.com/shows/${showId}/episodes`)
            .then(response => response.json())
            .then(json => dispatch(receiveEpisodes(showId, json)))
            .catch((error) => {
                if (err && err.message) {
                    console.log('actions:fetchEpisodes', err.message);
                }
                return Promise.reject(error);
            });
    }
}

export function requestShowInfo(showId) {
    return {
        type: REQUEST_SHOW,
        showId
    }
}

export function receiveShowInfo(showInfo) {
    return {
        type: RECEIVE_SHOW,
        showInfo
    }
}

export function receiveEpisodeInfo(episodeInfo) {
    return {
        type: RECEIVE_EPISODE_ITEM,
        episodeInfo
    }
}

export function requestEpisodeInfo(episodeId) {
    return {
        type: REQUEST_EPISODE_ITEM,
        episodeId
    }
}

function fetchShow(showId) {
    return dispatch => {
        dispatch(requestShowInfo(showId))
        return fetch(`http://api.tvmaze.com/shows/${showId}`)
            .then(response => response.json())
            .then(showInfo => dispatch(receiveShowInfo(showInfo)))
            .catch((error) => {
                if (err && err.message) {
                    console.log('actions:fetchShow', err.message);
                }
                return Promise.reject(error);
            });
    }
}

function fetchEpisode(showId, seasonId, episodeId) {
    return dispatch => {
        dispatch(requestEpisodeInfo(showId, seasonId, episodeId))
        return fetch(`http://api.tvmaze.com/shows/${showId}/episodebynumber?season=${seasonId}&number=${episodeId}`)
            .then(response => response.json())
            .then(episodeInfo => dispatch(receiveEpisodeInfo(episodeInfo)))
            .catch((error) => {
                if (err && err.message) {
                    console.log('actions:fetchEpisode', err.message);
                }
                return Promise.reject(error);
            });
    }
}

export function getEpisodes(showId) {
    return (dispatch) => {
        return dispatch(fetchEpisodes(showId))
    }
}

export function getShowInfo(showId) {
    return (dispatch) => {
        return dispatch(fetchShow(showId))
    }
}

export function getEpisodeInfo( showId, seasonId=1, episodeId=1) {
    return (dispatch) => {
        return dispatch(fetchEpisode(showId, seasonId, episodeId ))
    }
}
