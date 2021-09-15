import React from 'react';
import Dashboard from './Dashboard.jsx';
import Adapter from 'enzyme-adapter-react-16';
import {shallow,configure} from 'enzyme';

configure({adapter: new Adapter()});

describe('Dashboard', () => {

    it('Muestra valor', () => {
        const valor = "1000";
        const wrapper = shallow(<Dashboard valor={valor}/>);
        const resultado = wrapper.find('strong').text();
        expect(resultado).toEqual(valor);
    });

});