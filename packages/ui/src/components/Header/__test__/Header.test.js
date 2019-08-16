import Header from '../Header';

describe('Component: Haeader', () => {
    it('Mount Snapshot Test', () => {
        const wrapper = mountWithThemeAndStore(<Header/>);

        expect(wrapper).toMatchSnapshot();
    });
});