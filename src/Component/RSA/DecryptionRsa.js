
import React, { useState, useEffect } from 'react';
import './DecryptionRsa.css';

function DecryptionRsa(props) {

    // props keys value
    const [decWords, setDecWords] = useState([]);
    const [newWords, setnewWords] = useState([]);
    const [showEncryption, setShowEncryption] = useState(0);
    const [isKey, setIsKey] = useState(0);
    const [enValue, setEnValue] = useState("");
    const [nValue, setNValue] = useState("");
     const [newArray, setNewArray] = useState([]);
    //console.log(newWords);
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

        if(isKey && newWords.length > 0) {
        // convert word by word
        let  singleWord = [];
        let len = newWords.length;
        let idx = 0;
        for(let i = 0; i < len; i++){
            let x = newWords[i];
            if(!isNaN(x)){
                
                singleWord.push(x);
               
            }
            else{
                
                newArray[idx++] = singleWord;
                 setNewArray(newArray);
                singleWord = [];
            }
        }
        
       
            // here we convert ours given text to encrypted
            // let capitalLetters = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let smallLetters = "@abcdefghijklmnopqrstuvwxyz";

            
            for (let i = 0; i < newArray.length; i++) {
                let words = "";
                for (let j = 0; j < newArray[i].length; j++) {

                    let numArray = newArray[i][j]; // A
                    let n;
                    let d;
                    let M;  
                    numArray = Number(numArray);
                    d = Number(enValue);
                    n = Number(nValue);
                    // console.log(numArray);
                    // console.log(d);
                    //  M = Math.pow(numArray, d) % n;
                    M = 1;
                     for(let i = 1; i <= d; i++){
                         M = (M * numArray) % n;;
                     }
                    
                    // console.log(M);
                  
                  try{
                    words = words + smallLetters[M].toString();
                  }
                  catch(e){
                    window.location.reload();
                  }
                   

                }
            
                
             
               decWords[i] = words + " ";

                setDecWords(decWords);
              
            }

            setShowEncryption(!showEncryption);
        }


    }
    const submitResetHandler = () => {

        window.location.reload();
    }

    return (

        <React.Fragment>
            <div className="container RsaMargin">
                <div className="headingCaesar">

                    <span> Private Key = </span>
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
                    {!showEncryption && <button onClick={submitEncryptHandler} type="submit">Decryption</button>}
                    <button onClick={submitResetHandler} type="reset">Reset</button>
                </form>
            </div>

            <div className="output">
                <p className="outputHeading"> Output Decrypted Text:</p>
                {(showEncryption) ? <p className="outputArea">{decWords}</p> : ""}
            </div>
            
        </React.Fragment>
    );
}

export default DecryptionRsa;