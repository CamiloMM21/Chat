import React from 'react'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom';

function Information() {
  return (
    <div>
        <Menu/>
        <div>
          <div>
            <h1>Informacion sobre el producto</h1>
            <img src="" alt="" />
            <h2>NJombre</h2>
            <p></p>
          </div>
             <div>
              info
            </div>

        <Link to="/conv">
        <button className="btn mr-8" data-modal-target="signInModal" data-modal-toggle="signInModal">Buy it</button>
        </Link>
        
        </div>
    </div>
  )
}

export default Information