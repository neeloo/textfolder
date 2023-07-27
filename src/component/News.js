import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    // articles = [
    //     {
    //         "source": {
    //             "id": "bbc-sport",
    //             "name": "BBC Sport"
    //         },
    //         "author": null,
    //         "title": "Why does rain stop cricket and what can be done?",
    //         "description": "Why was there no reserve day at the Ashes Test? And what else can be done when it rains at the cricket?",
    //         "url": "http://www.bbc.co.uk/sport/cricket/66289926",
    //         "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/144FF/production/_130499138_gettyimages-1565362039.jpg",
    //         "publishedAt": "2023-07-24T14:37:23.7610497Z",
    //         "content": "Just 30 overs were possible on the final two days of the fourth Ashes Test at Old Trafford\r\nAfter two days of Manchester rain you would think some glorious Monday sunshine would be a welcome sight.\r\n… [+6670 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //         "publishedAt": "2020-04-27T11:41:47Z",
    //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //         "publishedAt": "2020-03-30T15:26:05Z",
    //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    // ]

    constructor() {
        super();
        this.state = {
            //articles:this.articles;
            articles: [],
            loading: false,
            page: 1

        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e7c9a3e803474bc19df75800c865e402&page=1&pageSize=
                     ${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let pdata = await data.json();
        this.setState({
            articles: pdata.articles,
            totalResults: pdata.totalResults
            , loading: false
        })
    }

    handlePreclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e7c9a3e803474bc19df75800c865e402&page=
        ${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let pdata = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: pdata.articles
            , laoding: false
        })

    }

    handleNextclick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e7c9a3e803474bc19df75800c865e402&page=
              ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let pdata = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: pdata.articles
                , loading: false
            })
        }
    }

//without using spinner use that
    // handleNextclick = async () => {              
    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    //     }
    //     else {
    //         let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e7c9a3e803474bc19df75800c865e402&page=
    //           ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //         let data = await fetch(url);
    //         let pdata = await data.json();
    //         console.log(pdata);
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: pdata.articles
    //         })
    //     }
    // }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewMonkey - Top headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {/* {!this.state.loading && this.state.articles.map((element) => { */}
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>

                            {/* use find constent of words used in articles using slice() */}
                            {/* <NewsItem  title={element.title?element.title.slice(0,35):""} 
                            discription={element.description ?element.description.slice(0,45):""}
                                imgurl={element.urlToImage}  newsUrl={element.url}/> */}

                            <NewsItem title={element.title ? element.title : ""}
                                discription={element.description ? element.description : ""}
                                imgurl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreclick}> &larr;Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
                        type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}

export default News