import React from 'react'
import {Container, 
        Alert, 
        Card 
       } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Seacrh() {
   // call that hooks here and store to variable
   const navigate = useNavigate()

   // create function here for handle push to another pages
   const navigateToAdd = () => {
     console.log("berhasil navigate");
     navigate("/add")
   }

  return (
    <div>
    <Card className='card-search mt-4'>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <form className='form-search'>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">NIK</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Nama</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
        </form>
        </blockquote>
      </Card.Body>
    </Card>
    <div className='home-button mt-2'>
      <button 
        type="button" 
        class="btn btn-primary ml-3 float-right" 
        onClick={navigateToAdd}>
          Add
      </button>
      <button 
        type="button" 
        class="btn btn-primary float-right">
          Search
      </button>
    </div>
    </div>
  )
}
