import React, { useState } from 'react';
import "./Classes.css";

function Classes() {

    const [classes, setClasses] = useState([
        { id: '1', name: 'class1', numberUser: '20', space: '30' , PTName: 'achraf'},
        { id: '2', name: 'class2', numberUser: '30', space: '35', PTName: 'nour' },
        { id: '3', name: 'class3', numberUser: '30', space: '35', PTName: 'nour' },
        { id: '4', name: 'class4', numberUser: '30', space: '35', PTName: 'nour' },
        { id: '5', name: 'class5', numberUser: '30', space: '35', PTName: 'nour' },
      ]);

      const handleDeleteClasses = (id) => {
        setClasses(classes.filter((classes) => classes.id !== id));
      };



  return (
    <div className="container-class">
      <table className="class-table">
      <thead>
  <tr className="class-tr">
    <th>ID</th>
    <th>Class Name</th>
    <th>Number of Users</th>
    <th>Space</th>
    <th>PT Name</th>
    <th>Actions</th>
  </tr>
</thead>
        <tbody className='class-tbody'>
          {classes.map((classes) => (
            <tr className='class-tr' key={classes.id}>
              <td>{classes.id}</td>
              <td>{classes.name}</td>
              <td>{classes.numberUser}</td>
              <td>{classes.space}</td>
              <td>{classes.PTName}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDeleteClasses(classes.id)}>Delete</button>
              </td>
              
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
}

export default Classes;
