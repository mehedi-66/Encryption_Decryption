
import React, { useState } from 'react';
import './Rsa.css';
import Encryption from './EncryptionRsa';
import Decryption from './DecryptionRsa';

function Affine() {

    const [keyP, setKeyP] = useState("");
    const [keyQ, setKeyQ] = useState("");
    const [isKey, setIsKey] = useState(0);
    const [encryptionKey, setEncryptionKey] = useState(0);
    const [decryptionKey, setDecryptionKey] = useState(0);
    const [nValue, setNValue] = useState(0);
    const [show, setShow] = useState(0);

    const keyPHandler = () => {
        setKeyP(5);
        setKeyQ(11);
        setIsKey(1);
    }
    const keyQHandler = () => {
        setKeyP(47);
        setKeyQ(101);
        setIsKey(1);
    }





    const privateAndPublic = (p, q) => {

        let n = p * q;
        let phi = (p - 1) * (q - 1);
        let e = 2;

        // find e
        const gcd = (a, b) => {
            if (!b) {
                return a;
            }
            return gcd(b, a % b);
        }
        while (e < phi) {
            if (gcd(e, phi) === 1) {
                break;
            }
            else {
                e++;
            }
        }

        // find d
        let d;
        for (let i = 0; i <= 10000; i++) {

            let y = ((phi * i) + 1);
            if (y % e === 0) {
                d = y / e;
                break;
            }
        }

        setEncryptionKey(e);
        setDecryptionKey(d);
        setNValue(n);
        setShow(1);

    }




    const generateKeyHandeler = () => {
        let p, q;
        p = Number(keyP);
        q = Number(keyQ);

        privateAndPublic(p, q);

    }



    return (
        <React.Fragment>
            <div className="headingCaesar">

            </div>
            <div className="generateKey">
               {!isKey ? <button onClick={keyPHandler} >Easy</ button> :"" }
               {!isKey ? <button onClick={keyQHandler} >Medium</button> : ""} 
               {isKey ? <button onClick={generateKeyHandeler}>Generate key</button> : ""}
            </div>
            {show ? <div className="showKey">
                <span>N = {nValue}</span> < br />
                <span>Public Key =  {encryptionKey} </span> <br />
                <span>Private Key = {decryptionKey} </span>

            </div> : ""}
            {show ? <div className="EnDePartCaesar">
                <div className="caesarEncrypt">
                    <Encryption />
                </div>

                <div className="caesarDecrypt">
                    <Decryption />
                </div>

            </div> : ""}

            <div className="video1">
            <iframe  src="https://www.youtube.com/embed/LjFxc0Oo_ks" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </React.Fragment>
    );

}

export default Affine;
