import React, { Component,useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import content from './../db'; 


// Import Images
import lingBg2 from "../../images/background/line-bg2.png"
import animate1 from "../../images/shap/trangle-orange.png"
import animate2 from "../../images/shap/square-dots-orange.png"
import animateRotate from "../../images/shap/line-circle-blue.png"
import animateWave from "../../images/shap/wave-blue.png"


// 
const settings = {
	dots: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1191,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
			}
		},
	],
};

// Team Content




//redux dersden 





const NewsItem = ({ item }) => {

	return(
		<div className="slider-item">
			<div className="blog-card"  >
				<div className="post-media">
					<Link to={`/blog-details/${item.id}`}><img src={item.galleryimg} alt=""/></Link>
				</div>
				<div className="post-info">
					<ul className="post-meta">
				
						<li className="date"><i className="far fa-calendar-alt"></i>{item.date}</li>
					</ul>
					<h5 className="post-title"><Link to={`/blog-details/${item.id}`}>{item.title}</Link></h5>		
					<Link to={`/blog-details/${item.id}`} className="btn btn-outline-primary btn-sm">Ətraflı <i className="btn-icon-bx fas fa-chevron-right"></i></Link>
	
				</div>
			</div>		
			
		
				</div>


			

	);
};




class LatestNewsSection extends Component{
	
	render(count){
	
		return(
			<>		
			
				<section className="section-area section-sp1 blog-area" style={{backgroundImage: "url("+lingBg2+")", backgroundPosition: "center", backgroundSize: "cover",}}>
					<div className="container">
						<div className="heading-bx text-center">
							<h6 className="title-ext text-secondary">Son xəbərlər </h6>
							<h2 className="title">Klinikamızda baş verən yeniliklər </h2>
						</div>
						
						<Slider {...settings} className="tt-slider blog-slide slider-sp0 slick-arrow-none">
							{content.map((item) => (
								<NewsItem key={item.title} item={item} />
							
							))}
						</Slider>
						
					</div>
					
					<img className="pt-img1 animate1" src={animate1} alt=""/>
					<img className="pt-img2 animate2" src={animate2} alt=""/>
					<img className="pt-img3 animate-rotate" src={animateRotate} alt=""/>
					<img className="pt-img4 animate-wave" src={animateWave} alt=""/>
				</section>
				
			</>
		);
	}
}

export default LatestNewsSection;

