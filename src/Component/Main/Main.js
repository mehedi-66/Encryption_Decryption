
import React, {useState} from 'react';
import Ceaser from '../Ceaser/Ceaser';
import './Main.css';
import Affine from '../Affine/Affine';
import RSA from '../RSA/Rsa';

function Main(){

    const [btnCeaserActive, setBtnCeaserActive] = useState(1);
    const [btnAffineActive, setBtnAffineActive] = useState(0);
    const [btnRsaActive, setBtnRsaActive] = useState(0);


    const btnCeaserHandler = () =>{
        
        setBtnCeaserActive(1);
        setBtnAffineActive(0);
        setBtnRsaActive(0);
    }
    const btnAffineHandler = () =>{
        setBtnCeaserActive(0);
        setBtnAffineActive(1);
        setBtnRsaActive(0);
    }
    const btnRsaHandler = () =>{
        setBtnCeaserActive(0);
        setBtnAffineActive(0);
        setBtnRsaActive(1);
    }

    return (
        <React.Fragment>
            <div className="NavBar">
                <button className={btnCeaserActive ?"activeButton":"NavButton"} onClick={btnCeaserHandler}>Caesar</button>
                <button className={btnAffineActive ?"activeButton":"NavButton"} onClick={btnAffineHandler}>Affine</button>
                <button className={btnRsaActive ?"activeButton":"NavButton"} onClick={btnRsaHandler}>RSA</button>           
            </div>
            {btnCeaserActive ? <Ceaser /> : ""}
            {btnAffineActive ? <Affine /> : ""}
            {btnRsaActive ? <RSA /> : ""}

        </React.Fragment>
    
    );

}

export default Main;