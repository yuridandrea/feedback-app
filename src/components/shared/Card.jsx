import  PropTypes from "prop-types"

//prop CHILDREN is a keyword which take everyting inside the component 
// see feedbackItem.jsx

function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && `reverse`}`}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: true,
}

//add details to the passed props
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card