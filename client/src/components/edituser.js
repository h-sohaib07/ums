import React, { Component } from 'react'
import Header from './header'
import axios from 'axios'

export default class adduser extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = {
            loader: false,
            firstName: "",
            lastName: "",
            birthday: ""
        };
    }
    componentWillMount() {
        if (!this.props.location.user) {
            this.props.history.push("/")
        } else {
            this.setState({
                firstName: this.props.location.user.FirstName,
                lastName: this.props.location.user.LastName,
                birthday: this.props.location.user.Birthday.split(' ')[0]
            })
        }
    }
    componentDidMount() {
        console.log(this.state.birthday)
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    render() {
        const editUser = (e) => {
            e.preventDefault()
            console.log(e)
            let that = this
            let firstName = e.target.firstName.value
            let lastName = e.target.lastName.value
            let birthday = e.target.birthday.value
            this.setState({ loader: true })
            axios
                .post("http://localhost/ums-server/updateUser.php", {
                    firstName: firstName,
                    lastName: lastName,
                    birthday: birthday,
                    id: this.props.location.user.Id
                })
                .then(function (response) {
                    if (response.data.success === 200) {
                        that.setState({ userAdded: true }, () => {
                            setTimeout(() => {
                                that.props.history.push("/")
                            }, 3000)
                        })
                    }
                })
        }
        const goBack = () => {
            this.props.history.push("/")
        }
        return (
            <>
                <Header />

                <div className="container mt-25">
                    <form onSubmit={(e) => editUser(e)}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" onChange={(e) => this.handleInputChange(e)} className="form-control" name="firstName" value={this.state.firstName} id="firstName" placeholder="Please Enter First Name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" onChange={(e) => this.handleInputChange(e)} className="form-control" name="lastName" value={this.state.lastName} id="lastName" placeholder="Please Enter Last Name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="birthday" className="form-label">Date Of Birth</label>
                            <input type="date" onChange={(e) => this.handleInputChange(e)} className="form-control" id="birthday" name="birthday" value={this.state.birthday} required />
                        </div>
                        <div className="row">
                            <div className="col-auto">
                                <input type="button" value="Cancel" onClick={() => goBack()} className="btn btn-light mb-3" />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3" disabled={this.state.loader ? true : false}>Edit</button>
                            </div>
                        </div>
                        {this.state.userAdded &&
                            <div className="alert alert-success" role="alert">
                                You have edit a user successfully !!
                            </div>
                        }
                    </form>
                </div>

            </>
        )
    }
}
