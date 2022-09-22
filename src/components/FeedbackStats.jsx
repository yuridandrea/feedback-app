import  PropTypes from "prop-types"


function FeedbackStats({feedback}) {
  //calc rating avg
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  //add one decimal when needed
  //the wired things means if is 0 then display nothing
  average = average.toFixed(1).replace(/[.,]0/, '')


  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Avarege Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

//you dont need always to use .shape (look at feedbackList.jsx)
FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired
}

export default FeedbackStats