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
    }


}