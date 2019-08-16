import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }
    componentDidMount() {
        this.parseQueryParams()
    }
    componentDidUpdate() {
        this.parseQueryParams()
    }
    parseQueryParams() {
        // extracting query params
        const query = new URLSearchParams(this.props.location.search);
        // Loop the Param entries, set state to title (which is [1] in object)
        for (let param of query.entries()) {
            // To prevent infinite loop, if title is NOT same as next param[1] then setState
            if(this.state.courseTitle !== param[1]) {
                this.setState({courseTitle: param[1]});
            }
        }
    }
    render () {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;