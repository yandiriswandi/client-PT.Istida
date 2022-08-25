import React, { useState, useEffect } from 'react'
import { useMutation } from 'react-query';
import axios from 'axios';
import {Container, 
        Alert, 
        Card 
       } from 'react-bootstrap'
import Tabel from '../components/Table'
import Search from '../components/Search'
import { useNavigate } from "react-router-dom";

function Home() {

  let navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: '',
    age: '',
    nickname: '',
    employee: '',
  });

  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnSubmit = (e) => {
    try {
      e.preventDefault();

      // Data body
      const body = JSON.stringify(form);

      // Insert data user to database
      const response =  axios.post('https://api.kontenbase.com/query/api/v1/a7d8fdfe-7fd0-4406-a3a3-f952102060c3/user-TKI',body);
      console.log(response.data.data);
      // Handling response here
      navigate('/home');
      const alert = (
        <Alert variant="success" classNameName="py-1">
          Data Berhasil Ditambah
        </Alert>
      );
      setMessage(alert);
    } catch (error) {
      // navigate('/');
      console.log(error);
    }
  }

  return (
    <Container>
      <div className="h3 mt-4">Aplikasi Data Pribadi</div>
      <Search/>
      <Tabel />
    </Container>
  )
}

export default Home