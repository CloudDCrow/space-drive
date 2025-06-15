import './App.css'
import CarCreation from './car_options/CarCreation.tsx';
import ButtonLogic from './buttons/ButtonLogic.tsx';

function App() {

  return (
    <>
      <div className='video-container'>

        <video autoPlay loop muted className='background-space'>
          <source src="/videos/space.mp4"></source>
        </video>
      </div>

      <CarCreation />
      <ButtonLogic />
    </>
  )
}

export default App
