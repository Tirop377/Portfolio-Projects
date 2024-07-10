import Animate from './Animate/Animate'
const Intro = () => {
  return (
    <div className="w-full mt-32 relative">
        <div className="w-2/3 py-20">
            <p className="font-medium text-6xl bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-6">
                Welcome To <br/>
                My Personal Portfolio
            </p>
            <p className="text-gray-500">
                Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.
            </p>
            <button className='cursor-pointer px-14 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-3xl mt-6'>Learn More</button>
            <p className='w-14 h-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 absolute left-0 bottom-0'></p>
        </div>
        {/* <div className="absolute top-0 right-0 w-1/2 h-full z-0">
            <Animate/>
        </div> */}
        
      
    </div>
  )
}

export default Intro
