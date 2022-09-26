import {v4 as uuidv4} from 'uuid' //is needed for create id
import { createContext, useState } from "react";

const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this item is from context',
      rating: 10,
    },
    {
      id: 2,
      text: 'this item is from context',
      rating: 4,
    },
    {
      id: 3,
      text: 'this item is from context',
      rating: 7,
    }
  ])


  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  //add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4() //called as a function
    setFeedback([newFeedback, ...feedback]) //take all the feedback, add the newFeedback and set it
  }

  //delete Feedback
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  //set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }
  return (
    <FeedbackContext.Provider value={{
      feedback,
      deleteFeedback,
      addFeedback,
      editFeedback,
      feedbackEdit,
    }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext