import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let { title, discription, imgurl } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ Width: "18rem" }}>
                    <img src={imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <a href="/newDetail" className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem