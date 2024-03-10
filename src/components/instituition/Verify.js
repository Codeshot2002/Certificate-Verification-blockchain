import React from 'react'
import { useState } from 'react';
import "../instituition/inst.css"

function Verify() {
 
    const [formData, setFormData] = useState({
        name: '',
        certificateId: '',  
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
              <label>Certificate ID:</label>
              <input type="text" name="certificate" value={formData.certificateId} onChange={handleChange} />
            </div>
            <button className='btn btn-info' type="submit">Submit</button>
          </form>
        </div>
        </>
      )
}

export default Verify