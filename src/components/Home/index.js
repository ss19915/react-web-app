import React from 'react';
import { setTheme } from '../../actions';
import { THEME } from '../../constants';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import themes from '../../themes';
import { Global, css } from '@emotion/core';

const ButtonStyle = ({ theme }) => css({
    padding: theme.spacing_m,
    margin: theme.spacing_l,
    borderRadius: theme.spacing_m,
    ':disabled': {
        ':hover': {
            cursor: 'not-allowed'
        },
    },
    ':hover': {
        cursor: 'pointer'
    }
});

const DarkButton = styled.button(ButtonStyle, {
    color: themes[THEME.DARK].primaryColor,
    backgroundColor: themes[THEME.DARK].backgroundColor,
});

const LightButton = styled.button(ButtonStyle, {
    color: themes[THEME.LIGHT].primaryColor,
    backgroundColor: themes[THEME.LIGHT].backgroundColor,
});

const Div = styled.div(({ theme }) => ({
    color: theme.primaryColor,
    backgroundColor: theme.backgroundColor,
    height: theme.height_max,
    width: theme.width_max,
}));

const Home = (props) => {
    const {
        activeTheme,
        setTheme,
    } = props;

    return (
        <Div>
            <Global
                styles={css({
                    body: {
                        margin: 0,
                    }
                })}
            />
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