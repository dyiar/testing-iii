// Test away
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('should render without crashing', () => {
        const { getByTestId } = render(<Dashboard />);

       const lockDiv= getByTestId('locked')
        const closeDiv = getByTestId('closed')
       const lockButton= getByTestId('locked-button')
        const closeButton = getByTestId('closed-button')

        expect(lockDiv).toBeInTheDocument()
        expect(closeDiv).toBeInTheDocument()
        expect(lockButton).toBeInTheDocument()
        expect(closeButton).toBeInTheDocument()
    })
})