import React from 'react';
import Radio from '../index';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('components/Radio', () => {
  it('should render an input of type radio', () => {
    const component = shallow(<Radio name="goose" />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should render input with name when provided', () => {
    const component = shallow(<Radio name="goose" />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should render a checked radio input when `defaultChecked` is true', () => {
    const component = shallow(<Radio name="goose" defaultChecked={ true } />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should render an unchecked radio input when `defaultChecked` is false', () => {
    const component = shallow(<Radio name="goose" defaultChecked={ false } />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should render a checked radio input when `checked` is true', () => {
    const component = shallow(<Radio name="goose" checked={ true } onChange={ function() {} } />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should render an unchecked radio input when `checked` is false', () => {
    const component = shallow(<Radio name="goose" checked={ false } onChange={ function() {} } />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should throw an error if a radio input is rendered without an `onChange` function', () => {
    spyOn(console, 'error').and.stub();

    mount(<Radio name="goose" checked={ true } />);

    expect(console.error.calls.all()[0].args[0]).toContain('You provided a `checked` prop to a form field without an `onChange` handler'); // eslint-disable-line
  });

  it('should call the `onChange` event handler when the radio input is changed', () => {
    const handler = {
      onChange: (event) => {},
    };
    spyOn(handler, 'onChange');

    const component = shallow(<Radio name="goose" onChange={ handler.onChange } />);

    component.find('input').simulate('change');
    expect(handler.onChange).toHaveBeenCalled();
  });

  it('should be wrapped in a label', () => {
    const component = shallow(<Radio name="goose" />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('label should render text', () => {
    const component = shallow(<Radio name="goose" label="foo" />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should add disabled class to label text when disabled', () => {
    const component = shallow(<Radio name="goose" isDisabled={ true } />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should not add disabled class to label text when not disabled', () => {
    const component = shallow(<Radio name="goose" isDisabled={ false } />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should add disabled attribute to radio input when disabled', () => {
    const component = shallow(<Radio name="goose" isDisabled={ true } />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should not add disabled attribute to radio input when not disabled', () => {
    const component = shallow(<Radio name="goose" isDisabled={ false } />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
