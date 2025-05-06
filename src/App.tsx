import './App.css'

function App() {

  return (
    <>
      <div className='video-container'>
        <video autoPlay loop muted className='background-space'>
          <source src="/src/assets/space.mp4">
          </source>
        </video>
      </div>
      <div className='overlay'>
        <h1>Space Drive</h1>
      
        <p className="read-the-docs">
          Drive till you die
        </p>
      </div>
    </>
  )
}

export default App
