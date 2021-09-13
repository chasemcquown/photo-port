// we must include react here in order to enable the components to function properly to test them 
import React from 'react';

// import the react testing library
// NOTE: the render function will do just what its name implies: "render" the component. What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered)
// NOTE: the cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results
import { render, cleanup } from '@testing-library/react';

// import the extend-expect library from the jest-dom package
import '@testing-library/jest-dom/extend-expect';

// import the about component to test it
import About from '..';

// NOTE: this will ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

// NOTE: we'll use the describe function to declare the component we're testing
describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    });
  
    // Second Test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
});