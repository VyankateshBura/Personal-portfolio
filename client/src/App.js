import React from "react";

import {About,Footer,Header,Skills,Testimonials,Work} from './container';
import { Navbar } from "./components";
import './App.scss';

export default function App() {
 
  return (
   <div className="app">
     <Navbar/>
     <Header/>
     <About/>
     <Work/>
     <Testimonials/>
     <Skills/>
     <Footer/>
   </div>
  );
}