import React from 'react';
import { render, act } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import Header from './index';

const component = () => (
    <BrowserRouter>
        <Header />
    </BrowserRouter>
);

describe('Header component', () => {
    it('should render header', () => {
        const { container } = render(component());

        expect(container).toMatchSnapshot();
    });
});