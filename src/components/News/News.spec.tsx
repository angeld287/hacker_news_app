import React from 'react';
import { render, RenderResult, act } from '../../utils/test-utils';
import News from './index';

let component: RenderResult;

describe('News Unit Tests', () => {

  beforeEach(() => {
    if (component)
      component.unmount()

    act(() => {
      component = render(<News />)
    });
  });

  test('It must render the component correcly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

});
