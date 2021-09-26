
import React, { useState } from 'react';
// import './Encryption.css';

function EncryptionAffine(props) {

    // props keys value

    const [newWords, setnewWords] = useState([]);
    const [showEncryption, setShowEncryption] = useState(0);

    const EncryptionTextHandler = (event) => {
        if(!showEncryption){
            event.target.value.trim();
            setnewWords(event.target.value.split(' '));
        }
      

    }
  
    const submitEncryptHandler = (event) => {
        // now text is => inputEncryption
        props.onIsKey();

        event.preventDefault();
        
        if(props.isKey){
             // here we convert ours given text to encrypted
             let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
             let smallLetters = "abcdefghijklmnopqrstuvwxyz";
 
 
             
            
         
             for (let i = 0; i < newWords.length; i++) {
                 let words = "";
                 for (let j = 0; j < newWords[i].length; j++) {
                     
                     let ch = newWords[i][j]; // A
 
                     if(ch >= 'A' && ch <= 'Z'){
                         let x = ch.charCodeAt(0) - 'A'.charCodeAt(0);
                         if (Number(props.keyK) >= 0) {
                            x = ((Number(x)*Number(props.keyP)) + Number(props.keyK));
                        }
                        else {
                            x = ((Number(x)*Number(props.keyP)) - Number(props.keyK));
                        }
                         if(x < 0){
                             x = x + 26;
                         }
                         x = x % 26;
                         words = words + capitalLetters[x].toString();
                     }
                     else if(ch >= 'a' && ch <= 'z'){
                         let x = ch.charCodeAt(0) - 'a'.charCodeAt(0);
                         if (Number(props.keyK) >= 0) {
                            x = ((Number(x)*Number(props.keyP)) + Number(props.keyK));
                        }
                        else {
                            x = ((Number(x)*Number(props.keyP)) - Number(props.keyK));
                        }
                         if(x < 0){
                             x = x + 26;
                         }
                         x = x % 26;
                         words = words + smallLetters[x].toString();
                     }
                    
 
                   
                 }
                 let numbers = "3#5@2$8!0&5*1(7+3^9=";
                 let space = numbers[i%numbers.length];
                 newWords[i] = (words + space);
                
                 setnewWords(newWords);
             }
     
             setShowEncryption(!showEncryption);
        }
           

        

    }
    const submitResetHandler = ()=>{
      
        window.location.reload();
    }

    return (

        <React.Fragment>
            <div className="container">

                <p>Enter your Text:</p>
                <form >
                    <textarea rows="5" cols="30" placeholder="small and capital letters 20 words" onChange={EncryptionTextHandler}></textarea>
                    <br />
                 {!showEncryption &&  <button onClick={submitEncryptHandler} type="submit">Encryption</button>}  
                <button onClick={submitResetHandler} type="reset">Reset</button> 
                </form>
            </div>

            <div className="output">
                <p className="outputHeading"> Output Encrypted Text:</p>
                {(showEncryption)?  <p className="outputArea">{newWords}</p> : ""}
            </div>
        </React.Fragment>
    );
}

export default EncryptionAffine;