import React, {Component} from 'react'
import './Jock.css';

class Jock extends Component{
    
    
    getColor = ()=>{
        const {votes} = this.props;
        if(votes >= 15){
            return 'rgb(97, 245, 97)'
        }else if(votes >= 12){
            return 'rgb(128, 240, 206)'
        }else if(votes >= 9){
            return 'rgb(129, 128, 240)'
        }else if(votes >= 6){
            return 'rgb(97, 217, 238)'
        }else if(votes >= 3){
            return 'rgb(232, 235, 28)'
        }else if(votes >=0){
            return 'rgb(143, 136, 240)'
        }else {
            return 'red'
        }
    }
    getEmoji = ()=>{
        const {votes} = this.props;
        if(votes >=15){
            return 'em em-rolling_on_the_floor_laughing'
        }else if(votes >= 12){
            return 'em em-joy'
        }else if(votes >= 9 ){
            return 'em em-smile'
        }else if( votes >= 6 ){
            return 'em em-smiley'
        }else if(votes >= 3){
            return 'em em-slightly_smiling_face'
        }else if(votes >= 0){
            return 'em em-neutral_face'
        }else{
            return 'em em-hankey'
        }
    }
    render(){
        return(
            <div className="Jock">
                <div className="Jock-buttons">
                    <i className="fas fa-arrow-up" onClick={this.props.upVote} ></i>
                    <span style={{borderColor: this.getColor()}} className="Jock-votes">{this.props.votes}</span>
                    <i className="fas fa-arrow-down" onClick={this.props.downVote}></i>
                </div>
                <div className ="Jock-text">
                    {this.props.jock}
                    
                </div>
                <div className="Jock-emoji">
                <i className={this.getEmoji()} aria-label="ROLLING ON THE FLOOR LAUGHING"></i>
                </div>
            </div>
        )
    }
}
export default Jock;