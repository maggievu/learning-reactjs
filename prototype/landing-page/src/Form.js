import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userEmail: '',
            userMessage: '',
            userSubscribe: false,
            sentSuccess: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderSuccess = this.renderSuccess.bind(this);
    }

    handleChange(e) {
        const stateName = e.target.name;
        const stateValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [stateName]: stateValue
        });
    }

    // handleChange(e) {
    //     this.setState({
    //         value: e.target.value.toUpperCase()
    //     });
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            sentSuccess: true
        });
        //alert('A name was submitted: ' + this.state.userName + this.state.userEmail + this.state.userMessage + this.state.userSubscribe);
    }

    renderForm() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="userEmail" value={this.state.userEmail} onChange={this.handleChange} />
                </label>
                <label>
                    Message:
                    <textarea name="userMessage" value={this.state.userMessage} onChange={this.handleChange} />
                </label>
                <label>
                    <input type="checkbox" name="userSubscribe" checked={this.state.userSubscribe} onChange={this.handleChange} />
                    Susbcribe to our newsletters!
                </label>
                <input type="submit" value="Send" />
            </form>
        );
    }

    renderSuccess() {
        return (
            <div className="contact-success">
                <p>Name: {this.state.userName}</p>
                <p>Email: {this.state.userEmail}</p>
                <p>Message: {this.state.userMessage}</p>
                <p>I {this.state.userSubscribe ? ' want ' : ' do not want '} to susbcribe to newsletters: </p>
            </div>
        )
    }

    render() {
        return (
            this.state.sentSuccess ? this.renderSuccess() : this.renderForm()
        );
    }
}

export default Form
