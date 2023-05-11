import { useState, useEffect } from 'react'
import MainPage from './components/MainPage'
import TopicsPage from './components/TopicsPage'
import QuizPage from './components/QuizPage'
import AnimatedBackground from './components/AnimatedBackground'
import './App.css'

function App() {
  const [page, setPage] = useState(0);
  const [quizSettings, setQuizSettings] = useState({
    amount: 5, 
    category: 0,
    difficulty: "easy"
  });
  function returnContent(){
    if (page === 0)
      return <MainPage displayNextPage={ ()=>setPage(1) }/>
    else if(page === 1)
      return <TopicsPage displayNextPage={ ()=>setPage(2) } setQuizSettings={ setQuizSettings }/>
    return <QuizPage quizSettings={quizSettings} restartQuiz={() => setPage(0)}/>
  }
  return (
    <>
      <AnimatedBackground/>
      {returnContent()}
    </>
  )
}

export default App
