import React from 'react'
import { useTheme } from '../theme-context'

const Home = () => {
  const {theme, toggleTheme} = useTheme();
  console.log(theme)

  return (
    <div>
      <h1>Home</h1>
      <div>
        <label>
          <input
          type='checkbox'
          onChange={toggleTheme}
          checked={theme==='dark'}
          />
        </label>
      </div>
    </div>
  )
}

export default Home