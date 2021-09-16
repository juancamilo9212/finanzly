import React from 'react';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {

    it('interactua con nuestro store', () => {
        const prevent = jest.fn();
        const reducer = jest.fn().mockReturnValue({
            finanzas : [{ desc : "Agua", cant : 100}]
        });
        const store = createStore(reducer);
        const wrapper = mount(
            <Provider store={store}>
                <App/>
            </Provider>
            )
            wrapper.find('input').at(0).simulate('change', { target : { value : "Energia"}});
            wrapper.find('input').at(1).simulate('change', { target : { value : 150}});
            wrapper.find('form').simulate('submit', { preventDefault : prevent });
            wrapper.find('button').at(2).simulate('click');
            const [a, ...rest] = reducer.mock.calls;
            expect(rest).toEqual(
                [
                [
                { finanzas: [{ desc : "Agua", cant : 100}]},
                {type: 'AGREGAR',payload: { desc : "Energia", cant : 150}}
                ],
                [
                    { finanzas: [{ desc : "Agua", cant : 100}]},
                    {type: 'ELIMINAR', index: 0}
                ]
                ]
            )
});
    });
    