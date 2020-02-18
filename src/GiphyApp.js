import React from 'react';
import axios from 'axios';

const apiUrl = "https://api.giphy.com/v1/gifs/search?api_key=P8FdQGToYGOjUWXkFQ9Tl3ciojtEMtW1&q=laser&limit=25&offset=0&rating=R&lang=en";

export default class GiphyApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            giphies:[]
        }
    }

    render(){
        return (
            <React.Fragment>
                <button onClick={this._getGiphy}>heres a button</button>
            </React.Fragment>
        );
    }

    _getGiphy = () => {
        console.log("clicks been clicked");
        axios.get(apiUrl)
            .then(response =>{
                console.log(response.data.data[0].images.downsized_large.url);
                this.setState({
                    giphies:[...this.state.giphies, response.data.data[0].images.downsized_large]
                });
            })
            .catch(err => {console.log("no animated gif today.")});
    };
}