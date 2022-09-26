import {Link} from 'react-router-dom'

function Header({text, bgColor, textColor}) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyle}>
      <div className="container">
        <Link id="title" to='/'>
          <h2 >{text}</h2>
        </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}


export default Header