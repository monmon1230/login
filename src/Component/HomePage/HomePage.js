import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HomePage = () => {
  return (
    <div>
    <Link to='/'>
        <ArrowBackIcon/>
    </Link>
    <div className='Text'>we are the software team</div>
</div>
  )
}

export default HomePage