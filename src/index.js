import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import My from './App.js';
import Header from './Component/header.js';
import Footer from './Component/footer.js';
import './index.css';

class Second extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Student Details</h1><br></br>
        <div class='table'>
        
        <table>
          <tr><th>S.No</th>
          <th>NAME</th>
          <th>DEPARTMENT</th>
          <th>COLLEGE NAME</th></tr>
          <tr><td>1</td>
          <td>Mithun R L</td>
          <td>IT</td>
          <td>HICET</td></tr>
          <tr><td>2</td>
          <td>Vishwa A</td>
          <td>IT</td>
          <td>HICET</td></tr>
          <tr><td>3</td>
          <td>Tharan S</td>
          <td>IT</td>
          <td>HICET</td></tr>
          <tr><td>4</td>
          <td>Subish A</td>
          <td>IT</td>
          <td>HICET</td></tr>
          <tr><td>5</td>
          <td>Sam K</td>
          <td>IT</td>
          <td>HICET</td></tr>
         </table>
         </div>
         <div class="form">
          <form>
            <label>User Name:</label><br></br>
            <input placeholder='Enter the User Name' required></input><br></br>
            <label>Password:</label><br></br>
            <input placeholder='Enter the Password'></input><br></br>
            <button type='submit'>Submit</button>
            <button type='cancel'>Cancel</button><br></br>
          </form>
         </div>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<Second />, document.getElementById('root'));

