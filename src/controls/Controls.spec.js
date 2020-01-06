// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import Controls from './Controls';

describe ('<Controls />', () => {
    it('should render without crashing', () => {
        const { getByTestId } = render(<Controls />);

        const buttonClosed = getByTestId('closed-button')
        const buttonLocked = getByTestId('locked-button')
        expect(buttonClosed).toBeInTheDocument();
        expect(buttonLocked).toBeInTheDocument();
    })

    describe('select locked button', () => {
        it('should select the lock button', () => {
             const { getByTestId } = render(<Controls />)

             const button = getByTestId('locked-button')
             fireEvent.click(button);
             expect(button).toHaveTextContent(/lock gate/i)
        })
    })

    describe('select closed button', () => {
        it('should select the closed button', () => {
             const { getByTestId } = render(<Controls />)

             const button = getByTestId('closed-button')
             fireEvent.click(button);
             expect(button).toHaveTextContent(/close gate/i)
        })
    })

    describe('closed button check if disabled', () => {
        it('should disable closed button from opening if locked', () => {
            const { getByTestId } = render(<Controls locked={true} />) 

            const button = getByTestId('closed-button');
            expect(button).toHaveAttribute('disabled')
        })
    })

    describe('locked button check if disabled', () => {
        it('should disable locked button from locking if open', () => {
            const { getByTestId } = render(<Controls closed={false} />) 

            const button = getByTestId('locked-button');
            expect(button).toHaveAttribute('disabled')
        })
    })
})