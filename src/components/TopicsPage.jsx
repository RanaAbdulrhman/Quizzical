import AnimatedBackground from './AnimatedBackground'
import { getNumberFromCategory } from './categoryNumberConversion'

export default function TopicsPage({displayNextPage, setQuizSettings}){
  const categoryNumber = {
    "Nature":17,
    "Mathematics": 19, 
    "Computers": 18, 
    "Politics": 24, 
  }
  function selectTopic(e){
    const category = e.target.textContent
    setQuizSettings((prev) => {
        return {
        ...prev,
        category: getNumberFromCategory(category)
      }
    })
    displayNextPage()
  }
  return (
    <>
      <div className='content text-white h-full flex items-center justify-center'>
        <div className='text-center flex flex-col gap-3 items-center justify-center w-full'>
          {/* <img className=' text-black w-10 fill-current' src={logo} alt="" /> */}
          <h1 className='text-6xl font-semibold'>Choose a topic</h1>
          <button className='mt-10 text-black rounded-full md:w-4/12 w-10/12 py-2 bg-white shadow-lg font-medium text-3xl hover:border hover:border-gray-800 hover:bg-lightPurpely' onClick={(e) => selectTopic(e)}>Mathematics</button>
          <button className='text-black rounded-full md:w-4/12 w-10/12 py-2 bg-white shadow-lg font-medium text-3xl hover:border hover:border-gray-800 hover:bg-lightPurpely' onClick={(e) => selectTopic(e)}>Computers</button>
          <button className='text-black rounded-full md:w-4/12 w-10/12 py-2 bg-white shadow-lg font-medium text-3xl hover:border hover:border-gray-800 hover:bg-lightPurpely' onClick={(e) => selectTopic(e)}>Politics</button>
          <button className='text-black rounded-full md:w-4/12 w-10/12 py-2 bg-white shadow-lg font-medium text-3xl hover:border hover:border-gray-800 hover:bg-lightPurpely' onClick={(e) => selectTopic(e)}>Nature</button>
        </div>
      </div>
    </>

  )
}