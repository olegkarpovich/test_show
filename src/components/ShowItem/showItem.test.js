import React from 'react';
import { render, act } from '@testing-library/react';
import ShowItem from './index';

const episode = {
    show: {
        image: {
            medium: 'static.tvmaze.com/uploads/images/medium_landscape/53/132617.jpg'
        },
        name: 'Escape from Monster Island',
        summary: 'Bubbles wins two tickets to a concert and has to pick between Blossom and Buttercup to go with her. Meanwhile, the Mayor\'s plane goes down over Monster Island and it\'s up to the girls to rescue him.',
        language: 'English',
        rating: {
            average: 6
        }
    }
};

const component = () => (
    <ShowItem {...episode}/>
);

describe('ShowItem component', () => {
    it('should render show details page', () => {
        const { container } = render(component());

        expect(container).toMatchSnapshot();
    });
});