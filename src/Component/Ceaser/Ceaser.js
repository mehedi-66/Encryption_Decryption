
import React, { useState } from 'react';
import './Ceaser.css';
import Encryption from './Encryption';
import Decryption from './Decryption';

function Ceaser() {

    const [keys, setKeys] = useState("");
    const [isKey, setIsKey] = useState(0);
    const keyHandler = (event) => {
        setIsKey(1);
        setKeys(event.target.value);
    }
    const isKeyHandeller = () => {

        if (keys === "") {
            setIsKey(0);
        }
        else {
            setIsKey(1);;
        }

    }
    return (
        <React.Fragment>
            <div className="headingCaesar">
                <span>Enter key <small>(integer) </small></span>
                <input type="number" onChange={keyHandler} min="-1000" max="1000" placeholder="0" />
                {!isKey ? <p className="warrning">Please enter a number Key </p> : ""}
            </div>
            <div className="EnDePartCaesar">
                <div className="caesarEncrypt">
                    <Encryption keys={keys} onIsKey={isKeyHandeller} isKey={isKey} />
                </div>

                <div className="caesarDecrypt">
                    <Decryption keys={keys} onIsKey={isKeyHandeller} isKey={isKey} />
                </div>

            </div>

            <div className="video1">
            <iframe  src="https://www.youtube.com/embed/LjFxc0Oo_ks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
                </React.Fragment>
                );

}

                export default Ceaser;
