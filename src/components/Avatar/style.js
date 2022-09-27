import styled, { css } from 'styled-components'
import { circle } from '../../utils/mixins'
import theme from '../../theme'


//相同逻辑封装,导入css
const circleMixin = (color, size = "8px") => css`
    content: '';
    display: block;
    position: absolute;
    /* width: ${size};
    height: ${size};
    border-radius:50%;
    background-color: ${color}; */
    ${circle(color, size)}
`

const StyledAvatar = styled.div`
  position: relative;
`
// const StatusIcon = styled.div`
//   position: absolute;
//   left: 2px;
//   top: 4px;

//   //大圆圈
//   &::before{
//     /* content: '';
//     display: block;
//     position: absolute;
//     width: 8px;
//     height: 8px;
//     border-radius:50%;
//     background-color: white; */

//     //不需要访问props
//     ${({ size }) => circleMixin("white", size)}
//     transform: scale(2);//结局居中问题，放大两倍
//   }

//   //小圆圈
//   &::after{
//     /* content: '';
//     display: block;
//     position: absolute;
//     width: 8px;
//     height: 8px;
//     border-radius:50%;
//     background-color: ${({ theme }) => theme.green}; */

//     /* ${({ theme }) => circleMixin(theme.green)} */

//     ${({ theme, status, size }) => {
//     // 根据不同的状态判断传递的颜色和尺寸
//   if (status === "online") {
//     return circleMixin(theme.green, size);
//   } else if (status === "offline") {
//     return circleMixin(theme.gray, size);
//   }
// }}
//   }
// `

const StatusIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 4px;

  &::before {
    ${({ size }) => circleMixin("white", size)}

    transform: scale(2);
  }

  &::after {
    ${({ theme, status, size }) => {
  if (status === "online") {
    return circleMixin(theme.green, size);
  } else if (status === "offline") {
    return circleMixin(theme.gray, size);
  }
}}
  }
`;

const AvatarClip = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  overflow: hidden;
`
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;//填充满整个容器、
  object-position:center;//居中
`

export default StyledAvatar//最外层容器默认导出
//其他做命名导出
export { StatusIcon, AvatarClip, AvatarImage }
