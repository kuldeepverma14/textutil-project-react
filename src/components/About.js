import React, {useState } from 'react'

export default function About(props) {
    const [myStyle, setMyStyle] = useState({
        color:`black`,
        backgroundColor:`yellow`
    })
    // let myStyl1 = {
    //     backgroundColor:`black`,
    //     color:`white`
    // }
    // let myStyl2 = {
    //     backgroundColor:`blue`,
    //     color:`white`
    // }
    // let myStyl3 = {
    //     backgroundColor:`purple`,
    //     color:`white`
    // }
    const[text,setText]=useState(`Enable purple mode`)
    const toggleBg = () => {
        if (myStyle.color === `black`) {
            setMyStyle({
                color: `white`,
                backgroundColor: `purple`,
                border:`1px solid black`
            })
            setText(`Enable white mode`)
        } else {
            setMyStyle({
                color: `black`,
                backgroundColor: `white`

            })
            setText(`Enable red mode`)
        }
    }
   
  return (
      <div className='container' style={myStyle}>
          <div className="accordion" id="accordionExample">
              <div className="accordion-item" style={myStyle}>
                  <h2 className="accordion-header">
                      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Accordion Item #1
                      </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                  </div>
              </div>
              <div className="accordion-item" style={myStyle}>
                  <h2 className="accordion-header">
                      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Accordion Item #2
                      </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                  </div>
              </div>
              <div className="accordion-item" style={myStyle}>
                  <h2 className="accordion-header">
                      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Accordion Item #3
                      </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.  
                      </div>
                  </div>
              </div>
          </div>
          <button type="button" onClick={toggleBg} className="btn btn-secondary my-2">{text}</button>
          <div className="form-check form-switch">
              <input className="form-check-input" onClick={toggleBg} type="checkbox" role="switch" id="flexSwitchCheckChecheck"/> {text} <br />
              <label className="form-check-label"  htmlFor="flexSwitchCheckChecked">{text}</label>
          </div>
    </div>
  )
}
