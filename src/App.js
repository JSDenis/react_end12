import React from "react";

import '../src/styles/App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

const arr = [1,2,3,4,5];

class App extends React.Component {
    

    render() {
        return (
            <div>
                <div>
                    <h1>My React App21312312!</h1>
                </div>
                
                <Header />
                
                {
                    arr.map((elem, index) =>{
                        return <span key={index} className = {`item${index}`}>{elem}</span>
                    })
                }

                <Menu />
            </div>
        );
    }
}

export default App; 