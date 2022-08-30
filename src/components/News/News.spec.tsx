import React from 'react';
import { render, RenderResult, act } from '../../utils/test-utils';
import News from './index';
import { store } from '../../app/store';
import { Provider } from 'react-redux';
import { TabType } from '../../interfaces/components/ITab';

let component: RenderResult;

describe('News Unit Tests', () => {

  beforeEach(() => {
    if (component)
      component.unmount()

    act(() => {
      component = render(
        <Provider store={store}>
          <News type={TabType.FAVORITE} />
        </Provider>)
    });
  });

  test('It must render the component correcly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

});
