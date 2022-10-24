import React from 'react'

export const Header = () => {
    return (
        <>
         <header>
             <section className="container main-hero-container">
                 <div className="row">
                     <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                         <h1 className="display-2">Online Payment 
                         </h1>
                         <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea numquam error nostrum quae vitae! Adipisci tempore voluptate animi at sapiente consectetur vel porro ullam voluptatibus consequatur, quam repudiandae officia fuga.</p>
                         <h3>Get early Access Now!</h3>
                         <div className="input-group mt-3">
                             <input type="text" className="rounded-pill  p-2 w-75 me-3 form-control-text" placeholder="Enter your email" />
                             <div className="input-group-button">Get it now</div>
                         </div>
                     </div>
                     {/* left side section */}
                     <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-item-center main-herosection-images">
                         <img src="./images/main.jpg" alt="main" className="image-fluid"/>
                         <img src="./images/main2.jpg" alt="main2" className="image-fluid main-hero-img2" /> 
                     </div>
                 </div>
             </section>
             </header>   
        </>
    )
}
