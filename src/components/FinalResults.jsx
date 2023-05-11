import star from '../assets/star.png'
import Confetti from 'react-confetti'
import {useWindowSize} from 'react-use'

export default function FinalResults({score, amountOfQuestions, restartQuiz}){
  const stars = Array(score).fill('a').map((index, item)=>
    <img key={index} src={star} alt="star" className='w-14' />
  )
  const { width, height } = useWindowSize()
  return (
    <>
      <Confetti
        width={width}
        height={height}
      />
      <div className='content w-10/12 xl:w-5/12 lg:w-7/12 sm:w-10/12 rounded-2xl bg-white flex flex-col gap-3 items-center justify-center border-black shadow-block-xl py-10'>
        <div className='text-3xl md:text-4xl font-extrabold'>Your Final Score Is</div>
        <div className='flex gap-2 mt-2'>
          {stars}
        </div>
        {score} / {amountOfQuestions}
        <div className='text-3xl my-5'>{score/amountOfQuestions> 0.5? "You're BRILLIANT!!": "Good Job! But consider reading more :)"}</div>
        <button 
                className = "bg-purpely text-white rounded-full w-10/12 lg:w-4/12 md:w-6/12 py-1 border font-medium text-2xl mt-5"
                onClick={ () => restartQuiz() }
                > Take Another Quiz
              </button>
      </div>
    </>

  )
}