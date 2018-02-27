import React from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          onChange={onChange}
          value={value}
          className="form-control">
          <option value="">{defaultOption}</option>
          {options.map(option => <option value={option.value} key={option.value}>{option.text}</option>)}
        </select>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

SelectInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  defaultOption: React.PropTypes.string,
  error: React.PropTypes.string,
  value: React.PropTypes.string,
  options: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default SelectInput;
