import React from 'react';
import { render, act } from '@testing-library/react';
import EpisodeItem from './index';

const episode = {
    episode: {
        image: {
            medium: 'static.tvmaze.com/uploads/images/medium_landscape/53/132617.jpg'
        },
        name: 'Escape from Monster Island',
        summary: 'Bubbles wins two tickets to a concert and has to pick between Blossom and Buttercup to go with her. Meanwhile, the Mayor\'s plane goes down over Monster Island and it\'s up to the girls to rescue him.'
    }
};

const component = () => (
    <EpisodeItem {...episode}/>
);

describe('EpisodeItem component', () => {
    it('should render episode details page', () => {
        const { container } = render(component());

        expect(container).toMatchSnapshot();
    });
});