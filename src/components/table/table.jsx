import React from "react";
import "./table.styles.css"
export default function Table(){
    return(
        <div className="container">
            <h2 className="heading">LIST OF ALL JOBS TO APPLY</h2>
        <table>
        
            <thead>
                <tr>
                <th>ID</th>
                <th>Company</th>
                <th>Salary</th>
                <th>Status</th>
                <th>Action</th>
                </tr>

            </thead>
            <tbody className="myTable">
            <tr>
                <td>1</td>
                <td>Microsoft</td>
                <td>Rs.360 ,738</td>
                <td>not Applied!</td>
                <td><button>Apply</button></td>
               
            </tr>
            <tr>
                <td>2</td>
                <td>Goldman Sachs</td>
                <td>Rs.230,789</td>
                <td>not Applied!</td>
                <td><button>Apply</button></td>
               
            </tr>
            <tr>
                <td>2</td>
                <td>Intuit Inc</td>
                <td>Rs.560,142</td>
                <td>Already Applied!</td>
                <td><button>Apply</button></td>
               
            </tr>
            <tr>
                <td>1</td>
                <td>Philips</td>
                <td>Rs.380,735</td>
                <td>Already Applied!</td>
                <td><button>Apply</button></td>
               
            </tr>
            <tr>
                <td>1</td>
                <td>D.E. Shaw</td>
                <td>Rs.630,542</td>
                <td>Not Applied!</td>
                <td><button>Apply</button></td>
               
            </tr>


            </tbody>
        </table>
        </div>
    )
}