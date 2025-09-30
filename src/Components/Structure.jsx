import React from 'react'
import './Structure.css'
import { useState } from 'react'
import Movies from './Movies'

function Structure() {
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="structure">
        <div className='heading'>
            <h1>Movie Finder Web Application</h1>
        </div>

        <div className='search-bar'>
          <input type="text" value = {search} onChange={handleChange} placeholder='Search for a movie...' />
          <button>Search</button>
        </div>

        <div className='movie-list'>
          <Movies searchTerm={search} />
          
        </div>
      
    </div>
  )
}

export default Structure
