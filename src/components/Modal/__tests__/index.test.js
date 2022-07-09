import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

  afterEach(cleanup);

// it('renders', () =>{
//     render(<Modal></Modal>)
// })

// it('renders snapshot', () =>{
//     const { asFragment } = render(<Modal></Modal>)
//     expect(asFragment()).toMatchSnapshot();
// });