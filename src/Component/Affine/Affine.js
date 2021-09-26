
import React, { useState, useEffect } from 'react';
import './Affine.css';
import Encryption from './EncryptionAffine';
import Decryption from './DecryptionAffine';

function Affine() {

    const [keyP, setKeyP] = useState("");
    const [keyK, setKeyK] = useState("");
    const [isKey, setIsKey] = useState(0);

    const keyPHandler = (event) => {

        setKeyP(event.target.value);
       
    }
    const keyKHandler = (event) => {
       

        setKeyK(event.target.value);
    }

    useEffect(()=>{
        if(keyP !== "" && keyK !==""){
            setIsKey(1);
        }
       
    }, [keyP, keyK ]);
    
   
    const isKeyHandeller = () => {

        if (keyP === "" || keyK === "") {
            setIsKey(0);
        }
        else {
            setIsKey(1);;
        }

    }
    return (
        <React.Fragment>
            <div className="headingCaesar">
                <p>f(x) = px + k </p>
                <span>Enter key <small>(int) </small>p = </span>
                <input type="number" onChange={keyPHandler} min="-1000" max="1000" placeholder=" 3, 5, 7..." />
                <span> and K = </span>
                <input type="number" onChange={keyKHandler} min="-1000" max="1000" placeholder="0" />
                {!isKey ? <p className="warrning">Please enter a number Key </p> : ""}
            </div>
            <div className="EnDePartCaesar">
                <div className="caesarEncrypt">
                    <Encryption keyP={keyP} keyK = {keyK}onIsKey={isKeyHandeller} isKey={isKey} /> 
                </div>

                <div className="caesarDecrypt">
                    <Decryption keyP={keyP} keyK={keyK} onIsKey={isKeyHandeller} isKey={isKey} /> 
                </div>

            </div>

            <div className="video1">
            <iframe  src="https://www.youtube.com/embed/LjFxc0Oo_ks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </React.Fragment>
    );

}

export default Affine;
