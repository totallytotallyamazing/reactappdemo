import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './ui-components/NavBar';

function App() {

    // const navbarOverrides = {
    //     'image': {
    //         src: ''
    //     }
    // }

    return (
        <div className="App">
            <NavBar />
            <header className="App-header">
                <h1>Car Rental App</h1>
            </header>
        </div>
    );
}

export default App;