
import React, { useState, useEffect } from 'react';
import './EncryptionRsa.css';

function EncryptionRsa(props) {

    // props keys value

    const [newWords, setnewWords] = useState([]);
    const [showEncryption, setShowEncryption] = useState(0);
    const [isKey, setIsKey] = useState(0);
    const [enValue, setEnValue] = useState("");
    const [nValue, setNValue] = useState("");
  
    const EncryptionTextHandler = (event) => {
        if (!showEncryption) {
            event.target.value.trim();
            setnewWords(event.target.value.split(' '));
        }

    }


    const keyEHandler = (event)=>{
        setEnValue(event.target.value);
    }
    const keyNHandler = (event)=>{
        setNValue(event.target.value);
    }


    useEffect(() => {
        if (enValue !== "" && nValue !== "") {
            setIsKey(1);
        }
        else if(enValue === "" || nValue === ""){
            setIsKey(0);
        }
    }, [enValue, nValue]);

    const submitEncryptHandler = (event) => {
        // now text is => inputEncryption

        event.preventDefault();

     
        if (isKey && newWords.length > 0) {





            for (let i = 0; i < newWords.length; i++) {
                let words = [];
                for (let j = 0; j < newWords[i].length; j++) {

                    let ch = newWords[i][j]; // A
                    let n;
                    let e;
                    let x;

                    if (ch >= 'A' && ch <= 'Z') {

                        x = ch.charCodeAt(0) - 'A'.charCodeAt(0);
                    
                    }
                    else if (ch >= 'a' && ch <= 'z') {
                        x = ch.charCodeAt(0) - 'a'.charCodeAt(0);
                    }
                      
                    x = (Number(x) + 1); 
                    e = Number(enValue);
                    n = Number(nValue);
                    let M = 1;
                    for(let i = 1; i <= e; i++){
                        M = (M * x) % n;;
                    }
                   
                  
                    words.push(M);
                    words.push(" ");


                }
                let numbers = "#a@BT$&AK*R)a;d;alk)+!=@#A^#+";
                let space = numbers[i % numbers.length];
                words.push(space);
                words.push(" ");
                newWords[i] = words

                setnewWords(newWords);
            }

            setShowEncryption(!showEncryption);
        }




    }
    const submitResetHandler = () => {

        window.location.reload();
    }

    return (

        <React.Fragment>
            <div className="container">
                <div className="headingCaesar">

                    <span> Public Key = </span>
                    <input type="number" onChange={keyEHandler} min="-1000" max="1000" placeholder="0" />
                    <span> and N = </span>
                    <input type="number" onChange={keyNHandler} min="-1000" max="1000" placeholder="0" />
                    <br />
                    {!isKey ? <span className="warrning">Enter key and N</span> : ""}
                </div>
                <p>Enter your Text:</p>
                <form >
                    <textarea rows="5" cols="30" placeholder="small and capital letters 20 words" onChange={EncryptionTextHandler}></textarea>
                    <br />
                    {!showEncryption && <button onClick={submitEncryptHandler} type="submit">Encryption</button>}
                    <button onClick={submitResetHandler} type="reset">Reset</button>
                </form>
            </div>

            <div className="output">
                <p className="outputHeading"> Output Encrypted Text:</p>
                {(showEncryption) ? <p className="outputArea">{newWords}</p> : ""}
            </div>
        </React.Fragment>
    );
}

export default EncryptionRsa;