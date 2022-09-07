import React from 'react';
import Figure from 'react-bootstrap/Figure'
import { useEffect, useState } from 'react';
import './Main.css';

export const Main = () => {
  let data
  const APIurl = 'https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/'
  const [ShowData, SetShowData] = useState()
  function JSONdata() {
    fetch(APIurl)
      .then(response => response.json())
      .then(responseData => {
        data = [responseData].map(function (object) {
          return (<>
            <figure className='figure'>
              <img key={object.id} src={object.heading.svg} />
              <figcaption className='figure-caption cap' key={object.id}>
                {object.heading.heading}
              </figcaption>
            </figure>
            <h id='subheading' key={object.id}>{object.heading.sub_heading}</h>


            {/* Product */}
            <div className="container">
              <div className="row">
                <div className="card col-8 details" id='detailsleft'>
                  <div className="container-fliud">
                    <div className="wrapper row">
                      <div className="preview col-md-6">
                        <div className="preview-pic tab-content">
                          <div className="tab-pane active" id="pic">
                            <img key={object.id} src={object.main_product.main_product_svg} />
                          </div>
                        </div>
                      </div>
                      <div className="details col-md-6">
                        <h3 className="product-title" key={object.id}>{object.main_product.product_title}</h3>
                        <span className="pipeline" key={object.id}>{object.main_product.product_pipeline}</span>
                        <h className="price">
                          <img key={object.id} src={object.main_product.online_price_icon}></img>: <strike key={object.id}>Rs. {object.main_product.online_price}</strike>
                        </h>
                        <h4 id='quantity' key={object.id}>Qty:{object.main_product.quantity} </h4><br />
                        <a id='all_det' href="#" underlined>All Details</a>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="card col details" id='detailsright'>
                  <div className="details col-md-6">
                    <h4 id='status' className="status">Status <img key={object.id} src={object.main_product.status_icon} /> </h4>
                    <div>
                      <p id='time_rem'>Time Remaining</p>
                      <span className="time" key={object.id}> {object.main_product.time_remaining} Minutes</span>
                    </div>
                    <div className="bidsplaced">
                      <p key={object.id}>BIDS PLACED |  <span id='bidnumber'>{object.main_product.bid_placed}</span> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compare Bids */}

            <div id='compare_box' className="container">
              <div className="row">
                <div className="card col details" id='leftcompare'>

                  <div className="container-fliud">
                    <div className="wrapper row">

                      <div className="details col-md-6">
                        <h3 key={object.id} className="product-title">{object.bids[0].shop_address}</h3>
                        <h4 id='offer_price' key={object.id} className="price">Rs.  {object.bids[0].offer_price}   </h4>
                        <div>
                          <br></br><br></br>
                          <h  className='desc_head'>Delivery & Services</h><br></br><br></br>
                          <p className='desc' key={object.id}><img key={object.id} src={object.bids[0].express_delivery_icon} /> Express Delivery <img key={object.id} src={object.bids[0].check_icon} /></p>
                          <p className='desc' key={object.id}><img key={object.id} src={object.bids[0].return_option_icon} /> Return Option <img key={object.id} src={object.bids[0].check_icon} /></p>
                        </div><br></br>


                      </div>
                      <div className="preview col-md-6">
                        <div className="preview-pic tab-content">
                          <div className="active" id="pic">
                            <img key={object.id} src={object.bids[0].shop_image} height={120} width={120} /><br></br>
                            <figcaption key={object.id}>{object.bids[0].shop_name}</figcaption>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="offer">
                      <img key={object.id} src={object.bids[0].extra_offer_icon} />   Extra Offer
                    </p>
                    <p key={object.id} className='offerdesc'>
                      {object.bids[0].product_name}
                    </p>

                    <button className="buy_now btn btn-default" type="button">
                      Buy Now
                    </button>
                    <div id='alt_container' className="row no-gutters">
                      <p>Alternate Products</p>
                      <div className="col-6 col-md-3"><img key={object.id} src={object.main_product.main_product_svg} /></div>
                      <div className="col-12 col-sm-6 col-md-8">
                        <p className='alt_prod_desc' key={object.id}>{object.bids[0].alternate_product_details.product_name}</p>
                        <div key={object.id} className="alt_price">
                          <img key={object.id} src={object.bids[0].alternate_product_details.online_price_icon} height={22.26} width={22.26}></img>: <strike key={object.id}>Rs:{object.main_product.online_price}</strike>
                          <span>{object.bids[0].alternate_product_details.offer_price}    </span>
                          <button className="Buybtn" type="button">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>


                  </div>

                </div>
                <div className="card col details" id='middlecompare'>
                  <div className="container-fliud">
                    <div className="wrapper row">

                      <div className="details col-md-6">
                        <h3 key={object.id} className="product-title">{object.bids[1].shop_address}</h3>
                        <h4 id='offer_price' key={object.id} className="price">Rs.  {object.bids[1].offer_price}   </h4>
                        <div>
                          <br></br><br></br>
                          <h  className='desc_head'>Delivery & Services</h><br></br><br></br>
                          <p className='desc' key={object.id}><img key={object.id} src={object.bids[1].express_delivery_icon} /> Express Delivery <img key={object.id} src={object.bids[1].check_icon} /></p>
                          <p className='desc' key={object.id}><img key={object.id} src={object.bids[1].return_option_icon} /> Return Option <img key={object.id} src={object.bids[1].cross_icon} /></p>
                        </div><br />


                      </div>
                      <div className="preview col-md-6">
                        <div className="preview-pic tab-content">
                          <div className="active" id="pic">
                            <img key={object.id} src={object.bids[1].shop_image} height={120} width={120} /><br></br>
                            <figcaption key={object.id}>{object.bids[1].shop_name}</figcaption>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="offer">
                      <img key={object.id} src={object.bids[1].extra_offer_icon} />   Extra Offer
                    </p>
                    <p key={object.id} className='offerdesc'>
                      {object.bids[1].product_name}
                    </p>

                    <button className="buy_now btn btn-default" type="button">
                      Buy Now
                    </button>
                    <div id='alt_container' className="row no-gutters">
                      <p>Alternate Products</p>
                      <div className="col-6 col-md-3"><img key={object.id} src={object.main_product.main_product_svg} /></div>
                      <div className="col-12 col-sm-6 col-md-8">
                        <p className='alt_prod_desc' key={object.id}>{object.bids[1].alternate_product_details.product_name}</p>
                        <div key={object.id} className="alt_price">
                          <img key={object.id} src={object.bids[1].alternate_product_details.online_price_icon} height={22.26} width={22.26}></img>: <strike key={object.id}>Rs:{object.main_product.online_price}</strike>
                          <span>{object.bids[1].alternate_product_details.offer_price}    </span>
                          <button className="Buybtn" type="button">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>


                  </div>

                </div>
                <div className="card col details" id='rightcompare'>
                  <div className="container-fliud">
                    <div className="wrapper row">

                      <div className="details col-md-6">
                        <h3 key={object.id} className="product-title">{object.bids[2].shop_address}</h3>
                        <h4 id='offer_price' key={object.id} className="price">Rs.  {object.bids[2].offer_price}   </h4>
                        <div>
                          <br></br><br></br>
                          <h className='desc_head'>Delivery & Services</h><br></br><br></br>
                          <p className='desc' key={object.id}><img key={object.id} src={object.bids[2].express_delivery_icon} /> Express Delivery <img key={object.id} src={object.bids[0].check_icon} /></p>
                          <p className='desc' key={object.id}><img key={object.id} src={object.bids[2].return_option_icon} /> Return Option <img key={object.id} src={object.bids[0].cross_icon} /></p>
                        </div><br />


                      </div>
                      <div className="preview col-md-6">
                        <div className="preview-pic tab-content">
                          <div className="active" id="pic">
                            <img key={object.id} src={object.bids[2].shop_image} height={120} width={120} /><br></br>
                            <figcaption key={object.id}>{object.bids[2].shop_name}</figcaption>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="offer">
                      <img key={object.id} src={object.bids[2].extra_offer_icon} />   Extra Offer
                    </p>
                    <p key={object.id} className='offerdesc'>
                      {object.bids[2].product_name}
                    </p>

                    <button className="buy_now btn btn-default" type="button">
                      Buy Now
                    </button>
                    <div id='alt_container' className="row no-gutters">
                      <p>Alternate Products</p>
                      <div className="col-6 col-md-3"><img key={object.id} src={object.main_product.main_product_svg} /></div>
                      <div className="col-12 col-sm-6 col-md-8">
                        <p className='alt_prod_desc' key={object.id}>{object.bids[2].alternate_product_details.product_name}</p>
                        <div key={object.id} className="alt_price">
                          <img key={object.id} src={object.bids[2].alternate_product_details.online_price_icon} height={22.26} width={22.26}></img>: <strike key={object.id}>Rs:{object.main_product.online_price}</strike>
                          <span>{object.bids[2].alternate_product_details.offer_price}    </span>
                          <button className="Buybtn" type="button">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>


                  </div>

                </div>
              </div>
            </div>

          </>

          )
        })
        console.log(ShowData)
        SetShowData(data)
      })
  }

  useEffect(() => {
    JSONdata()
  }, [])

  return (
    <>
      {ShowData}
    </>
  )
}
