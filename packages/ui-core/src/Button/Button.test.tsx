import React from 'react';
import {Button} from './Button';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

/**
 * Base Test Code
 *
 * To get tips for react testing library, see https://www.robinwieruch.de/react-testing-library
 */
test('Button is always true', () => {
  //given
  const props = {
    children: 'Hello World'
  };

  //when
  render(<Button {...props}/>);

  //then
  expect(screen.getByText(props.children)).toHaveTextContent(props.children);
});
