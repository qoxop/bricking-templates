import React from 'react';
import ReactDom from 'react-dom'
import { Counter } from 'counter';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 720px;
    margin: 60px auto;
    h2 {
        text-align: center;
        margin: 20px 0px;
    }
`

const App = () => {
    return (
        <Wrapper>
            <h2>Bricking Micro-module Demo</h2>
            <Counter />
        </Wrapper>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))