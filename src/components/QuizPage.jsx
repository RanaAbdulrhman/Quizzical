import { useState, useEffect } from 'react'
import he from 'he'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import FinalResults from './FinalResults'
import Quiz from './Quiz'

export default function QuizPage({quizSettings, restartQuiz}){
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [quizFetch, setQuizFetch] = useState({
    isLoading: true, 
    errorMessage: "", 
    data: null
  });
  const {isLoading, errorMessage, data } = quizFetch;
  const {amount, category, difficulty} = quizSettings
  console.log(category)
  useEffect( () => {
    async function getQuiz(){
      const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
      const data = await response.json()
      const results = data.results

      const decodedResults = results.map((item) => {
        return {
          ...item, 
          question: he.decode(item.question), 
          correct_answer: he.decode(item.correct_answer),
          incorrect_answers: item.incorrect_answers.map((answer) => he.decode(answer))
        }
      })

      setQuizFetch({
        isLoading: false, 
        errorMessage: "", 
        data: decodedResults
      })
    }
    getQuiz()
  }, [])

  let content;
  if( isLoading ){
    content = <LoadingSpinner/>
  } else if( errorMessage !== "" ) {
    content = <ErrorMessage>Something went wrong!</ErrorMessage>
  } else if( currentQuestionIndex === data.length ) {
    content = <ErrorMessage>End of the questions</ErrorMessage>
  } else if(isFinished){
    content = 
    <FinalResults 
      score={score} 
      amountOfQuestions={amount}
      restartQuiz={()=>{restartQuiz()}}/>
  }else{
    const questionComponents = data.map( (question) => 
    <Quiz 
      questionIndex = {currentQuestionIndex}
      question={ question } 
      MoveToNextQuestion={ () => setCurrentQuestionIndex((prev) => prev + 1) }
      quizSettings={quizSettings}
      score={score}
      incrementScore={() => setScore((prevScore)=> prevScore + 1)}
      displayResults={() => setIsFinished(true)}
    />)
    content = questionComponents[currentQuestionIndex]
  } 
  
  return (
    <>
      <div className=' text-black h-screen flex items-center justify-center'>
          {content}
      </div>
    </>
  )
}
