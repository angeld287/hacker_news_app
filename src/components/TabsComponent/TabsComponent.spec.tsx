// @ts-nocheck
import React from 'react';
import { TabType } from '../../interfaces/components/ITab';
import { render, RenderResult, act } from '../../utils/test-utils';
import TabsComponent from './index';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

let component: RenderResult;

const tabBody = {
  components: [
    {
      component: {
        type: TabType.ALL,
        hits: []
      }, isActive: false,
      key: "key-all"
    },
    {
      component: {
        type: TabType.FAVORITE,
        hits: []
      }, isActive: true,
      key: "key-fav"
    }
  ]
}

const buttons = {
  buttons: [
    { text: "All", action: () => setActiveTab(1), isActive: false },
    { text: "My faves", action: () => setActiveTab(0), isActive: true },
  ]
}

describe('TabsComponent Unit Tests', () => {

  beforeEach(() => {
    if (component)
      component.unmount()

    act(() => {
      component = render(
        <Provider store={store}>
          <TabsComponent tabBody={tabBody} tabButtons={buttons} />
        </Provider>
      )
    });
  });

  test('It must render the component correcly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

});
