import React, { useState } from "react";
import "./Classes.css";

function Classes() {


  const [classes, setClasses] = useState([
    {
      id: "1",
      className: "class1",
      numberUser: "20",
      space: "30",
      PTName: "achraf",
    },
    {
      id: "2",
      className: "class2",
      numberUser: "30",
      space: "35",
      PTName: "nour",
    },
    {
      id: "3",
      className: "class3",
      numberUser: "30",
      space: "35",
      PTName: "nour",
    },
    {
      id: "4",
      className: "class4",
      numberUser: "30",
      space: "35",
      PTName: "nour",
    },
    {
      id: "5",
      className: "class5",
      numberUser: "30",
      space: "35",
      PTName: "nour",
    },
  ]);
  const [formData, setFormData] = useState({id: "",className: "",numberUser: "",space: "",PTName: "",});
  const [searchQuery, setSearchQuery] = useState('');
  const [editingId, setEditingId] = useState(null);


  const handleInputChange = (e) => {
    const {name,value}= e.target;
    setFormData({ ...formData, [name]: value });
  };
    
  const handleAddClass = () => {
    if (formData.className && formData.numberUser && formData.space && formData.PTName) {
      setClasses([
        ...classes, 
        {
          id: classes.length > 0 ? (parseInt(classes[classes.length - 1].id) + 1).toString() : "1",
          className: formData.className,
          numberUser: formData.numberUser,
          space: formData.space,
          PTName: formData.PTName,
        },
      ]);
      setFormData({ id: "", className: "", numberUser: "", space: "", PTName: "" }); 
    } else {
      alert("Please fill out all fields!");
    }
  };

  const handleEditClass = (id) => {
    const classToEdit = classes.find((classItem) => classItem.id === id);
    setFormData(classToEdit);
    setEditingId(id);
  };

  const handleUpdateClass = () => {
    setClasses(
      classes.map((classItem) =>
        classItem.id === editingId
          ? { ...classItem, className: formData.className, numberUser: formData.numberUser, space: formData.space, PTName: formData.PTName }
          : classItem
      )
    );
    setFormData({ id: '', className: '', numberUser: '', space: '', PTName: '' });
    setEditingId(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredClasses = classes.filter(
    (classItem) =>
      classItem.className.toLowerCase().includes(searchQuery.toLowerCase()) ||
      classItem.id.toString().includes(searchQuery)
  );
  
        
      

  

  const handleDeleteClass = (id, name) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the class "${name}"?`
    );
    if (confirmDelete) {
      setClasses(classes.filter((classItem) => classItem.id !== id));
    }
  };

  return (
    <div className="container-class">
      <div className="search-bar-classes">
        <input type="text" placeholder="Search by ID, Name" value={searchQuery}
          onChange={handleSearchChange}/>
      </div>
      <div className="form-classes">
        <input
          type="text"
          name="className"
          placeholder="class Name"
          value={formData.className}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="numberUser"
          placeholder="Number User"
          value={formData.numberUser}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="space"
          placeholder="Space"
          value={formData.space}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="PTName"
          placeholder="PT Name"
          value={formData.PTName}
          onChange={handleInputChange}
        />
{editingId ? (
          <button onClick={handleUpdateClass}>Update</button>
        ) : (
          <button onClick={handleAddClass}>Add</button>
        )}      </div>
      <div className="class-table-container">
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
          <tbody className="class-tbody">
            {filteredClasses.map((classItem) => (
              <tr className="class-tr" key={classItem.id}>
                <td>{classItem.id}</td>
                <td>{classItem.className}</td>
                <td>{classItem.numberUser}</td>
                <td>{classItem.space}</td>
                <td>{classItem.PTName}</td>
                <td>
                <button onClick={() => handleEditClass(classItem.id)}>Edit</button>
                  <button
                    onClick={() =>
                      handleDeleteClass(classItem.id, classItem.className)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Classes;
