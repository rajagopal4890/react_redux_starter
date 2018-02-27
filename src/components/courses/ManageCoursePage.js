import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseAction';
import CourseForm from "./CourseForm";
import * as toastr from 'toastr';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: Object.assign({}, props.course),
      errors: {},
      loading: props.loading
    };
    this.updateCourse = this.updateCourse.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.course.id !== nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
    if(this.props.loading !== nextProps.loading) {
      this.setState({loading: nextProps.loading});
    }
  }

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.saveCourse(this.state.course)
      .then(() => {
        toastr.success('Course Saved');
        this.redirect();
      }).catch(error => toastr.error(error));
  }

  redirect() {
    this.context.router.push('/courses');
  }

  updateCourse(event) {
    let course = Object.assign({}, this.state.course);
    let field = event.target.name;
    course[field] = event.target.value;
    this.setState({course: course});
  }

  render() {
    return (
      <CourseForm
        course={this.state.course}
        allAuthors={this.props.authors}
        errors={this.state.errors}
        onChange={this.updateCourse}
        onSave={this.saveCourse}
        loading={this.state.loading}
      />
    );
  }
}

ManageCoursePage.propTypes = {
  course: React.PropTypes.object.isRequired,
  authors: React.PropTypes.array,
  actions: React.PropTypes.object.isRequired,
  loading: React.PropTypes.bool.isRequired
};

ManageCoursePage.contextTypes = {
  router: React.PropTypes.object
};

function getCourse(courses, courseId) {
  const coursesFound = courses.filter(course => course.id == courseId);
  return coursesFound? coursesFound[0] : null;
}

function mapStateToProps(state, ownProps) {
  let course = {};
  let courseId = ownProps.params.id;
  if (courseId && state.courses.length > 0) {
    course = getCourse(state.courses, courseId);
  }
  else
    course = {id: "", title: "", watchHref: "", authorId: "", length: "", category: ""};
  let formattedAuthors = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  return {
    course: course,
    authors: formattedAuthors,
    loading: state.apiCalls > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
