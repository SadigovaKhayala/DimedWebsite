import React, { Component } from 'react';

// Import Images
import galleryPic1 from "../../images/gallery/nergizx.png";
import galleryPic5 from "../../images/gallery/raufdr.png";
import galleryPic3 from "../../images/gallery/nabatx.png";
import galleryPic4 from "../../images/gallery/sevdax.png";
import galleryPic2 from "../../images/gallery/sevilx.png";
import galleryPic6 from "../../images/gallery/samirex.png";

class WidgetGallery extends Component{
	render(){
		return(
			<>
				
				<div className="widget widget_gallery gallery-grid-3">
					<h4 className="widget-title">Bizim qaleriyamız</h4>
					
					<ul className="magnific-image">
						<li><img src={galleryPic1} alt=""/></li>
						<li><img src={galleryPic2} alt=""/></li>
						<li><img src={galleryPic3} alt=""/></li>
						<li><img src={galleryPic4} alt=""/></li>
						<li><img src={galleryPic5} alt=""/></li>
						<li><img src={galleryPic6} alt=""/></li>
					</ul>
					
				</div>
				
			</>
		);
	}
}

export default WidgetGallery;