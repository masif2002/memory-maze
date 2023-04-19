import React, { useEffect } from 'react'

const Header = ({ onclickk, wins }) => {

  useEffect(() => {
    document.title = `${wins} Wins`
  }, [wins])

  
  return (
    <div className='header'>
      <div className='flex'>
        <div className='wins'>{wins} Wins</div>
        <button onClick={onclickk}>New Game</button>
      </div>
      <h1 className='title'>Memory Game</h1>
    </div>
  )
}

export default Header