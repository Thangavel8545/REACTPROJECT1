import React from 'react';
import './Style2.css';

export default function Login(){

    return(
        <div>
        <h1 id='B'>SIGN UP</h1>
         <table>
            <tbody>
              <tr>
                 <td className="t1">Name:</td>
                 <td className="t2"><input type="text"></input></td>
              </tr>
              <tr>
                 <td className="t1">Mobile No:</td>
                 <td className="t2"><input type="number"></input></td>
              </tr>
              <tr>
                 <td className="t1">Email:</td>
                 <td className="t2"><input type="email"></input></td>
              </tr>
              <tr>
                 <td className="t1">Age:</td>
                 <td className="t2"><input type="number"></input></td>
              </tr>
            
              <tr>
                 <td className="t1">Gender:</td>
                 <td className="t2"><input type="radio"></input>Male <input type="radio"></input>Female</td>
              </tr>
              <tr>
                 <td className="t1">CITY:</td>
                 <td className="t2">
                 <select>
                 <option>Bangalore</option>
                 <option>Chennai</option>
                 <option>Coimbatore</option>
                 <option>Trivandrum</option>
                 </select></td>
              </tr>
            <tr>
              
                 <td className="t1">ADDRESS:</td>
                 <td className="t2"><textarea id="ta"></textarea></td>
              </tr>
              
              <tr>
                 <td ><button class="b">Submit</button></td>
                 <td ><button class="b" >LOG IN</button></td>
              </tr>
            </tbody>
         </table>
        </div>
    )
}