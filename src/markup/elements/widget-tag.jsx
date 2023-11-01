import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class widgetTag extends Component{
	render(){
		return(
			<>
				<div className="widget widget_tag_cloud">
					<h4 className="widget-title">Xidmətlərimiz</h4>
					<div className="tagcloud"> 
						<Link to="/laboratory">Laboratoriya</Link> 
						<Link to="/usm">Radiologiya</Link> 
						<Link to="/dermatology">Dermatologiya</Link> 
						<Link to="/physiotherapy">Fizioterapiya</Link> 
						<Link to="/gynecology">Ginekologiya</Link> 
						<Link to="/dietology">Dietologiya</Link>
						<Link to="/therapy">Terapevt</Link> 
						<Link to="/psychologist">Psixologiya</Link> 
						<Link to="/acupunctura">Akupunktura</Link>
					</div>
				</div>
				
			</>
		);
	}
}

export default widgetTag;