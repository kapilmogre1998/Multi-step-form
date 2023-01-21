import { useRef, useState } from 'react';
import './App.css';

function App() {
  const TOTALSTEPS = 4;
  const [steps, setSteps] = useState(0);
  const progressStepsRef = useRef(null);

  const handlePrev = () => {
    if (steps > 0) {
      setSteps((count) => count - 1)
      progressStepsRef.current.style.width = `${steps - 1}` / `${TOTALSTEPS - 1}` * 100 + '%';
    }
  }

  const handleNxt = () => {
    if (steps < 3) {
      setSteps((count) => count + 1)
      progressStepsRef.current.style.width = `${steps + 1}` / `${TOTALSTEPS - 1}` * 100 + '%';
    }
  }

  return (
    <div className='bg-red-100 h-screen overflow-hidden' >
      <div className='flex justify-center text-2xl font-bold' >Progress Steps</div>
      <div>
        <div className="flex flex-col progress-container">
          <div ref={progressStepsRef} className="progress"></div>
          <div className='justify-between text-center flex' >
            {
              new Array(TOTALSTEPS).fill(1).map((_, index) => (
                <div className={`progress-step grid place-items-center ${index <= steps ? 'active' : ''}`}  >{index + 1}</div>
              ))
            }
          </div>
        </div>
        <div className='flex flex-col justify-center h-screen form-container m-auto' >
          <div className="form-heading flex items-center justify-center w-full rounded-md" >
            <div className='text-lg font-bold' >Get in touch</div>
          </div>
          <form className='form-container pt-4' action="">
            <div>
              <label className='block font-bold' htmlFor="" >First Name</label>
              <input type="text" className='rounded-md h-10 px-2 w-full mb-2' placeholder='Enter First Name' />
            </div>
            <div>
              <label className='block font-bold' htmlFor="" >Last Name</label>
              <input type="text" className='rounded-md h-10 px-2 w-full mb-2' placeholder='Enter Last Name' />
            </div>
          </form>
          <div className='progress-btn' >
            <button className='prev-btn' onClick={handlePrev} disabled={steps > 0 ? false : true} >Prev</button>
            <button className='next-btn' onClick={handleNxt} >Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
//border circle with start and end