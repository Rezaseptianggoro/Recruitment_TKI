import React from "react";
import { Component,useEffect } from "react";
import Navigasi from "./Navigasi";
import Tabel from "./Tabel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "../Content/AddUser";
import EditUser from "../Content/EditUser";
import DetailUser from '../Content/DetailUser'
import Axios from 'axios';
import Operasi from "./Operasi";
export default class Index extends Component {
  
   render() {
    return (
      <div>
        <Navigasi/>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Tabel/>}/>
        <Route path="/operasi" element={<Operasi/>}/>
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
        <Route path="/detail/:id" element={<DetailUser/>}/>
        </Routes>
        </BrowserRouter>
        
      </div>
    );
  }
}
