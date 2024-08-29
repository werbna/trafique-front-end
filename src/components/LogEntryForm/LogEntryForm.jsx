import { useState, useEffect } from 'react';

const logEntryForm = (props) => {
  const [logEntryData, setLogEntryData] = useState({
    title: '',
    content: '',
    rating: 0
  });

  const handleChange = (evt) => {
    setLogEntryData({ ...logEntryData, [evt.target.name]: evt.target.value });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addLogEntry(logEntryData);
    setLogEntryData({
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
        value={logEntryData.title}
        onChange={handleChange}
      />
      <label htmlFor="content-input">Content:</label>
      <textarea
        id="content-input"
        name="content"
        value={logEntryData.content}
        onChange={handleChange}
      />
      <label htmlFor="rating-input">Rating:</label>
      <input
        type="number"
        id="rating-input"
        name="rating"
        value={logEntryData.rating}
        onChange={handleChange}
      />
      <button type="submit">Add Log Entry</button>
    </form>
  );
}

export default logEntryForm;
