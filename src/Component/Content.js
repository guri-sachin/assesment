import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../Component/Style.css'

const Work = () => {
    let imgdata = require('../data.json');
    const navigate = useNavigate();

    console.log(imgdata)
    function Omgdata(e) {
        var hjid = e.target.value
        console.log(hjid)
        // const getStatedata= countrydata.find(country=>country.country_id===getcountryId).states;
        const getStatedata = imgdata.find(id => id.img_id === hjid).images;
        console.log(getStatedata[1].img)
        navigate('/Contentall', { state: getStatedata })
    }

    return (

        <div>
            <div>        <Header /></div>
            <br />
            {/* card */}
            <div class="main" id='a1'>

                <ul class="cards">
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image">
                                <img src="images/k0.jpg" id='dd' /></div>
                            <div class="card_content">
                                <h2 class="card_title">All about Kashmir </h2>
                                <p class="card_text">
                                    The main "Valley of Kashmir" is a low-fertile area surrounded by mountains and contains many rivers.
                                </p>
                                <a >   <button class="btn card_btn" onClick={Omgdata} value={"1"}>Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="images/l1.jpg" id='dd' /></div>
                            <div class="card_content">
                                <h2 class="card_title">All about Ladakh</h2>
                                <p class="card_text">The region is also known for its traditional textiles, jewellery, and handicrafts
                                    Ladakh Ladakh </p>
                                <a target='__blank'>   <button class="btn card_btn" onClick={Omgdata} value={"2"}>Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="images/rajsthan.jpg" id='dd' /></div>
                            <div class="card_content">
                                <h2 class="card_title">All about Rajasthan</h2>
                                <p class="card_text">Rajasthan is famous for its royal splendor, culture, forts, and palaces all over the world </p>
                                <a target='__blank'>   <button class="btn card_btn" onClick={Omgdata} value={"3"}>Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="images/g0.jpg" id='dd' /></div>
                            <div class="card_content">
                                <h2 class="card_title">All about GOA</h2>
                                <p class="card_text">Mainly known for its beaches, Goa can be the perfect destination for a short holiday</p>
                                <a target='__blank'>   <button class="btn card_btn" onClick={Omgdata} value={"4"}>Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="images/chd.jpg"  id='dd'/></div>
                            <div class="card_content">
                                <h2 class="card_title">All about CHandigarh</h2>
                                <p class="card_text">Chandigarh is a tourism paradise with Sukhna Lake, Rock garden, Rose garden and architectural marvel Capitol Complex </p>
                                <a target='__blank'>   <button class="btn card_btn" onClick={Omgdata} value={"5"}>Read More</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="images/j4.webp"  id='dd'/></div>
                            <div class="card_content">
                                <h2 class="card_title">All about GWALIOR</h2>
                                <p class="card_text">The most unique characteristic of this monument is that it has influences from Hindu and Islamic architecture alike </p>
                                <a target='__blank'>   <button class="btn card_btn" onClick={Omgdata} value={"6"}>Read More</button></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <br />

            <Footer />
        </div>
    )
}

export default Work
