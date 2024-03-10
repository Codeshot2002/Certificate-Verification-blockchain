import React from 'react'
import { useState } from 'react';
import "../instituition/inst.css"
function IssueForm() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    authority: '',
    certificate: '',
    marks: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here, like sending data to a server
    console.log(formData);
  };

  return (
    <>
      <div className="form-container"> {/* Using a class name for styling */}
      <h1 className='heading'>Issue a Certificate</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Authority:</label>
          <input type="text" name="authority" value={formData.authority} onChange={handleChange} />
        </div>
        <div>
          <label>Certificate:</label>
          <input type="text" name="certificate" value={formData.certificate} onChange={handleChange} />
        </div>
        <div>
          <label>Marks:</label>
          <input type="text" name="marks" value={formData.marks} onChange={handleChange} />
        </div>
        <button className='btn btn-info' type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default IssueForm