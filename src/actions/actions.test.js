import {
    REQUEST_SHOW,
    RECEIVE_SHOW,
    REQUEST_EPISODE_ITEM,
    RECEIVE_EPISODE_ITEM,
    requestShowInfo,
    receiveShowInfo,
    receiveEpisodeInfo,
    requestEpisodeInfo
} from '../actions'

describe('Actions tests', () => {
    it('Should get requestShowInfo action', () => {
        const action = requestShowInfo('888');
        expect(action.type).toBe(REQUEST_SHOW);
        expect(action.showId).toBe('888');
    });

    it('Should get receiveShowInfo action', () => {
        const action = receiveShowInfo({id: 3});
        expect(action.type).toBe(RECEIVE_SHOW);
        expect(action.showInfo).toStrictEqual({"id": 3});
    });

    it('Should get receiveEpisodeInfo action', () => {
        const action = receiveEpisodeInfo({id: 3});
        expect(action.type).toBe(RECEIVE_EPISODE_ITEM);
        expect(action.episodeInfo).toStrictEqual({"id": 3});
    });

    it('Should get requestEpisodeInfo action', () => {
        const action = requestEpisodeInfo('333');
        expect(action.type).toBe(REQUEST_EPISODE_ITEM);
        expect(action.episodeId).toBe('333');
    });
});
