import { useState, useEffect } from 'react'
import { getCategoryFromNumber } from './categoryNumberConversion'
import { motion, AnimatePresence } from "framer-motion"

export default function Question({questionIndex , question, MoveToNextQuestion, quizSettings, score, incrementScore, displayResults}){
  let choices = [...question.incorrect_answers].concat(question.correct_answer)
  choices = choices.sort((a, b) => 0.5 - Math.random());
  const [choiceList, setChoiceList] = useState(() => createChoicesList() )
  const [isAnswersRevealed, setIsAnswersRevealed] = useState(false)

  useEffect( () => {
    setChoiceList(createChoicesList())
    setIsAnswersRevealed(false)
  } 
  , [question])

  function createChoicesList(){
    const choiceComponents = choices.map( (answer) => {
      const index = choices.indexOf(answer)
      return <button key={index} className='bg-white text-black rounded-full w-10/12 py-1 border shadow-lg font-medium text-lg md:text-2xl my-2 hover:border-purpely hover:bg-lightPurpely' onClick={(e)=> revealAnswers(e)}>{answer}</button>
    })
    return choiceComponents
  }
  function revealAnswers(e){
    //returns the button user chose
    const chosenAnswer = e.target
    //returns the button for the correct answer
    const correctAnswer = question.correct_answer

    const revealedChoiceComponents = choices.map((answer) => {
      const index = choices.indexOf(answer)
      console.log(index)
      // Chosen & true
      if(chosenAnswer.textContent === answer && answer === correctAnswer){
        incrementScore()
        return <button key={index} className='text-black rounded-full w-10/12 py-1 border shadow-2xl font-medium text-lg md:text-2xl my-2 bg-green-400'>{answer}</button>
      }
      // Chosen & wrong
      else if(chosenAnswer.textContent === answer && answer !== correctAnswer)
        return <button key={index} className='text-black rounded-full w-10/12 py-1 border shadow-2xl font-medium text-lg md:text-2xl my-2 bg-red-400'>{answer}</button>
      // Not chosen & true
      else if(chosenAnswer.textContent !== answer && answer === correctAnswer)
        return <button key={index} className='text-black rounded-full w-10/12 py-1 border shadow-lg font-medium text-lg md:text-2xl my-2 bg-green-400'>{answer}</button>
      // Not chosen & wrong
      else{
        return <button key={index} className='text-black rounded-full w-10/12 py-1 border shadow-lg font-medium text-lg md:text-2xl my-2 bg-white opacity-40'>{answer}</button>
      }
    })
    setChoiceList(revealedChoiceComponents);
    setIsAnswersRevealed(true)
  }
  
  return(
      <motion.div 
      key={questionIndex}
      transition={{ ease: "easeOut"}}
      initial={{ opacity: 0, x:-100 }}
      animate={{ opacity: 1, x:0}}
      className="content flex flex-col w-10/12 xl:w-5/12 lg:w-7/12 sm:w-10/12 h-full items-center justify-center px-4"
      >
        <div className= "p-5 mb-4 font-semibold text-gray-800 text-center rounded-full bg-lightPurpely aspect-square flex items-end justify-center">
          <span className='text-5xl'>{score}</span> / {quizSettings.amount}
        </div>
        <div className='w-full rounded-2xl bg-white flex flex-col gap-3 items-center justify-center border-black shadow-block-xl py-10'>
          <div className= "text-2xl px-8 pb-5 font-semibold w-full text-gray-800 border-b">
            Question {questionIndex+1} of {quizSettings.amount}
          </div>
          <h1 className='text-xl xl:text-4xl lg:text-2xl  md:text-3xl mt-5 font-semibold w-10/12 rounded-lg text-black'>
            {question.question}
          </h1>
          <div className="mt-10 w-full text-center flex-col items-center justify-center">
            {choiceList}
          </div>
          { questionIndex + 1 === quizSettings.amount?
            <button 
              className = {` bg-purpely text-white rounded-full w-4/12 py-1 border font-medium text-2xl mt-5 ${ isAnswersRevealed ? '': 'opacity-30' }`}
              onClick={ () => displayResults() }
              > End Quiz 
            </button>
           :
            <button 
            className = {` bg-purpely text-white rounded-full w-4/12 py-1 border font-medium text-2xl mt-5 ${ isAnswersRevealed ? '': 'opacity-30' }`}
            disabled = { isAnswersRevealed ? '': 'disabled' } 
            onClick={ () => MoveToNextQuestion() }
            > Next 
          </button>
          }
        </div>
        <div className='flex gap-3 mt-5'>
          <div className='text-white rounded-full lg:text-2xl text-xl border-2 w-fit px-3'>Category: {getCategoryFromNumber(quizSettings.category)}</div>
          <div className='text-white rounded-full lg:text-2xl text-xl border-2 w-fit px-3'>Difficulty: {quizSettings.difficulty}</div>
        </div>
      </motion.div>
  )
}

const getNodeText = node => {
  if (['string', 'number'].includes(typeof node)) return node
  if (node instanceof Array) return node.map(getNodeText).join('')
  if (typeof node === 'object' && node) return getNodeText(node.props.children)
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array
}