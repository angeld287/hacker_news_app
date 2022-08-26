import React from 'react';
import { render, RenderResult, act } from '../../utils/test-utils';
import SelectComponent from './index';

let component: RenderResult;

describe('SelectComponent Unit Tests', () => {

  beforeEach(() => {
    if (component)
      component.unmount()

    act(() => {
      component = render(<SelectComponent />)
    });
  });

  test('It must render the component correcly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

});
