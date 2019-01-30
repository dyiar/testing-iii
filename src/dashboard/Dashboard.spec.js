// Test away
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('should render without crashing', () => {
        const { getByTestId } = render(<Dashboard />);

        getByTestId('locked')
        getByTestId('closed')
        getByTestId('locked-button')
        getByTestId('closed-button')
    })
})