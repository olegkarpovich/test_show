import React from 'react';
import { render, act } from '@testing-library/react';
import Footer from './index';

const component = () => (
    <Footer />
);

describe('Footer component', () => {
    it('should render footer', () => {
        const { container } = render(component());

        expect(container).toMatchSnapshot();
    });
});