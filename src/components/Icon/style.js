import styled from "styled-components";

const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  //设置svg及所有子标签透明度和颜色
  svg,
  svg * {
    ${({ color }) => (color ? `fill: ${color}` : "")};
    ${({ opacity }) => (opacity ? `opacity: ${opacity}` : "")}
  }
`;

export default StyledIcon;
