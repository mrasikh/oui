import React from 'react';
import Dropdown from '../index';
import { mount, shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

const data = [
  {title: 'Manual', description: 'Dolcelatte cheeseburger swiss paneer cow gouda edam cheese slices'},
  {title: 'Maximize Conventions', header: 'Automation',
    description: 'Everyone loves cut the cheese cow squirty cheese emmental jarlsberg halloumi camembert de normandie.'},
  {title: 'Faster Results', description: 'Cauliflower cheese stilton paneer hard cheese fondue.'},
];

describe('components/Dropdown', () => {
  it('should render children when isOpen is true', () => {
    const component = mount(
      <Dropdown
        icon={ true }
        isOpen={ true }
        buttonContent='Dropdown'>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );

    expect(component.find('Dropdown').props().isOpen).toBe(true);
    expect(component.find('ul').exists()).toBe(true);
  });

  it('should not render children when isDisabled is true', () => {
    const component = shallow(
      <Dropdown
        icon={ true }
        buttonContent='Dropdown'
        idDisabled={ true }>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should call the child onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const component = shallow(
      <Dropdown
        icon={ true }
        buttonContent='Dropdown'
        idDisabled={ true }>
        <ul>
          { data.map((item, index) => {
            return (
              <li
                key={ index }
                onClick={ onClickMock }
                data-test-section={ `dropdown-item-${index}` }>
                { item.title }
              </li>
            );
          })
          }
        </ul>
      </Dropdown>
    );

    component.find('[data-test-section="dropdown-item-1"]').simulate('click');
    expect(onClickMock.mock.calls.length).toBe(1);
  });

  it('should not use .oui-arrow-inline--down when icon isEqual to triangle', () => {
    const component = shallow(
      <Dropdown
        icon={ true }
        buttonContent='Dropdown'>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should use oui-button--full class when fullWidth is true', () => {
    const component = shallow(
      <Dropdown
        icon={ true }
        buttonContent='Dropdown'
        fullWidth={ true }>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should highlight button class when style equals highlight', () => {
    const component = shallow(
      <Dropdown
        icon={ true }
        buttonContent='Dropdown'
        style='highlight'>
        <ul>
          { data.map((item, index) => {
            return (
              <li key={ index }>{ item.title }</li>
            );
          })
          }
        </ul>
      </Dropdown>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should include oui-form-bad-news class when display error is true', () => {
    const component = shallow(
      <Dropdown
        buttonContent='Dropdown'
        displayError={ true }>
      </Dropdown>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should render an activator node when passed as a prop', () => {
    const component = shallow(
      <Dropdown
        activator={ <button>Click me</button> }
        displayError={ true }>
      </Dropdown>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
