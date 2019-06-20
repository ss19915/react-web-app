import Home from '../Home';

describe('Component: Home', () => {
    it('Mount test', () => {
        const wrapper = mountWithThemeAndStore(<Home/>);

        expect(wrapper).toMatchSnapshot();
    });
})