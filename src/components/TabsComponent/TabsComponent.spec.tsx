// @ts-nocheck
import React from 'react';
import { render, RenderResult, act } from '../../utils/test-utils';
import TabsComponent from './index';

let component: RenderResult;

describe('TabsComponent Unit Tests', () => {

  beforeEach(() => {
    if (component)
      component.unmount()

    act(() => {
      component = render(<TabsComponent />)
    });
  });

  test('It must render the component correcly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

});
