import React,{ Component } from "react";
import { connect } from "react-redux";

class userDetail extends Component{
    render(){
        return(
            <div>
                <img src={this.props.users.thumbnail}/>
                <h2>Full Name : {this.props.users.first} {this.props.users.first}</h2>
                <h3>Age : {this.props.users.age}</h3>
                <h3>Description : {this.props.users.description}</h3>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.activeUser
    }
}
export default connect(mapStateToProps)(userDetail);