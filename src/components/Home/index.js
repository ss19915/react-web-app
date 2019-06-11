import React from 'react';
import { setTheme } from '../../actions';
import { THEME } from '../../constants';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import themes from '../../themes';

const DarkButton = styled.button({
    color: themes[THEME.DARK].color,
    backgroundColor: themes[THEME.DARK].backgroundColor,
});

const LightButton = styled.button({
    color: themes[THEME.LIGHT].color,
    backgroundColor: themes[THEME.LIGHT].backgroundColor,
});

const Div = styled.div(({ theme }) => ({
    color: theme.color,
    backgroundColor: theme.backgroundColor,
}));

const Home = (props) => {
    const {
        activeTheme,
        setTheme,
    } = props;

    return (
        <Div>
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
        </Div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setTheme: (theme) => dispatch(setTheme(theme)),
});

const mapStateToProps = (state) => ({
    activeTheme: state.theme,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);