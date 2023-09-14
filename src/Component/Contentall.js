import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import './App.css';
import Swal from "sweetalert2";
import Header from './Header';
import Footer from './Footer';
import '../Component/Style.css'
const Work1 = () => {

    const location = useLocation();
console.log(location.state[5].dsc)

function Show(e){
    console.log(e.target.getAttribute("price"))
    Swal.fire({
        icon: 'success',
        text: `Your Package Done. Thanks for choosing us. Our team will contact you soon. Price: ${e.target.getAttribute("price")}`,
      });
    }      
    return (
        <div>
         
          <Header/>
<br/>
            <div class="container" id='workc'>
                <p style={{ textAlign: "justify" }}>
                 
                 {location.state[5].dsc} </p>

            </div>
            <br />
            <br />
            <div class="container" id='a1'>
                <div class="row">
                    <div class="col">
                        <img src={location.state[0].img} className='sg' />
                    </div>
                    <div class="col">
                        <img src={location.state[2].img}className='sg' />
                    </div>
                </div>
                <br />   <br />
                <div class="row">
                    <div class="col">
                        <img src={location.state[3].img} className='sg' />
                    </div>
                    <div class="col">
                        <img src={location.state[4].img} className='sg' />
                    </div>
                    <div class="col">
                        <img src={location.state[1].img}className='sg' />
                    </div>
                </div>
            </div>
            <br/><br/>
            <div class="container" id='a1'>
                 <p style={{ textAlign: "justify" }}>
                 Immerse yourself in luxury and relaxation with our exclusive getaway package. From pristine beaches to lavish resorts, this is your ticket to a paradise you'll never want to leave. Book now and experience the ultimate escape!
            </p>
            <br/>

            <div>
            {/* <img src='images/banner.jpeg' height="350px" width="1600px" ></img> */}
           
            </div>
           
            </div><br/><br/>
           
             
            {/* footer */}
       
            <h1 style={{ textAlign: "center" }}>Packages</h1>
            <br></br>
            <div class="container" id='a1'>
                <div class="pricing__grid">
                    <div class="pricing__card pricing-card pricing-card_free">
                        <div class="pricing-card__top">
                            <div class="pricing-card__title">Basic</div>
                            <div class="pricing-card__price">₹{location.state[6].price}<span>1 to 5 days</span></div>
                        </div>
                        <div class="pricing-card__body">
                            <div class="pricing-card__pluses">
                                <div class="pricing-card__plus">
                                    <div class="pricing-card__plus-icon"><i class="material-icons">done_all</i></div>
                                    <div class="pricing-card__plus-text">Adventures activitys</div>
                                </div>
                                <div class="pricing-card__plus">
                                    <div class="pricing-card__plus-icon"><i class="material-icons">3 Days 4 Nights </i></div>
                                    <div class="pricing-card__plus-text">Traveling</div>
                                </div>
                                <div class="pricing-card__plus">
                                    <div class="pricing-card__plus-icon"><i class="material-icons">done_all</i></div>
                                    <div class="pricing-card__plus-text">Food indluded</div>
                                </div>
                                <div class="pricing-card__plus">
                                    <div class="pricing-card__plus-icon"><i class="material-icons">Additianal charges</i></div>
                                    <div class="pricing-card__plus-text">Hotel not indluded</div>
                                </div>
                            </div>
                            <div class="pricing-card__button"><a onClick={Show} style={{color:"white"}} price={location.state[6].price}>Select</a></div>
                        </div>
                    </div>
                    <div class="pricing__card pricing-card">
                        <div class="pricing-card__top">
                            <div class="pricing-card__title">Standart</div>
                            <div class="pricing-card__price">₹{location.state[7].price}<span>/In Weeks</span></div>
                        </div>
                        <div class="pricing-card__body">
                            <div class="pricing-card__pluses">
                                <div class="pricing-card__plus">
                                    <div class="pricing-card__plus-icon"><i class="material-icons">done_all</i></div>
                                    <div class="pricing-card__plus-text">Free Bike,Boat rides</div>
                                </div>
                                <div class="pricing-card__plus">
                                    <div class="pricing-card__plus-icon"><i class="material-icons">done_all</i></div>
                                    <div class="pricing-card__plus-text">Food and Stay included</div>
                                </div>
                                <div class="pricing-card__plus">
                                    <div class="pricing-card__plus-icon"><i class="material-icons">done_all</i></div>
                                    <div class="pricing-card__plus-text">Three star Hotels</div>
                                </div>
                                <div class="pricing-card__plus">
                                    <div class="pricing-card__plus-icon"><i class="material-icons">done_all</i></div>
                                    <div class="pricing-card__plus-text">Camps exter charges</div>
                                </div>
                            </div>
                            <div class="pricing-card__button"><a onClick={Show} style={{color:"white"}} price={location.state[7].price} >Select</a></div>
                        </div>
                    </div>
                    <div class="pricing__card pricing-card pricing-card_premium">
                        <div class="pricing-card__top">
                            <div class="pricing-card__title">Premium</div>
                            <div class="pricing-card__price">₹{location.state[8].price}<span>/month</span></div>
                        </div>
                        <div class="pricing-card__body">
                            <div class="pricing-card__pluses">
                                <div class="pricing-card__plus">
                                    <div class="pricing-card__plus-icon"><i class="material-icons">done_all</i></div>
                                    <div class="pricing-card__plus-text">Free Traveling</div>
                                </div>
                                <div class="pricing-card__plus">
                                    <div class="pricing-card__plus-icon"><i class="material-icons">done_all</i></div>
                                    <div class="pricing-card__plus-text">Food and Stay included</div>
                                </div>
                                <div class="pricing-card__plus">
                                    <div class="pricing-card__plus-icon"><i class="material-icons">done_all</i></div>
                                    <div class="pricing-card__plus-text">Only 5 Star Hotels</div>
                                </div>
                                <div class="pricing-card__plus">
                                    <div class="pricing-card__plus-icon"><i class="material-icons">done_all</i></div>
                                    <div class="pricing-card__plus-text">Private Rooms</div>
                                </div>
                                <div class="pricing-card__plus">
                                    <div class="pricing-card__plus-icon"><i class="material-icons">done_all</i></div>
                                    <div class="pricing-card__plus-text">All charges Done by us</div>
                                </div>
                            </div>
                            <div class="pricing-card__button"><a onClick={Show} style={{color:"white"}} price={location.state[8].price}>Select</a></div>
                        </div>
                    </div>
                </div>
            </div>







            <img src='images/4873.jpg'  id='po' ></img>





<br/><br/><Footer/>

        </div>


    )
}

export default Work1
