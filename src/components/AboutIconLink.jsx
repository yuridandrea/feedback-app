import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='./about'> 
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

//Link is used for anchor a inner page - using an a tag the browser reload

export default AboutIconLink