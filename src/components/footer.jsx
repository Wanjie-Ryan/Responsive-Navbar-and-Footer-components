import React from 'react'
import './footer.css'

function Footer() {


  return (

    <>


        <div className="main-footer">
            <div className="container">

                <div className="row-main">

                    <div className="col">

                        <h4>Test Footer</h4>

                        <ul className="list-unstyled">

                            <li>+254-792-907-345</li>
                            <li>Nyeri, Kenya</li>
                            <li>Gatimu</li>

                        </ul>

                    </div>

                    <div className="col">

                        <h4>Name</h4>

                        <ul className="list-unstyled">

                            <li>Jamal</li>
                            <li>Yobba</li>
                            <li>Wavoka</li>

                        </ul>


                    </div>



                    <div className="col">

                        <h4>Places</h4>

                        <ul className="list-unstyled">

                            <li>Nyeri</li>
                            <li>Turkana</li>
                            <li>North Hall</li>

                        </ul>


                    </div>

                   


                </div>


                <hr/>

                <div className="row-copy">

                    <p className="col-p">

                        &copy;{new Date().getFullYear()}
                    </p>



                </div>


            </div>

        </div>
    


    </>
  )
}

export default Footer
