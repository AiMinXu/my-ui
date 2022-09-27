import React from "react";
import PropTypes from "prop-types";
import StyledLabelContainer from "./style";
import Text from "components/Text";

//存放label的容器
//接收label属性接收label标签
function LabelContainer({ children, label, ...rest }) {
  return (
    <StyledLabelContainer {...rest}>
      {label && <Text style={{ marginBottom: "8px" }}>{label}: </Text>}
      {children}
    </StyledLabelContainer>
  );
}

LabelContainer.propTypes = {
  children: PropTypes.any,
};

export default LabelContainer;
