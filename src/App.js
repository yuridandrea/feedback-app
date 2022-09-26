import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // import router
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import {FeedbackProvider} from './contex/FeedbackContext' //is not a default export thts why the curly bracet
import AboutIconLink from './components/AboutIconLink'

function App() {
  
  return (
      //wrap routes in Router Routes > Route (> direct child)
    <FeedbackProvider>
      <Router>  
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={ //for wrap more components open <> and put it in
              <>
                <FeedbackForm/>
                <FeedbackStats />
                <FeedbackList />
              </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage/>} /> 
          </Routes>
        </div>
        <AboutIconLink/>
      </Router>
    </FeedbackProvider>
  )
}

export default App