import React from 'react';
import { render, act } from '@testing-library/react';
import { BackButton } from './index';

const component = () => (
    <BackButton />
);

describe('BackButton component', () => {
    it('should render back button', () => {
        const { container } = render(component());

        expect(container).toMatchSnapshot();
    });
});