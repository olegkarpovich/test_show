import React from 'react';
import { render, act } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import EpisodesList from './index';

const episodes = [
    {
        name: 'Escape from Monster Island',
        airdate: '2016-04-04',
        airtime: '18:00',
        number: 1,
        season: 1
    }
];

const component = () => (
    <BrowserRouter>
        <EpisodesList episodes={episodes}/>
    </BrowserRouter>
);

describe('EpisodesList component', () => {
    it('should render episodes list', () => {
        const { container } = render(component());

        expect(container).toMatchSnapshot();
    });
});