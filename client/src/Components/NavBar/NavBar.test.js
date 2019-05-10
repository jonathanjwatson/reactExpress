import React from 'react';
import NavBar from './NavBar';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({adapter: new Adapter()});

const navBarWrapper = shallow(<NavBar/>);

it('renders correctly', () => {
    expect(navBarWrapper).toMatchSnapshot();
});