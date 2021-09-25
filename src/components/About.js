import React from 'react'

export default function About(props) {
  // const  [myStyle, setMyStyle] = useState({
  //   color:'black',
  //   backgroundColor:'white'
  // }) 
let myStyle = {
  color:props.mode ==='dark'?'white':'black',
  backgroundColor : props.mode === 'dark'?'rgb(36 74 104)':'white'
}

  
  
  // const toggleStyle= ()=>{
  //   if(myStyle.color === 'black'){
  //     setMyStyle({
  //       color:'white',
  //       backgroundColor:'black',
  //       border:'1px solid white',
  //       Transition:'2s'
  //     })
  //     setBtnText('enable white mode')
  //   }
  //   else{
  //     setMyStyle({
  //       color:'black',
  //       backgroundColor:'white'
  //     })
  //     setBtnText('enable dark mode')
  //   }
  // }
    return (
            <div className="container my-3" style={myStyle}>
              <h2 className='my-3'>About US</h2>

                <div className="accordion my-3" id="accordionExample">
                   <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       Analyze your text
                      </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body"  style={myStyle}>
                <strong>Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, nulla. dolor sit amet consectetur, adipisicing elit. Corrupti, nulla.</strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               free to use
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body"  style={myStyle}>
                <strong>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, nulla. sit amet consectetur adipisicing elit. Quibusdam nesciunt perferendis aperiam maiores! </strong>
               </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser Compatible
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body"  style={myStyle}>
                <strong>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, nulla. amet, consectetur adipisicing elit. Quos quibusdam iusto debitis rerum, aperiam harum doloribus cumque?</strong>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    )
}
