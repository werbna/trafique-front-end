import { useState } from "react";

const TripForm = (props) => {
  const [formData, setFormData] = useState({
    Destination: ''
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('formData', formData)
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <label htmlFor='destination-input'>Destination</label>
      <input
      required
      type="text"
      id="destination-input"
      name="Destination"
      value={formData.Destination}
      onChange={handleChange}
      />
    </form>
  );
}

export default TripForm;