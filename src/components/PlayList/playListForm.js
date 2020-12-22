import React from 'react'
import { Link } from 'react-router-dom'

const playlistForm = ({ playlist, handleSubmit, handleChange, cancel }) => (
  <form onSubmit={handleSubmit}>
    <label><h1>Create playlist</h1></label><br></br>
    <input
      placeholder="Name of playlist"
      value={playlist.title}
      name="title"
      onChange={handleChange}
    />
    <button type="submit" className="btn btn-primary">Submit</button>
    <Link to={cancel} className="btn btn-secondary">Cancel</Link>
  </form>
)

export default playlistForm
