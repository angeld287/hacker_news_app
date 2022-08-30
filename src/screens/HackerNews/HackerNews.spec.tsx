import React from 'react';
import { render, RenderResult, act } from '../../utils/test-utils';
import HackerNews from './index';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

let component: RenderResult;

describe('HackNews Unit Tests', () => {

  beforeEach(() => {
    if (component)
      component.unmount()

    act(() => {
      component = render(
        <Provider store={store}>
          <HackerNews />
        </Provider>
      )
    });
  });

  test('It must render the component correcly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  })

  test('It must display a header title "HACKER NEWS"', () => {
    expect(component.getByText(/HACKER NEWS/i)).toBeInTheDocument();
  });

  test('It must display a the two tabs "All" and "My faves"', () => {
    expect(component.getByText(/All/i)).toBeInTheDocument();
    expect(component.getByText(/My faves/i)).toBeInTheDocument();
  });

  test('It must display a select component for choose types of news', () => {
    expect(component.getByText(/Select your news/i)).toBeInTheDocument();
  });

});
