import React, { Component } from 'react'
import Header from './header'

export default class adduser extends Component {
    render() {
        const editUser = (e) => {
            e.preventDefault()
            console.log(e)

            let firstName = e.target.firstName.value
            let lastName = e.target.lastName.value
            let birthday = e.target.birthday.value
            this.setState({ loader: true }, () => {
                this.setState({ userAdded: true })
                setTimeout(() => {
                    this.props.history.push("/")
                }, 5000)
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
                            <label htmlfor="firstName" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="Please Enter First Name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlfor="lastNAme" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastNAme" placeholder="Please Enter Last Name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlfor="birthday" className="form-label">Date Of Birth</label>
                            <input type="date" className="form-control" id="birthday" name="birthday" required />
                        </div>
                        <div className="row">
                            <div className="col-auto">
                                <input type="button" value="Cancel" onClick={() => goBack()} className="btn btn-light mb-3" />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3">Edit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
