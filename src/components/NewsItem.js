import React, { Component } from 'react'

export class NewsItem extends Component {
 
  
  render() {

    let {title, description, imageUrl, url,author, date}= this.props
    return (


      <div className="my-3">
        <div className="card" >
        <img src={imageUrl?imageUrl:"https://i.ytimg.com/vi/W2biNcRiiM8/maxresdefault.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toLocaleString()}</small></p>
            <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm" style={{color:'white', backgroundColor:'#27445C'}}>Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem