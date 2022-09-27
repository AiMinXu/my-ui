import React from "react";
import PropTypes from "prop-types";
import StyledBadge, { Count } from "./style";

/*
  可配置选项：
  children,子元素
  show = false,是否显示
  count = 0,未读数
  showZero=false,未读数为0时是否显示
  */
function Badge({ children, show = false, count = 0, showZero = false, ...rest }) {
  return (
    // variant={ children ?"dot":"default"}属性判断是否有children显示相应内容
    <StyledBadge variant={children ? "dot" : "default"} show={show} count={count} showZero={showZero} {...rest}>
      {children || <Count>{count}</Count>}
    </StyledBadge>
  );
}

Badge.propTypes = {
  show: PropTypes.bool,
  count: PropTypes.number,
  showZero: PropTypes.bool,
  children: PropTypes.any
};

export default Badge;
