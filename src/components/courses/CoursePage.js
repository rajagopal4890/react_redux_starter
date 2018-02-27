import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseAction';
import {bindActionCreators} from 'redux';
import CourseList from "./CourseList";
import {browserHistory} from "react-router";

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToCourseForm = this.redirectToCourseForm.bind(this);
  }

  redirectToCourseForm(event) {
    browserHistory.push('/course');
  }

  render() {
    const {courses} = this.props;
    return (
      <div className="jumbotron">
        <h1>Courses</h1>
        <input className="btn btn-primary" type="submit" onClick={this.redirectToCourseForm} value="Add Course" />
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
