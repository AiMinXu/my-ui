import React from "react";
import PropTypes from "prop-types";
import StyledParagraph from "./style";

//ellipsis单行文本超长是否显示
function Paragraph({ children, ellipsis, ...rest }) {
  return (
    //as="p"利用styled-component的as属性将属性设为文本
    <StyledParagraph as="p" ellipsis={ellipsis} {...rest}>
      {children}
    </StyledParagraph>
  );
}

Paragraph.propTypes = {
  children: PropTypes.any,
  children: PropTypes.any,
  ellipsis: PropTypes.bool,

  // 设置段落的类型和size属性
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf([
    "xxsmall",
    "xsmall",
    "small",
    "normal",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
  ]),
};

export default Paragraph;
