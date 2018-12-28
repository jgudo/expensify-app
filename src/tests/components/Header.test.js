import React from 'react';
import {shallow} from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import {Header} from '../../components/Header';

test('Should render correctly', () => {
    const wrapper = shallow(<Header startLogout={ () => {} }/>);
    expect(wrapper).toMatchSnapshot();
   
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('Should call startLogout', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
   
    expect(startLogout).toHaveBeenCalled();

});


