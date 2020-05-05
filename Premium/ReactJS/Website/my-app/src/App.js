import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App(){
    return(
        <div>
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    )
}


export default App