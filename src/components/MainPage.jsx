
export default function MainPage({displayNextPage}){
  return (

    <div className='  text-white w-50 h-full flex items-center justify-center'>
      <div className='content text-center flex flex-col gap-3 items-center justify-center'>
        {/* <img className=' text-black w-10 fill-current' src={logo} alt="" /> */}
        <h1 className='text-7xl font-bold'>Quizzical</h1>
        <p className='text-3xl font-light'>Test your knowledge on general topics</p>
        <button className='mt-10 rounded-full w-8/12 py-2 shadow-lg font-medium text-3xl bg-gray-900 text-white' onClick={() => displayNextPage()}>Start quiz</button>
      </div>
    </div>

  )
}