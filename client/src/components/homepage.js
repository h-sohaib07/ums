import React, { Component } from 'react'
import Header from './header'
import { NavLink } from 'react-router-dom';
import axios from 'axios'

export default class homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            page: 1,
            totalPages: 0
        };
    }
    componentWillMount() {
        this.getPageData(this.state.page)
    }

    getPageData = (pageNumber) => {
        this.setState({ page: pageNumber })
        axios
            .get(`http://localhost/ums-server/getUsers.php?page=${pageNumber}`)
            .then((response) => {
                if (response.data.success === 200) {
                    this.setState({ users: response.data.users, totalPages: response.data.totalPages })
                }
            })
    }
    getAge = (dateString) => {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    deleteUser = (id) => {
        axios
            .post(`http://localhost/ums-server/deleteUser.php`, {
                id: id
            })
            .then((response) => {
                console.log(response.data)
                if (response.data.success === 200) {
                    this.getPageData(this.state.page)
                }
            })

    }
    render() {
        const { totalPages } = this.state
        return (
            <>
                <Header />
                <div className="container mt-25">
                    <NavLink to="/adduser" className="btn btn-primary btn-md right-block">
                        Add User
                    </NavLink>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.length > 0 && this.state.users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.Id}</td>
                                        <td>{user.FirstName}</td>
                                        <td>{user.LastName}</td>
                                        <td>{this.getAge(user.Birthday)}</td>
                                        <td>
                                            <NavLink className='btn btn-info btn-xs'
                                                to={{
                                                    pathname: "/edituser",
                                                    user: user
                                                }}
                                            >Edit</NavLink>
                                        </td>
                                        <td><button className='btn btn-danger btn-xs' onClick={() => this.deleteUser(user.Id)}>Delete</button></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                    <nav aria-label="...">
                        <ul className="pagination justify-content-center">
                            {console.log(totalPages, "totalPages")}
                            {
                                totalPages > 0 && Array(totalPages).fill(null).map((value, index) => (
                                    <li className="page-item">
                                        <button className="page-link" onClick={() => this.getPageData(index + 1)} tabIndex="-1">{index + 1}</button>
                                    </li>
                                ))
                            }

                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}
