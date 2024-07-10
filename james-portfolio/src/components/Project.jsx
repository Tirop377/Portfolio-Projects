

import image1 from '../../public/images/1.png'

const Project = () => {
  return (
    <div className="w-full shadow-sm shadow-gray-500 pb-5">
                <img src={image1} className='w-full object-cover' alt=''/>
                <div className='w-3/4 mx-auto flex flex-col items-center gap-5'>
                    <h3 className='font-medium text-2xl py-4 mb-5 text-center relative'>MERN Memories <span className='absolute w-14 bg-white h-1 bottom-0 left-1/2 -translate-x-1/2'></span></h3>
                    <p className='text-gray-300'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea laboriosam quo repellat minima quaerat! Alias, quod et iure at minima asperiores sint laudantium iste exercitationem officia mollitia esse dolor vel praesentium illum doloremque quos, sit voluptates veniam dolorem labore non. Rerum ex illum modi repellat possimus, doloribus tempore odio ullam.
                    </p>
                    <h4 className='text-xl font-medium'>Stack</h4>
                    <ul className='flex justify-between w-full '>
                        <li>React</li>
                        <li>MongoDB</li>
                        <li>Node</li>
                        <li>Express</li>
                    </ul>
                    <div className='flex justify-between w-full'>
                        <button className='bg-orange-600 py-3 px-12 rounded-2xl hover:bg-orange-400'>Code</button>
                        <button className='bg-orange-600 py-3 px-12 rounded-2xl hover:bg-orange-400'>Source</button>
                    </div>

                </div>
            </div>
  )
}

export default Project
