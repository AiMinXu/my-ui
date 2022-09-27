import React from "react";
import PropTypes from "prop-types";
import StyledRadio, { RadioButton, Circle, StyledRadioGroup } from "./style";
import LabelContainer from "components/LabelContainer";
//name属性，互斥
function Radio({ name, children, ...rest }) {
  return (
    <StyledRadio {...rest}>
      {children}
      <RadioButton name={name} />
      {/* 自定义按钮 */}
      <Circle />
    </StyledRadio>
  );
}

//显示整个单选按钮组的label
function RadioGroup({ label, children, ...rest }) {
  return (
    <LabelContainer label={label}>
      <StyledRadioGroup {...rest}>{children}</StyledRadioGroup>
    </LabelContainer>
  );
}

Radio.Group = RadioGroup;

Radio.propTypes = {
  name: PropTypes.string,
  children: PropTypes.any,
};

RadioGroup.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
};

export default Radio;
