import React from "react";


export class Login extends React.Component{

constructor(props){
    super(props);

    this.state={
        username: '',
        password: '',
        loginErrors: ''
     };
     this.handleSubmit=this.handleSubmit.bind(this);
     this.handleChange=this.handleChange.bind(this);
}
handleChange = (event) => {
    this.setState({
        username: event.target.value
    })
}
handleSubmit = event => {
    alert(`${this.state.username} ${this.state.password}`)
    event.preventDefault()
    }         


render(){
    const {username,password} = this.state;
    return(
        <form onSubmit={this.handleSubmit}>  
        <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
        <div className="form">
           
            <div className="form-group">
               <label htmlFor="username">username</label>
               <input type="text" name="username" placeholder="username"
               value={username}
               onChange={this.handleChange}
               />
               </div>
             
             <div className="form-group">
               <label htmlFor="password">password</label>
               <input type="password" name="password"
                placeholder="password" 
                value={password}
                onChange={this.handleChange}
                />
               </div>    
             </div>
             </div>

             <div className="footer">
                 <button type="button" className="btn">Login</button>
             </div>
             
        </div>
        </form>
       
    )
}
}