import React from 'react';
import axios from 'axios';
import GiphyImage from "./GiphyImage";

const apiUrl = "https://api.giphy.com/v1/gifs/random?api_key=P8FdQGToYGOjUWXkFQ9Tl3ciojtEMtW1&tag=cat&rating=R";

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
                <button onClick={this._getGiphy}>heres a button</button><br />
                {
                    this.state.giphies.map(giphy => (<GiphyImage giphy={giphy} />))
                }
            </React.Fragment>
        );
    }

    _getGiphy = () => {
        console.log("clicks been clicked");
        axios.get(apiUrl)
            .then(response =>{
                console.log(response.data.data.images.downsized_large.url);
                this.setState({
                    giphies:[response.data.data.images.downsized_large, ...this.state.giphies]
                });
            })
            .catch(err => {console.log("no animated gif today.")});
    };
}