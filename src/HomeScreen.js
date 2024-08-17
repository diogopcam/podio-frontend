import React from 'react';
import './styles/HomeScreen.css'
import Logo from './images/podio-logo.svg'

function HomeScreen(){
    return(
        <div className='FullScreen'>
            <div> <p></p></div>
            <div className="LogoText">
                <img className="Logo" src={Logo}/>
                <p className='Text'> Apoie os atletas do<br/>nosso país </p>
            </div>
            <div className='Description'> 
                <p> O PODIO é um projeto sem fins lucrativos que objetiva proporcionar uma central de informações segura e unificada sobre os<br/>atletas do nosso país. </p>
            </div>
        </div>
    )
}

export default HomeScreen;