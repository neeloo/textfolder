import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, discription, imgurl, newsUrl } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ Width: "18rem" }}>
                    <img src={!imgurl ? "https://cdn.zeebiz.com/sites/default/files/2023/07/25/252927-m6mmxfkahnkffjoqx7y3knvl3i.jpg" : imgurl}
                        className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem