// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Display from './Display';

describe('<Display />', () => {
    it('should render without crashing', () => {
        const { getByTestId } = render(<Display />);

        getByTestId('locked')
        getByTestId('closed')
    })
})