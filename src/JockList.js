import React, {Component} from 'react'
import axios from 'axios'
import uuid from 'uuid/v4';
import Jock from './Jock';
import './JockList.css'

class JockList extends Component{
    static defaultProps = {
        numOfJocks: 10
    }
    constructor(props){
        super(props);
        this.state = {
            jocks: JSON.parse(window.localStorage.getItem('jocks')) || "[]" 
        }
        this.getNewJocks = this.getNewJocks.bind(this)
    }
    async getNewJocks (){
        let jocks = [];
    while(this.props.numOfJocks > jocks.length){
        const jock = await axios.get(
            "https://icanhazdadjoke.com/slack", 
            {headers: {Accept: "application/json"}
            
        })
        const singleJock = jock.data.attachments[0].text;
        jocks.push({jock: singleJock, votes: 0, id: uuid() })
    }
    this.setState({jocks: jocks})
    window.localStorage.setItem("jocks", JSON.stringify(jocks))
    }
    componentDidMount(){
        if(this.state.jocks.length===0){
            this.getNewJocks()
        }
        

    }
    updateState = ()=>{
        window.localStorage.setItem("jocks", JSON.stringify(this.state.jocks))
    }
    handleVote = (id, delta)=>{
        this.setState(st => 
            ({jocks: st.jocks.jocks.map(j => j.id === id ? {...j, votes: j.votes + delta }: j)}),
            this.updateState()
        )
            
            
            
       
    }
    render(){
        return(
            <div className="JockList">
                
                <div className="JockList-sidebar">
                    <h1><span>Dad</span> Jocks</h1>
                    <img className="JockList-Smily" alt="smily"
                    src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' />
                    <button>New Jocks</button>
                </div>

                <div className="JockList-Jockarea">
                    
                    {
                    this.state.jocks.jocks.map(jock => 
                    
                    <Jock key={jock.id} 
                    upVote= {()=>this.handleVote(jock.id, 1)}
                    downVote = {()=>this.handleVote(jock.id, -1)}
                    jock={jock.jock} votes={jock.votes} 
                    />)}

                </div>

            </div>
        )
    }
}
export default JockList;