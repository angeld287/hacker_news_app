import React from 'react';
import { render, RenderResult, act } from '../../utils/test-utils';
import NewsComponent from './index';

let component: RenderResult;

describe('NewsComponent Unit Tests', () => {

  beforeEach(() => {
    if (component)
      component.unmount()

    act(() => {
      component = render(<NewsComponent />)
    });
  });

  test('It must render the component correcly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

  test('It must hovering on the row, apply opacity to the entire row and its children.', () => {

  });

});
