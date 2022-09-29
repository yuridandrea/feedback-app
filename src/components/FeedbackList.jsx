//import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../contex/FeedbackContext'
import FeedbackItem from "./FeedbackItem"
import Spinner from "../components/shared/Spinner" 

function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)
  //check for feedback
  if(!isLoading && (!feedback || feedback.length === 0)) {
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
  return isLoading ? (
  <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback.map((item)=> (
        <FeedbackItem key={item.id} item={item}/>
      ))}
    </div>
  ) 
  //version below is without animation
}


export default FeedbackList