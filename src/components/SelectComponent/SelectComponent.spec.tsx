import React from 'react';
import { ISelectOptions, Options } from '../../interfaces/components/ISelect';
import { render, RenderResult, act } from '../../utils/test-utils';
import SelectComponent from './index';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

let component: RenderResult;

const options: Array<ISelectOptions> = [
  { text: "Angular", value: Options.ANGULAR, image: "https://github.com/angeld287/hacker_news_app/blob/master/src/assets/image-138/image-138.png?raw=true" },
  { text: "React", value: Options.REACT, image: "https://github.com/angeld287/hacker_news_app/blob/master/src/assets/image-140/image-140.png?raw=true" },
  { text: "Vuejs", value: Options.VUE, image: "https://github.com/angeld287/hacker_news_app/blob/master/src/assets/image-141/image-141.png?raw=true" },
];

describe('SelectComponent Unit Tests', () => {

  beforeEach(() => {
    if (component)
      component.unmount()

    act(() => {
      component = render(
        <Provider store={store}>
          <SelectComponent onChange={() => { }} options={options} placeholder="Select your news" />
        </Provider>)
    });
  });

  test('It must render the component correcly', () => {
    expect(component.asFragment()).toMatchSnapshot();
  });

});
