import React from 'react';
import { render, RenderResult, act } from '../../utils/test-utils';
import PaginationComponent from './index';

let component: RenderResult;

describe('PaginationComponent Unit Tests', () => {

  beforeEach(() => {
    if (component)
      component.unmount()

    act(() => {
      component = render(<PaginationComponent />)
    });
  });

  test('It must render the component correcly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

});
