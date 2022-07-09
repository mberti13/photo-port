import React from "react";

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import ContactForm from "..";

afterEach(cleanup);

it('renders', () =>{
    render(<ContactForm></ContactForm>)
})

it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm></ContactForm>)
    expect(asFragment()).toMatchSnapshot()
  })

//   it('renders by id', () => {
//     const { getByTestId } = render(<ContactForm></ContactForm>)
//     expect(getByTestId('h1-tag')).toHaveTextContent('Contact me')
//   })

//   it('renders button', () => {
//     const { getByTestId } = render(<ContactForm></ContactForm>)
//     expect(getByTestId('submit-btn')).toHaveTextContent('Submit')
//   })


