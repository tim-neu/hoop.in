import React, {Component} from 'react';
import { Link } from 'react-router';
import axios from 'axios';
class Join extends Component {
    constructor (props){
        super(props);
        this.state = {name: '', token: ''}
    }
    handleNameInputChange = (nameEvent) => {
        nameEvent.preventDefault();
        console.log('i was submitted and the event is:',nameEvent.target.value);
        this.setState({name: nameEvent.target.value})
    }
    
    handleCodeInputChange = (codeEvent) => {
        codeEvent.preventDefault();
        console.log('i was submitted and the code is:',codeEvent.target.value);
        this.setState({token: codeEvent.target.value});
    }
    handleSubmit =(submitEvent) => {
        console.log('i was submitted');
        submitEvent.preventDefault();
        var name = this.state.name.trim();
        var code = this.state.token.trim();
        localStorage.setItem("token", code);
        console.log('i was submitted and code and name is:',code,name);
        axios({
            method: 'POST',
            url: '/api/newPlayer',
            data: {
                token: code,
                name: name
            }
        })
        .then(function(resp){
            console.log('the response from a /api/newplayer in join_componentjs is:',resp);
        })
        .catch(function(error){
            console.log(error);
        })
        this.setState({name: '', token: ''});
    };
    render () {
        return (
            <div className = 'text-center'>
                <section><h1>Join Game</h1></section>
                <form onSubmit={this.handleSubmit}>
                    <div className = "form-inline">
                        <input className= "form-control" type='text' value={this.state.name} onChange={this.handleNameInputChange.bind(this)} placeholder='name' required />
                    </div>
                    <div className="form-inline">
                        <input className= "form-control" type='text' value={this.state.token} onChange={this.handleCodeInputChange.bind(this)} placeholder='code' required />
                    </div>
                    <div>
                        <span onClick={this.handleSubmit}><Link to={`room/${this.state.token}`} ><button type="submit">submit</button></Link></span>
                        <button><Link to='/' >back</Link></button>         
                    </div>
                </form>
            </div>
            );
    }
}
export default Join;