import React from "react";

import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () =>{

    // * baseline test
    it('renders', () =>{
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
          />)
    });

    // * snapshot test
/* The above code is testing the Nav component. */
//     it('renders Nav component to DOM node structure', () =>{
//         const { asFragment } = render(<Nav
//             categories={categories}
//             setCurrentCategory={mockSetCurrentCategory}
//             currentCategory={mockCurrentCategory}
//           />);
//         //assert value comparison
//         expect(asFragment()).toMatchSnapshot();
//     });
 });

// * test for emoji visibility
// describe('emoji is visible', () => {
//     it('inserts emoji into the h2', () => {
//     const { getByLabelText } = render(<Nav
//     categories={categories}
//     setCurrentCategory={mockSetCurrentCategory}
//     currentCategory={mockCurrentCategory}
//   />);
  
//     expect(getByLabelText('camera')).toHaveTextContent('📸');
//     });
//   });

// * test for link visibility/functionality
// describe('links are visible', () =>{
//     it('inserts text into links', () =>{
//         const {getByTestId}  = render(<Nav
//     categories={categories}
//     setCurrentCategory={mockSetCurrentCategory}
//     currentCategory={mockCurrentCategory}
//   />);
//         expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
//         expect(getByTestId('about')).toHaveTextContent('About me');
//     });
// })



