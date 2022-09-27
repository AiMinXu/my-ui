import styled, { css } from "styled-components";
import { circle } from "../../utils/mixins";

const variants = {
  dot: css`
  position: relative;
  padding: 5px;
  &::after{
    display: ${({ show }) => (show ? "block" : "none")};
    content: "";
    ${({ theme }) => circle(theme.red, "6px")}
    position: absolute;
    right: 0;
    top: 0;
  }
  `,
  default: css`
   ${({ theme }) => circle(theme.red, "26px")}
    display: flex;
    align-self: start;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04),
      0px 6px 12px 0px rgba(0, 0, 0, 0.08);//叠加阴影
    ${({ showZero, count }) => !showZero && count === 0 && `visibility:hidden`}//显示或者隐藏若满足条件则隐藏但是保留位置，考虑布局
  `
}

//设置数字样式
const Count = styled.div`
  font-size:${({ theme }) => theme.normal};
  color: white;
`

const StyledBadge = styled.div`
  display: inline-block;
  ${({ variant }) => variants[variant]}//变量
`

export default StyledBadge;
export { Count }
