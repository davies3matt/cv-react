import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faRocket, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab, faCheckSquare, faCoffee, faGithub,faRocket)

const HomeC = () => {

    return(
        <div className="page">
            <div className="container">
                <h1 className="text-light" style={{fontSize: '70px'}}>Matthew Davies</h1>
                <div className="btn-group mt-2 mb-4" role="group" aria-label="actionButtons">
                    <button className="d-block btn btn-outline-light" download><i className="fas fa-file-download mr-2" /><FontAwesomeIcon icon={faRocket} /> Start Tour</button>
                    <a href="https://github.com/davies3matt" target="_blank" className="d-block btn btn-outline-light"> <FontAwesomeIcon icon={faGithub} /> Visit My Github Profile<i className="fas fa-external-link-square-alt ml-2" /></a>
                </div>
            </div>   
        </div>
    )
}

export default HomeC;