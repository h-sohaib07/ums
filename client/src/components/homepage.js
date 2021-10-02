import React, { Component } from 'react'
import Header from './header'
import { NavLink } from 'react-router-dom';
export default class homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        let data = [
            {
                id: "1",
                firstName: "Sohaib",
                lastName: "Hassan",
                DOB: "15-02-1996"
            },
            {
                id: "2",
                firstName: "Jon",
                lastName: "Doe",
                DOB: "15-02-2001"
            },
            {
                id: "3",
                firstName: "Steven",
                lastName: "Haws",
                DOB: "15-02-1976"
            }
        ]
        this.setState({ users: data })
    }
    getAge = (DOB) => {

    }
    deleteUser = (id) => {
        console.log(id)
        let users = this.state.users.filter((user, index) => (
            user.id !== id
        ))
        this.setState({ users: users })
    }
    render() {
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
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.DOB}</td>
                                        <td><NavLink className='btn btn-info btn-xs' to="/edituser">Edit</NavLink></td>
                                        <td><button className='btn btn-danger btn-xs' onClick={() => this.deleteUser(user.id)}>Delete</button></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                    <nav aria-label="...">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                                <NavLink className="page-link" to="#" tabIndex="-1">1</NavLink>
                            </li>
                            <li className="page-item">
                                <NavLink className="page-link" to="#">2</NavLink>
                            </li>
                            <li className="page-item">
                                <NavLink className="page-link" to="#">3</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}
