import {Table} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link} from 'react-router-dom'

export default function Tabel() {
  const [state, setState] = useState([]);

   // get
   function fetchData() {
    axios
      .get(
        'https://api.kontenbase.com/query/api/v1/a7d8fdfe-7fd0-4406-a3a3-f952102060c3/user-TKI'
      )
      .then((res) => {
        setState(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('error', err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        <table  hover className=' table table-bordered border'>
          <thead>
            <tr className='bg-table'>
              <th>No</th>
              <th>NIK</th>
              <th>Nama Lengkap</th>
              <th>Umur</th>
              <th>Tanggal Lahir</th>
              <th>Jenis Kelamin</th>
              <th>Alamat</th>
              <th>Negara</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>         
            <tr>
              <td>1</td>
              <td>234565666667</td>
              <td>Yandi Riswandi</td>
              <td>24</td>
              <td>01 Januari 1998</td>
              <td>Laki-Laki</td>
              <td>Jl. Babakan Jawa</td>
              <td>Negara</td>
              <td>
                <Link to="/detail" className='text-warning'>Detail</Link>
                <Link to="/edit" className='ml-2 text-primary'>Edit</Link>
                <Link to="/hapus" className='ml-2 text-danger'>Hapus</Link>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}
