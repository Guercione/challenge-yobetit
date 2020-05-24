import React from "react";
import PropTypes from "prop-types";

import TextField from "components/inputs/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const TextFieldAutocomplete = ({
  name,
  label,
  loading,
  options,
  onChange,
  optionKey,
  optionImageKey,
  "data-testid": dataTestid,
  ...rest
}) => {
  const renderTextFieldContent = (option) => (
    <React.Fragment>
      {optionImageKey && (
        <img
          alt={option[optionKey]}
          src={option[optionImageKey]}
          width="20px"
          style={{ marginRight: 5 }}
        />
      )}
      {option[optionKey]}
    </React.Fragment>
  );

  return (
    <Autocomplete
      id={"autocomplete-" + (name || label)}
      name={name || label}
      style={{ width: "100%" }}
      options={options}
      loading={loading}
      onChange={onChange}
      getOptionLabel={(option) => option[optionKey]}
      renderOption={renderTextFieldContent}
      noOptionsText="No item found"
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          name={name || label}
          variant="outlined"
          size="small"
          inputProps={{
            ...params.inputProps,
          }}
          {...rest}
        />
      )}
    />
  );
};

TextFieldAutocomplete.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  "data-testid": PropTypes.string,
  optionImageKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.array.isRequired,
  optionKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

TextFieldAutocomplete.defaultProps = {
  name: "",
  label: "",
  loading: false,
  onChange: () => {},
  optionImageKey: "",
  "data-testid": "",
};

export default TextFieldAutocomplete;
