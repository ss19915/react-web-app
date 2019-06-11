import React from 'react';
import { setTheme } from '../../actions';
import { THEME } from '../../constants';
import { connect } from 'react-redux';
import { Global, css } from '@emotion/core';
import { LightButton, DarkButton } from '../ThemeButtons';
import { Div, Window } from '../Commom';

const Home = (props) => {
    const {
        activeTheme,
        setTheme,
    } = props;

    return (
        <Window>
            <Div>
                <Global styles={css({ body: { margin: 0 } })} />
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
                <Div>{process.env.ENV_FILE}</Div>
                <Div css={css({ color: 'red' })}>I'm Imotionally Red</Div>
            </Div>
        </Window>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setTheme: (theme) => dispatch(setTheme(theme)),
});

const mapStateToProps = (state) => ({
    activeTheme: state.theme,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);