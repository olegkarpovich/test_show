import {combineReducers} from 'redux'
import {
    REQUEST_SHOW,
    RECEIVE_SHOW,
    REQUEST_EPISODES,
    RECEIVE_EPISODES,
    REQUEST_EPISODE_ITEM,
    RECEIVE_EPISODE_ITEM,
} from '../actions'
const showId = '6771';
function selectedShow(state = showId, action) {
    return state
}

function episodes(
    state = {
        isFetching: false,
        episodes: [],
        showInfo: {},
        episodeInfo: {},
        showId: null,
    },
    action
) {
    switch (action.type) {
        case REQUEST_SHOW:
        case REQUEST_EPISODES:
        case REQUEST_EPISODE_ITEM:
            return { ...state, isFetching: true }
        case RECEIVE_SHOW:
            return { ...state, isFetching: false, showInfo: action.showInfo}
        case RECEIVE_EPISODES:
            return { ...state, isFetching: false, episodes: action.episodes }
        case RECEIVE_EPISODE_ITEM:
            return { ...state, isFetching: false, episodeInfo: action.episodeInfo }
        default:
            return state
    }
}

function episodesByShow(state = {}, action) {
    switch (action.type) {
        case RECEIVE_EPISODE_ITEM:
        case REQUEST_EPISODE_ITEM:
            return { ...state, [showId]: episodes(state[action.episodeInfo], action) }
        case RECEIVE_EPISODES:
        case REQUEST_EPISODES:
            return { ...state, [action.showId]: episodes(state[action.showInfo], action) }
        case RECEIVE_SHOW:
        case REQUEST_SHOW:
            return { ...state, [action.showId]: episodes(state[action.showInfo], action), showInfo: action.showInfo }
        default:
            return state
    }
}

const episodesReducer = combineReducers({
    episodesByShow,
    selectedShow
})

export default episodesReducer
