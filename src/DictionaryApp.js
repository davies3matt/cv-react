import React from 'react';
import $ from 'jquery';

function DictionaryApp() {
    return (
        <>
        <div className="container center text-light">
            <h2>Comprehensive Word Information</h2>
            <p>Here you can get information on words. Learn about different definitions, synonyms, types of speech, categories, get examples and more!</p>
        <div id="form-row" className="row sticky-top">
            <div className="col">
                <form id="main-form">
                    <fieldset>
                        <label htmlFor="word">Enter Word</label>
                        <input id="word-input" type="text" className="form-control" name="word" placeholder="automobile"></input>
                        <input value="Submit" type="submit" style={{margin: "10px"}} className="btn btn-primary" />
                    </fieldset>
                </form>
            </div>
        </div>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <ul id="word-info" className="list-unstyled"></ul>
                </div>
            </div>
        </div>
        </>
    )
}
const axios = require("axios");
const data = null;
axios({
    "method":"GET",
    "url":"https://wordsapiv1.p.rapidapi.com/words/nose",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"wordsapiv1.p.rapidapi.com",
    "x-rapidapi-key":"64d8693bfamsh11799991a1acb96p1fc15djsn8765195f35c3",
    "useQueryString":true
    }
    })
    .then((response)=>{
      const data = response.data;
      console.log(data)
    })
    .catch((error)=>{
      console.log(error)
    })

    $(document).ready(function(){
        // adds a submit listened to our <form> element
        $("form").submit(async (event) => {
            // prevents the page from reloading on subject
            event.preventDefault();
            // adds the text 'Loading...' to our word 
            // data container for UX purposes
            $('#word-info').html('Loading...');
            // collects the value in the input form element
            // by the id on the element
            const word = $("#word-input").val();
            // creates a variable that represents our
            // word info container
            let wordInfoList = document.querySelector('#word-info');
            try {
                // asynchronously calls our custome function
                axios({
                    "method":"GET",
                    "url":"https://wordsapiv1.p.rapidapi.com/words/nose",
                    "headers":{
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"wordsapiv1.p.rapidapi.com",
                    "x-rapidapi-key":"64d8693bfamsh11799991a1acb96p1fc15djsn8765195f35c3",
                    "useQueryString":true
                    }
                    })
                    .then((response)=>{
                      const data = response.data;
                      console.log(data);
                      if (data.length < 1) {
                        return wordInfoList.appendChild(document.createTextNode('No results matched.'));
                        
                    }
                    // clears the word container if it had
                    // previous data
                    $('#word-info').empty();
                    data.map(val => {
                        // creates parent li element
                        const li = document.createElement('li');
                        li.classList.add('my-4', 'p-4', 'list-item');
                        // loops over the values for each definition
                        val.map(property => {
                            if (property.label === 'definition') {
                                // creates new heading-3 element
                                const def = document.createElement('h3');
                                // adds text to the element
                                def.innerText = property.value;
                                // appends class value for styling
                                def.classList.add(['definition']);
                                // adds the element to our list item
                                li.appendChild(def);
                            } else if (property.isString) {
                                const partOfSpeech = document.createElement('small');
                                partOfSpeech.innerText = property.value;
                                partOfSpeech.classList.add('lead','font-italic');
                                li.appendChild(partOfSpeech);
                            } else {
                                const characteristic = document.createElement('dl');
                                characteristic.className = 'row';
                                const label = document.createElement('dt');
                                label.innerText = property.label;
                                label.className = 'col-sm-3';
                                const value = document.createElement('dd');
                                value.innerText = property.value.join(', ');
                                value.className = 'col-sm-9';
                                characteristic.appendChild(label);
                                characteristic.appendChild(value);
                                li.appendChild(characteristic);
                            }
                        })
                        // appends the list item fully formed to
                        // the word data container
                        wordInfoList.appendChild(li);
                    })
                    })
                    .catch((error)=>{
                      console.log(error)
                    })
                // logs no results if word data is not found
            } catch (e) {
                // logs the error if one exists
                console.log(e);
                // displays message to user if there is an error
                $('#word-info').html('There was an error fetching the word data');
            }
        });
    });

export default DictionaryApp;