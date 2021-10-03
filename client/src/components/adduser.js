import React, { Component } from 'react'
import Header from './header'
import axios from 'axios'
export default class adduser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            userAdded: false
        };
    }
    render() {
        const addUser = (e) => {
            e.preventDefault()
            console.log(e)
            let that = this
            let firstName = e.target.firstName.value
            let lastName = e.target.lastName.value
            let birthday = e.target.birthday.value
            this.setState({ loader: true })
            axios
                .post("http://localhost/ums-server/addUser.php", {
                    firstName: firstName,
                    lastName: lastName,
                    birthday: birthday,
                })
                .then(function (response) {
                    if (response.data.success === 200) {
                        that.setState({ userAdded: true }, () => {
                            setTimeout(() => {
                                that.props.history.push("/")
                            }, 4000)
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
                    <form onSubmit={(e) => addUser(e)}>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" name="firstName" placeholder="Please Enter First Name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastNAme" className="form-label">Last Name</label>
                            <input type="text" className="form-control" name="lastName" placeholder="Please Enter Last Name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="birthday" className="form-label">Date Of Birth</label>
                            <input type="date" className="form-control" id="birthday" name="birthday" required />
                        </div>
                        <div className="row">
                            <div className="col-auto">
                                <input type="button" value="Cancel" onClick={() => goBack()} className="btn btn-light mb-3" />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3" disabled={this.state.loader ? true : false}>Add</button>
                            </div>
                        </div>
                        {this.state.userAdded &&
                            <div className="alert alert-success" role="alert">
                                You have added a user successfully !!
                            </div>
                        }
                    </form>


                </div>
            </>
        )
    }
}
