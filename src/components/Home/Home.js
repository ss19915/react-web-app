import React from 'react';
import { Global, css } from '@emotion/core';
import { Div, Window } from '../Commom';
import { BrowserRouter, Route, Link, } from 'react-router-dom';
import About from '../About';
import Header from '../Header'

const Home = () => {

    return (
        <Window>
            <Div>
                <Global styles={css({ body: { margin: 0 } })} />
                <BrowserRouter>
                    <Route path='/' component={Header} />
                    <Route path='/' exact component={ () => (
                        <React.Fragment>
                            <Div>{process.env.ENV_FILE}</Div>
                            <Div css={css({ color: 'red' })}>I'm Imotionally Red</Div>
                            <Link to='/About'>About React Web App</Link>
                        </React.Fragment>
                    )} />
                    <Route path='/About' component={About} />
                </BrowserRouter>
            </Div>
        </Window>
    );
}

export default Home;