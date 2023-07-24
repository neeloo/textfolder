import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    article = []

    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>NewMonky - Top headlines</h2>
                <div className="row">

                    <div className="col-md-4">
                        <NewsItem title="myTitle" discription="myDres"
                            imgurl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" />
                    </div>

                    <div className="col-md-4">
                        <NewsItem title="myTitle" discription="myDres"
                        // imgurl="https://static.independent.co.uk/2023/07/23/11/SEI165161450.jpg?quality=75&width=1200&auto=webp"
                        />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" discription="myDres"
                        // imgurl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" 
                        />
                    </div>
                </div>

                {/* <div className="row">

                    <div className="col-md-4">
                        <NewsItem title="myTitle" discription="myDres" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" discription="myDres" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" discription="myDres" />
                    </div>

                </div> */}



            </div>
        )
    }
}

export default News