import React from 'react';

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import About from '..';

afterEach(cleanup);

describe('About component', () =>{
    // ! renders About test

    // * first test
    it('renders', () =>{
        render(<About></About>)
    });

    // * second test
    it('passes snapshot DOM node structure', () =>{
        //render About
        const { asFragment } = render(<About></About>);
        expect(asFragment()).toMatchSnapshot();
    })
})