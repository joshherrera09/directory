import React from 'react';

function Search(props) {
    return (
        <div className="container-fluid">
            <header className="z-depth=3 col s12">
                <div className="row">
                    <div className="col s6">
                        <h4 className="right-align headerText">Employee Directory</h4>
                    </div>
                    <div className="col s6 inputAndButton right-align">
                        <input  
                            onChange={props.handleInputchange}
                            value={props.value}
                            id="employees"
                            type="text"
                            name="search"
                            list="employee"
                            className="inputBox"
                            placeholder="Search for employee" />
                    </div>
                    <div className="col m4">
                        <button type="submit"
                        value=""
                        className="btn z=depth-2 waves-effect searchBtn"
                        onClick={props.handleSearch} >Search</button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Search;