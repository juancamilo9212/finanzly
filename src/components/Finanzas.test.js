import React from 'react';
import Finanzas from './Finanzas.jsx';
import Adapter from 'enzyme-adapter-react-16';
import {shallow,configure} from 'enzyme';

configure({adapter: new Adapter()});

describe('Finanzas', () => {

    it('Muestra finanza', () => {
        const finanza = [{
            desc:"Agua",
            cant:"100"
        }];
        const wrapper = shallow(<Finanzas finanzas={finanza}/>);
        const descripcion = wrapper.find('td').at(0).text();
        const cantidad = wrapper.find('td').at(1).text();
        expect(descripcion).toEqual("Agua");
        expect(cantidad).toEqual("100");
    });

    it('Eliminar Finanza', () => {
        const finanza = [{
            desc:"Agua",
            cant:"100"
        }];
        const eliminar = jest.fn();
        const wrapper = shallow(
        <Finanzas eliminarFinanza={eliminar}
        finanzas={finanza}
        />);
        wrapper.find('button').simulate('click');
        expect(eliminar.mock.calls).toEqual([[0]]);
        
    });
});