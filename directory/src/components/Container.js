import API from "../utils/Api";
import React, { Component } from "react";
import Search from "./Search";
import TableData from "./TableData";

class Container extends Component {
    state = {
        search: "",
        employees: [],
        filteredEmployees: [],
        order: ""
    }

    componentDidMount() {
        API.getUsers().then(res => this.setState({
            employees: res.data.results,
            filteredEmployees: res.data.results
        })).catch(error => console.log(error))
    }

    sortByName = () => {
        const filtered = this.state.filteredEmployees;
        if (this.state.order === "asc") {
            const sorted = filtered.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
            console.log(sorted);
            this.setState({
                filteredEmployees: sorted,
                order: "desc"
            })
        } else {
            const sorted = filtered.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
            console.log(sorted);
            this.setState({
                filteredEmployees: sorted,
                order: "asc"
            })
        }
    };

    handleInputChange = event => {
        const employees = this.state.employees;
        const UserInput = event.target.value;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1)

        this.setState({
            filteredEmployees
        })
    };

    employeeSearch = event => {
        event.preventDefault();
        if (!this.state.search) {
            alert("Please enter a valid name")
        }
        const { employees, search } = this.state;
        const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().inludes(search.toLowerCase()));

        this.setState({
            filteredEmployees
        });
    }

    render() {
        return (
            <div>
                <SearchBox
                    employee={this.state.employees}
                    handleSearch={this.handleSearch}
                    handleInputChange={this.ahndleInputChange} />
                <TableDate results={this.state.filteredEmployees}
                    sortByName={this.sortByName} />
            </div>
        )
    }

}

export default Container;