import {motion, AnimatePresence} from 'framer-motion'
import FeedbackItem from "./FeedbackItem"
import  PropTypes from "prop-types"

function FeedbackList({feedback, handleDelete}) {

  //check for feedback
  if(!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }

  //animated 
  // return (
  //   <div className="feedback-list">
  //     <AnimatePresence>
  //     {feedback.map((item)=> (
  //       <motion.div 
  //         key={item.id}
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         exit={{ opacity: 0 }}
  //         layout
  //       >
  //         <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
  //       </motion.div>
  //     ))}
  //     </AnimatePresence>
  //   </div>
  // )

  //version below is without animation
  return (
    <div className="feedback-list">
      {feedback.map((item)=> (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
      ))}
    </div>
  )
}


// prop the array feedback
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}
export default FeedbackList