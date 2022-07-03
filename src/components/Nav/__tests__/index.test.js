import React from "react";

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Nav from '..';

afterEach(cleanup);

describe('Nav component', () =>{

    // * baseline test
    it('renders', () =>{
        render(<Nav></Nav>)
    });

    // * snapshot test
    it('renders Nav component to DOM node structure', () =>{
        const { asFragment } = render(<Nav></Nav>);
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

// * test for emoji visibility
// describe('emoji is visible', () => {
//     it('inserts emoji into the h2', () => {
//     const { getByLabelText } = render(<Nav />);
  
//     expect(getByLabelText('camera')).toHaveTextContent('📸');
//     });
//   });

// * test for link visibility/functionality
// describe('links are visible', () =>{
//     it('inserts text into links', () =>{
//         const {getByTestId}  = render(<Nav></Nav>);
//         expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
//         expect(getByTestId('about')).toHaveTextContent('About me');
//     });
// });
