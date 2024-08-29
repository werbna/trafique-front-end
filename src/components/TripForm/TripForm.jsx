import { useState } from "react";

const TripForm = (props) => {
  const [formData, setFormData] = useState({
    destination: ''
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddTrip(formData)
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <label htmlFor='destination-input'>Destination</label>
      <input
      required
      type="text"
      id="destination-input"
      name="destination"
      value={formData.destination}
      onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TripForm;