import { useState, useEffect } from 'react';
import * as tripService from '../../services/tripsService'

const logEntryForm = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    rating: 0
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddLogEntry(formData);
    setFormData({
      title: '',
      content: '',
      rating: 0
    });
  }



  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">Title:</label>
      <input
        type="text"
        id="title-input"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="content-input">Content:</label>
      <textarea
        id="content-input"
        name="content"
        value={formData.content}
        onChange={handleChange}
      />
      <label htmlFor="rating-input">Rating:</label>
      <input
        type="number"
        id="rating-input"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
      />
      <button type="submit">Add Log Entry</button>
    </form>
  );
}

export default logEntryForm;
