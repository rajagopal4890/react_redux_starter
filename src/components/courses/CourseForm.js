import React from 'react';
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CourseForm = ({course, allAuthors, onChange, onSave, loading, errors}) => {
  return (
    <form>
      <h1>Manage Courses</h1>
      <TextInput
        name="title"
        value={course.title}
        onChange={onChange}
        label="Title"
        error={errors.title}
      />
      <SelectInput
      label="Author"
      onChange={onChange}
      name="authorId"
      options={allAuthors}
      value={course.authorId}
      error={errors.authorId}
      defaultOption="Select Author"
      />
      <TextInput
        name="category"
        value={course.category}
        onChange={onChange}
        label="Category"
        error={errors.category}
      />
      <TextInput
        name="length"
        value={course.length}
        onChange={onChange}
        label="Length"
        error={errors.length}
      />
      <input
        type="submit"
        onClick={onSave}
        value={loading ? "saving" : "save"}
        className="btn btn-primary"
        disabled={loading}/>
    </form>
  );
};

CourseForm.propTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CourseForm;
