import React from 'react'

export default function Add() {
  return (
    <div>
        <div className='container-add'>
        <div className="h3 mt-4">Aplikasi Data Pribadi</div>
        <form className='form-add'>
          <div className="h5 mt-4">Tambah Data Baru</div>
          <div className="mb-3 mt-3">
            <label for="exampleInputEmail1" className="form-label">NIK</label>
            <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Nama Lengkap</label>
            <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1"
            />
          </div>
          <label for="exampleInputPassword1" className="form-label">Jenis Kelamin</label>
          <div class="form-check">
            <input 
                className="form-check-input" 
                type="radio" 
                name="flexRadioDefault" 
                id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
                Laki-laki
            </label>
            <input 
                className="form-check-input radio-left" 
                type="radio" 
                name="flexRadioDefault" 
                id="flexRadioDefault2" 
                checked
            />
            <label className="form-check-label label-radio-left" for="flexRadioDefault2">
                Perempuan
            </label>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label mt-3">Tanggal Lahir</label>
            <input 
                type="date" 
                className="form-control" 
                id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Alamat</label>
            <textarea className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Negara</label>
            <select id="provinsi" name="provinsi" className="form-select" >
                <option className='text-option'>Pilih Negara</option>
                <option>indonesia</option>
                <option>malaysia</option>
                <option>vietnam</option>
            </select>
          </div>
          <div className='add-button'>
            <button type="button" class="btn btn-primary">Simpan</button>
            <button type="button" class="btn btn-primary ml-3">Kembali</button>
          </div>
        </form>
        </div>
    </div>
  )
}
