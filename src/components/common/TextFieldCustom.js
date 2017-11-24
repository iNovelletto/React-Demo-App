import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

/**
 * TextField input with label stylized with Material-UI
 * @param {string} id - The id of the input element.
 * @param {string} label - The label content.
 * @param {function(event: object) => void} onChange - Callback fired when the value is changed.
 * @param {string | number} value - The value of the Input element, required for a controlled component.
 * @param {boolean} autoFocus - If true, the input will be focused during the first mount.
 * @param {string} defaultValue - The default value of the Input element.
 * @param {boolean} disabled - If true, the input will be disabled.
 * @param {boolean} error - If true, the label will be displayed in an error state.
 * @param {boolean} fullWidth - If true, the input will take up the full width of its container.
 * @param {boolean} required - 	If true, the label is displayed as required.
 */
const TextFieldCustom = ({
  id,
  label,
  onChange,
  value,
  autoFocus = false,
  defaultValue = '',
  disabled = false,
  error= false,
  fullWidth=false,
  required=false
  }) => {
  return (
    <TextField
      autoComplete={id}
      id={id}
      label={label}
      onChange={onChange}
      value={value}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      required={required}
    />
  );
};

TextFieldCustom.propTypes = {
  id: PropTypes.bool.isRequired,
  label: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoFocus: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool
};


export default TextFieldCustom;
