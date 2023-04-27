import React from 'react';
import { StyledSelect } from './Select.style';

const Select = ({ options, ...props }) => {
  return (
    <StyledSelect {...props}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;