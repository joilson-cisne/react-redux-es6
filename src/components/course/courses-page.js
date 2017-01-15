import React from 'react';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {title: ''},
        };

        this.OnTitleChange = this.OnTitleChange.bind(this);
        this.OnClickSave = this.OnClickSave.bind(this);
    }


    OnTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    OnClickSave(event) {
        alert(`Saving ${this.state.course.title}`);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Courses</h2>
                <input
                    type="text"
                    onChange={this.OnTitleChange}
                    value={this.state.course.title}/>
                <input
                    type="submit"
                    onClick={this.OnClickSave}
                    value="save"/>
            </div>
        );
    }
}

export default CoursesPage;
