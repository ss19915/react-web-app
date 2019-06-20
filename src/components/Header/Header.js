import React from 'react';
import { LightButton, DarkButton } from '../ThemeButtons';
import { THEME } from '../../constants';
import { setTheme } from '../../actions';
import { connect } from 'react-redux';

const Header = (props) => {
    const {
        activeTheme,
        setTheme,
    } = props;

    return (
        <React.Fragment>
            React App
            <DarkButton
                disabled={activeTheme === THEME.DARK}
                onClick={() => setTheme(THEME.DARK)}
            >
                Dark Theme
            </DarkButton>
            <LightButton
                disabled={activeTheme === THEME.LIGHT}
                onClick={() => setTheme(THEME.LIGHT)}
            >
                Light Theme
            </LightButton>
        </React.Fragment>
    );
};


const mapDispatchToProps = (dispatch) => ({
    setTheme: (theme) => dispatch(setTheme(theme)),
});

const mapStateToProps = (state) => ({
    activeTheme: state.theme,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);