import { REQUEST_EPISODE_ITEM } from '../actions'
import episodesReducer from './index';

const state = {
    episodesByShow: {
        6771: {
            episodeInfo: {},
            episodes: [],
            isFetching: false,
            showId: null,
            showInfo: {},
        }
    },
    selectedShow: '6771'
}

describe('Reducer', () => {
    it('REQUEST_EPISODE_ITEM Should return episode payload as new state', () => {
        expect(
            episodesReducer(
                state,
                {
                    type: REQUEST_EPISODE_ITEM,
                    payload: {
                        isFetching: true,
                    },
                },
            ),
        ).toStrictEqual({
            "episodesByShow": {
                "6771": {
                    "episodeInfo": {},
                    "episodes": [],
                    "isFetching": true,
                    "showId": null,
                    "showInfo": {},
                },
            },
            "selectedShow": "6771",
        });
    });
});
