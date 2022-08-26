import React from 'react';
import { render, RenderResult, act } from '../../utils/test-utils';
import HackerNews from './index';

let component: RenderResult;

describe('HackNews Unit Tests', () => {

  beforeEach(() => {
    if (component)
      component.unmount()

    act(() => {
      component = render(<HackerNews />)
    });
  });

  test('It must render the component correcly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  })

});
