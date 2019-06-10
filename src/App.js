import React from 'react';
import './app.css';
import { hot } from 'react-hot-loader/root';
import styled from '@emotion/styled';

const Button = styled.button({
    color: 'green',
    border: '5px solid yello'
})
class App extends React.Component{
    render(){
        return(
            <div className='app' >
                React App
                <Button>Emotion button</Button>
            </div>
        );
    }
}

export default hot(App);