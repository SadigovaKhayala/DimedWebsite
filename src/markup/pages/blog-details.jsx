import React, {Component, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import db from "./../db"
// Elements
import AuthorProfile from "../elements/author-profile";
import CommentList from "../elements/comment-list";
import CommentRespond from "../elements/comment-respond";
import WidgetTag from "../elements/widget-tag";
import WidgetSearch from "../elements/widget-search";
import WidgetGallery from "../elements/widget-gallery";
import WidgetRecentPosts from "../elements/widget-recent-posts";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import blogDefaultPic1 from "../../images/blog/default/pic1.jpg";
import testPic3 from "../../images/testimonials/pic3.jpg";
import galleryPic2 from "../../images/gallery/pic2.jpg";
import galleryPic5 from "../../images/gallery/pic5.jpg";



// posts content




const BlogDetails = () => {
	  const { id } = useParams(); 
  const blogElement = db.find((element) => element.id === id);
    const facebookShareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://dimedmedicalcenter.com/${blogElement.title}`)}`;
 const title = blogElement.title; 
const linkedinShareLink =`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://dimedmedicalcenter.com/${blogElement.title}`)}&title=${encodeURIComponent(title)}`
   const twitterShareLink = `https://twitter.com/share?text=${encodeURIComponent(blogElement.title)}&url=${encodeURIComponent(`https://dimedmedicalcenter.com/${blogElement.title}`)}`;

return (
	<div className="page-content bg-white">
					
					<div className="banner-wraper">
						<div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
							<div className="container">
								<div className="page-banner-entry text-center">
									<h1>Son xəbərlər</h1>
									<nav aria-label="breadcrumb" className="breadcrumb-row">
										<ul className="breadcrumb">
											<li className="breadcrumb-item"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</Link></li>
											<li className="breadcrumb-item active" aria-current="page">Blog Details</li>
										</ul>
									</nav>
								</div>
							</div>
							<img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
							<img className="pt-img2 animate2" src={circleDots} alt=""/>
							<img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
						</div>
					</div>
					
					<section className="section-area section-sp1 bg-white">
						<div className="container">
							<div className="row">
								<div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
									<div className="blog-card blog-single">
										<div className="post-media">
											<img src={blogElement.thumb} alt=""/>
										</div>
										<div className="info-bx">
										
											<div className="ttr-post-title">
												<h2 className="post-title">{blogElement.title}</h2>
											</div>
											<div className="ttr-post-text">
												<p>{blogElement.about}</p>
											{blogElement.li1 && 	<ul>
													<li>{blogElement.li1}</li>
													<li>{blogElement.li2}</li>
													<li>{blogElement.li3}</li>
													<li>{blogElement.li4}</li>
													<li>{blogElement.li5}</li>
												</ul>} 
												<blockquote className="wp-block-quote">
													<p>{blogElement.quate}</p>
												</blockquote>
<p>{blogElement.about2}</p>												<ul className="wp-block-gallery columns-6 is-cropped">
													<li className="blocks-gallery-item"><img alt="" src={blogElement.gallery1}/></li>
													<li className="blocks-gallery-item"><img alt="" src={blogElement.gallery2}/></li>
												</ul>
											</div>
											<div className="ttr-post-footer">
											
												<div className="share-post ml-auto">
													<ul className="social-media mb-0">
														<li><strong>Paylaşmaq üçün:</strong></li>
														<li><a rel="noreferrer" target="_blank" href={facebookShareLink}><i className="fab fa-facebook-f"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href={linkedinShareLink}><i className="fab fa-linkedin-in"></i></a></li>
														<li><a rel="noreferrer" target="_blank" href={twitterShareLink}><i className="fab fa-twitter"></i></a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									
						
								</div>
								<div className="col-md-12 col-lg-5 col-xl-4 mb-30">
									<aside className="side-bar sticky-top aside-bx">
										
								
										
										<WidgetRecentPosts />
										
										<WidgetGallery />
										
										<WidgetTag />
										
									</aside>
								</div>
							</div>
						</div>
					</section>
					
				</div>
  )
}

export default BlogDetails