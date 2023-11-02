import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import db from './../db'

// Import Images


class WidgetRecentPosts extends Component{
	render(){
		return(
			<>
				<div className="widget recent-posts-entry">
					<h4 className="widget-title">Ən son paylaşımlar </h4>
					<div className="widget-post-bx">
						    {db.map((post, index) => (   <div className="widget-post clearfix" key={index}>
          <div className="ttr-post-media">
            <img src={post.galleryimg} width="200" height="143" alt={post.title} />
          </div>
          <div className="ttr-post-info">
            <div className="ttr-post-header">
              <h6 className="post-title">
                <Link to={`/blog-details/${post.id}`}>{post.title}</Link>
              </h6>
            </div>
          </div>
        </div>
      ))}

						{/* <div className="widget-post clearfix">
							<div className="ttr-post-media"> <img src={recentBlogImg1} width="200" height="143" alt=""/> </div>
							<div className="ttr-post-info">
								<div className="ttr-post-header">
									<h6 className="post-title"><Link to="/blog-details">Precious Tips To Help ssdxYou Get Better.</Link></h6>
								</div>
								<ul className="post-meta">
									<li className="date"><i className="far fa-calendar-alt"></i> 21 July 2021</li>
								</ul>
							</div>
						</div> */}
			
					</div>
				</div>
				
			</>
		);
	}
}

export default WidgetRecentPosts;