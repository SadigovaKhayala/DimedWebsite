import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

// Import Images
import testShape from '../../images/testimonials/shape.png'
import sevilx from '../../images/team/sevilx.png'
import raufdr from '../../images/team/raufdr.png'
import nabatx from '../../images/team/nabatx.png'
import nazax from '../../images/team/nazax.png'
import sevdax from '../../images/team/sevdax.png'
import nergizx from '../../images/team/nergizx.png'
import samirex from '../../images/team/samirex.png'
import agadr from '../../images/team/agadr.png'
import plusOrange from '../../images/shap/plus-orange.png'
import squareBlue from '../../images/shap/square-blue.png'
import circleDots from '../../images/shap/circle-dots.png'
import circleOrange2 from '../../images/shap/circle-orange-2.png'

class testimonialSection extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <>
        <section className="section-area section-sp3 testimonial-wraper">
          <div className="container">
            <div className="heading-bx text-center">
              <h6 className="title-ext text-secondary">Ziyarətçi rəyləri </h6>
              <h2 className="title m-b0">
                Pasinetlərimiz bizim haqqımızda <br />
                nə düşünür.
              </h2>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 text-center">
                <div className="thumb-wraper">
                  <img className="bg-img" src={testShape} alt="" />
                  <ul>
                    <li data-member="1">
                      <Link to="#">
                        <img src={sevdax} alt="" />
                      </Link>
                    </li>
                    <li data-member="2">
                      <Link to="#">
                        <img src={raufdr} alt="" />
                      </Link>
                    </li>
                    <li data-member="3">
                      <Link to="#">
                        <img src={sevilx} alt="" />
                      </Link>
                    </li>
                    <li data-member="4">
                      <Link to="#">
                        <img src={nabatx} alt="" />
                      </Link>
                    </li>
                    <li data-member="5">
                      <Link to="#">
                        <img src={nergizx} alt="" />
                      </Link>
                    </li>
                    <li data-member="6">
                      <Link to="#">
                        <img src={nazax} alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <Slider {...settings} className="testimonial-slide">
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">

                        <p>
                        Rauf dr-a sozsuz təşəkkürlərimi bildirirəm.Bətnimdəki övladımı  yalnış diaqnoz nəticəsində  itirəcəkdim. Rauf dr. düzgün diaqnozu nəticəsində artıq övladımı tam sağlam qucağıma almnışam.
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">Rahilə E.</h5>
                        <p>pasient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                Rauf dr. , Nərgiz x. nə yaxşı ki, sizin kimi savadlı həkimlərimiz var. 

                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">Nergiz A. </h5>
                        <p>Pasient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                       Artıq çəkidən uzun müddətdir əziyət çəkirdim. Düzgün diaqnoz doğurdan da öz sözünü deyir. Biopendisoment sayəsində 
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">Aysel V.</h5>
                        <p>Pasient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="testimonial-bx">
                      <div className="testimonial-content">
                        <p>
                        Nabatxanım dr. düzgün diaqnozu sayəsində nəhəyət ki, revmotizma ağrılarından qurtuldum. Sizə sonsuz təşəkkürümü  bildirirəm. 
                        </p>
                      </div>
                      <div className="client-info">
                        <h5 className="name">Natiq Q.</h5>
                        <p>Pasient</p>
                      </div>
                      <div className="quote-icon">
                        <i className="fas fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
         
                </Slider>
              </div>
            </div>
          </div>
          <img className="pt-img1 animate1" src={plusOrange} alt="" />
          <img className="pt-img2 animate2" src={squareBlue} alt="" />
          <img className="pt-img3 animate3" src={circleDots} alt="" />
          <img className="pt-img4 animate4" src={circleOrange2} alt="" />
        </section>
      </>
    )
  }
}

export default testimonialSection
