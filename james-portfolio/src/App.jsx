import Header from './components/Header/Header'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Technologies from './components/Technologies/Technologies'
function App() {

  return (
    <>
      <Header/>
      <main className='mx-auto w-3/4 flex flex-col h-screen'>
        <Intro/>
        <Projects/>
        <Technologies/>
      </main>
    </>
    
  )
}

export default App
