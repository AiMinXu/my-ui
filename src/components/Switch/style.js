import styled from "styled-components";

//滑动槽
const Slider = styled.div`
  background-color: ${({ theme }) => theme.gray4};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 16px;
  transition: 0.4s;

  /* 滑动按钮样式 */
  &::before {
    display: block;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    top: 1px;
    left: 1px;
    background-color: white;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.1),
      0px 3px 1px rgba(0, 0, 0, 0.0510643);
    border-radius: 50%;
    transition: 0.4s;
  }`

//
const Checkbox = styled.input.attrs({ type: "checkbox" })`
  /* 隐藏checkbox */
  width: 0;
  height: 0;
  opacity: 0;
  /* 当选中时候 */
  :checked + ${Slider} {
    background-color: ${({ theme }) => theme.primaryColor};

    ::before {
      transform: translateX(20px);
    }
  }`

//使用label形式渲染
const StyledSwitch = styled.label`
  width: 51px;
  height: 31px;
  position: relative;
  display: inline-block;
`;

export default StyledSwitch;
export { Checkbox, Slider };
