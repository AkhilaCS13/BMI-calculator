import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { Slider } from '@mui/material'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [weight, setweight] = useState(0)
  const [height, setheight] = useState(0)
  const [bmi, setbmi] = useState(0)
  const [result, setresult] = useState("")
  const [image, setImage] = useState("")


  //height change
  const heightvalue = (e) => {
    console.log(e.target.value);
    setheight(e.target.value)
  }

  //weigth value
  const weightvalue = (e) => {
    console.log(e.target.value);
    setweight(e.target.value)

  }

  const refresh = () => {
    setbmi(0)
    setheight(0)
    setresult("")
    setweight(0)
    setImage("")
  }

  const bmiresult = () => {
    if (weight > 0 && height > 0) {
      const hvalue = height / 100
      const bmi = Math.round(weight / (hvalue * hvalue).toFixed(2))
      setbmi(bmi)
      console.log(bmi);
      if (bmi <= 18.5) {
        setresult('UNDERWEIGHT');

      } else if (bmi > 18.5 && bmi <= 24.9) {
        setresult('HEALTHY');
      } else if (bmi >= 24.9 && bmi <= 39.9) {
        setresult('OVERWEIGHT');
      } else {
        setresult('OBESITY')
      }
    }
    else {
      toast.error('complete the field')
    }
  }

  const female = () => {
    setImage("https://i.graphicmama.com/uploads/2019/4/5cb498a497720-cute-fitness-woman-cartoon-vector-character-2.png")

  }
  const male = () => {
    setImage("https://i.graphicmama.com/uploads/2019/4/5cb49a2439385-handsome-fitness-man-cartoon-vector-character-1.png")

  }


  return (
    <>
      <div style={{ height: '100vh' }} className='bg-dark w-100 px-md-5'>
        <div className="row w-100">
          <div className="col-md-2"></div>
          <div className="col-md-6 p-5">
            <div className='d-flex justify-content-between'>

              <h2 className='text-light'>BMI CALCULATOR</h2>
              <button onClick={refresh} className='bg-transparent text-light ps-4' style={{ border: 'none' }}><FontAwesomeIcon icon={faArrowsRotate} spin className='fa-2x' /></button>

            </div>
            <div className='row-w-100 d-md-flex'>

              <div className='col-md-6 p-3 mt-4'>
                <div className='d-flex justify-content-evenly'>
                  <figure>
                    <img width={'100px'} onClick={male} src="https://img.freepik.com/premium-photo/illustration-single-man-american-cartoon-art-style-images-with-ai-generated_545052-3006.jpg" alt="no image" className='me-4' />
                    <figcaption className='text-light pt-2 ps-4'>MALE</figcaption>
                  </figure>
                  <figure>
                    <img width={'100px'} onClick={female} src="https://thumbs.dreamstime.com/b/beautiful-young-woman-avatar-character-beautiful-young-woman-avatar-character-vector-illustration-design-178340359.jpg" alt="no image" />
                    <figcaption className='text-light pt-2 ps-3'>FEMALE</figcaption>
                  </figure>
                </div>

                <div>
                  <p className='text-light'>Height : {height}Cm </p>
                  <Slider
                    onChange={(e) => heightvalue(e)}
                    value={height}
                    size="small"
                    defaultValue={50}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={50}
                    max={200}
                    className='w-md-50' />
                </div>
                <div>
                  <p className='text-light'>Weight : {weight}Kg</p>
                  <Slider
                    onChange={(e) => weightvalue(e)}
                    value={weight}
                    size="small"
                    defaultValue={10}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={10}
                    max={100}
                    className='w-md-50' />


                </div>
                <button className='btn btn-info w-md-25' value={bmi} onClick={bmiresult}>Calculate</button>

                <ToastContainer position='top-center' autoClose={2000} theme="colored" />
              </div>


              <div className="col-md-6 pe-md-5 ms-md-5 me-md-5 mt-md-5">
                <div className='border border-1 rounded border-light  p-4'>
                  <h4 className='text-light text-center' >Your Result</h4>
                  <h1 className='text-warning text-center'>{bmi}</h1>
                  <h3 value={result} className='text-success text-center'>{result}</h3>
                  <div className='d-flex justify-content-center'>
                    <img value={image} src={image} alt="" width={'100px'} />

                  </div>               
                   </div>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>

      </div>
    </>
  )
}

export default App
