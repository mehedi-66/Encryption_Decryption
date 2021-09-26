
import React, { useState } from 'react';

function Decryption(props) {

    // props keys value

    const [newWords, setnewWords] = useState([]);
    const [showDecryption, setShowDecryption] = useState(0);

    const DecryptionTextHandler = (event) => {
        if(!showDecryption){
            event.target.value.trim();
            setnewWords(event.target.value.split(' '));
        }
       

    }
    const submitDecryptHandler = (event) => {
        // now text is => inputEncryption
        props.onIsKey();
        event.preventDefault();

        if (props.isKey) {
            // here we convert ours given text to encrypted
            let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let smallLetters = "abcdefghijklmnopqrstuvwxyz";





            for (let i = 0; i < newWords.length; i++) {
                let words = "";
                for (let j = 0; j < newWords[i].length; j++) {

                    let ch = newWords[i][j]; // A

                    if (ch >= 'A' && ch <= 'Z') {
                        let x = ch.charCodeAt(0) - 'A'.charCodeAt(0);
                        if (props.keys >= 0) {
                            x = (Number(x) - Number(props.keys));
                        }
                        else {
                            x = (Number(x) + Number(props.keys));
                        }

                        if (x < 0) {
                            x = x + 26;
                        }
                        x = x % 26;
                        words = words + capitalLetters[x].toString();
                    }
                    else if (ch >= 'a' && ch <= 'z') {
                        let x = ch.charCodeAt(0) - 'a'.charCodeAt(0);
                        if (props.keys >= 0) {
                            x = (Number(x) - Number(props.keys));
                        }
                        else {
                            x = (Number(x) + Number(props.keys));
                        }
                        if (x < 0) {
                            x = x + 26;
                        }
                        x = x % 26;
                        words = words + smallLetters[x].toString();
                    }
                    else{
                        words = words + " ";
                    }



                }
              

                newWords[i] = (words + " ");

                setnewWords(newWords);
            }

            setShowDecryption(!showDecryption);

        }



    }
    const submitResetHandler = () => {

        window.location.reload();
    }

    return (

        <React.Fragment>
            <div className="container">
                <p> Enter your Text:</p>
                <form >
                    <textarea rows="5" cols="30" placeholder="small and capital letters 20 words" onChange={DecryptionTextHandler}></textarea>
                    <br />
                    {!showDecryption && <button onClick={submitDecryptHandler} type="submit">Decryption</button>}
                    <button onClick={submitResetHandler} type="reset">Reset</button>
                </form>
            </div>

            <div className="output">
                <p className="outputHeading">Output Decrypted Text:</p>
                {showDecryption ?  <p className="outputArea">{newWords}</p>: ""}
            </div>
        </React.Fragment>
    );
}

export default Decryption;