import {v4 as uuidv4} from 'uuid' //is needed for create id
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // import router
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from './components/AboutIconLink'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4() //called as a function
    setFeedback([newFeedback, ...feedback]) //take all the feedback, add the newFeedback and set it
  }
  
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  

  return (
    //wrap routes in Router Routes > Route (> direct child)
    <Router>  
      <Header />
      <div className="container">
        <Routes>
          <Route exact path='/' element={ //for wrap more components open <> and put it in
            <>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </>
          }>
          </Route>
          <Route path='/about' element={<AboutPage/>} /> 
        </Routes>
      </div>
      <AboutIconLink/>
    </Router>
  )
}

export default App