import Project from "./Project"

const Projects = () => {
  return (
    <div className="w-full mt-28">
        <h2 className='font-medium text-5xl mb-10 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent py-2 inline-block'>Projects</h2>
        <div className="grid grid-cols-2 gap-10">
            <Project/>
            <Project/>
            <Project/>
            <Project/>
        </div>
    </div>
  )
}

export default Projects
