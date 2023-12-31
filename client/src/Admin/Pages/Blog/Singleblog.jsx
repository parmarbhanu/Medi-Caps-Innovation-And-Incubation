import axios from 'axios';
import React from 'react'
import EditBlog from './EditBlog';

export default function Singleblog(props) {
  const deleteblg=async ()=>{
    await axios.get(`/blog/deleteblog/${props.id}`).then((res) => {  alert("Deleted Sucessfully") });
  }
  return (
    <>
      <div className="blog-box">
        <div className="blog-img">
          <img src={props.images} alt="blog-img" />
        </div>
        <div className="blog-content">
          <div className="row1">
            <h3 className="title">{props.title}</h3>
            <p className="blogtxt">{props.description}</p>
          </div>
          <div className='row-2'>
            <span className="publisher">{props.authername}</span> 
            <span className="date">{props.date}</span>
          </div>
          <div className="btn-section row-3">          
            <button className='delete-btn'onClick={()=>{deleteblg()}}><i className="fa fa-trash" aria-hidden="true"/></button>
          </div> 
        </div>
      </div>
      <EditBlog props={props}/>
    </>
  )
}
