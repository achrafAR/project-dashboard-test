import React, { useState } from 'react';
import './Users.css';

function Users() {
  const [users, setUsers] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', phone: '123-456-7890' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', phone: '987-654-3210' },
    { id: 3, firstName: 'ach', lastName: 'Doe', phone: '123-456-7890' },
    { id: 4, firstName: 'nour', lastName: 'Smith', phone: '987-654-3210' },
    { id: 5, firstName: 'omar', lastName: 'Doe', phone: '123-456-7890' },
    { id: 6, firstName: 'mira', lastName: 'Smith', phone: '987-654-3210' },
  ]);

  const [formData, setFormData] = useState({ id: '', firstName: '', lastName: '', phone: '' });
  const [editingId, setEditingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddUser = () => {
    if (formData.firstName && formData.lastName && formData.phone) {
      setUsers([
        ...users,
        {
          id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
        },
      ]);
      setFormData({ id: '', firstName: '', lastName: '', phone: '' });
    }
  };

  const handleDeleteUser = (id, name) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete the class "${name}"?`);
    if (confirmDelete) {
        setUsers(users.filter((user) => user.id !== id));
    }
  };



  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    setFormData(userToEdit);
    setEditingId(id);
  };

  const handleUpdateUser = () => {
    setUsers(
      users.map((user) =>
        user.id === editingId
          ? { ...user, firstName: formData.firstName, lastName: formData.lastName, phone: formData.phone }
          : user
      )
    );
    setFormData({ id: '', firstName: '', lastName: '', phone: '' });
    setEditingId(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.toString().includes(searchQuery)
  );

  return (
    <div className="container-user">
      {/* Search Bar */}
      <div className="search-bar-user">
        <input
          type="text"
          placeholder="Search by ID, Name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Form */}
      <div className="form-user">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {editingId ? (
          <button onClick={handleUpdateUser}>Update</button>
        ) : (
          <button onClick={handleAddUser}>Add</button>
        )}
      </div>
            <div className='user-table-container'>
            <table className='user-table'>
        <thead className='user-thead'> 
          <tr className='user-tr'>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='user-tbody'>
          {filteredUsers.map((user) => (
            <tr className='user-td' key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => handleEditUser(user.id)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id, user.firstName)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
            </div>
      
    </div>
  );
}

export default Users;
