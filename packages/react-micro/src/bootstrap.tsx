import React from 'react';
import ReactDom from 'react-dom';
import { Counter } from 'counter';
import ReactLog from './react.svg'
import './styles.less';

const App = () => {
    return (
        <div className='app'>
            <h2>Bricking React-Micro-Module</h2>
            <div className='logo-box'>
                <img src={ReactLog} className='logo' alt="" />
            </div>
            <Counter />
        </div>
    )
}

ReactDom.render(<App/>, document.getElementById('root'))