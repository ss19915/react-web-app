import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from '@emotion/styled';

const Button = styled.button((prop) => ({
    color: prop.theme.color,
    border: '5px solid yellow'
}), { color: 'blue'});

const Headline = styled.h1`
  color: ${props => props.theme.color};
  font-family: sans-serif;
`


class App extends React.Component{
    render(){
        return(
            <div>
                React App
                <Headline>I'm imotionally red!</Headline>
                <Button>Emotion button</Button>
                <p css={theme => ({ color: theme.color })}>I'm also red!</p>
            </div>
        );
    }
}

export default hot(App);