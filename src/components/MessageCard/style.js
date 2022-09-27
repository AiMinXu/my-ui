import styled, { css } from "styled-components";
import Text from "../Text";
import Paragraph from "../Paragraph";
import Badge from "../Badge";
import { activeBar, card } from "../../utils/mixins";
import StyledAvatar from "../Avatar/style";
//使用attrs({ size: "large" })函数，对象形式传递属性
const Name = styled(Text).attrs({ size: "large" })`
  grid-area: name;
`

const Time = styled(Text).attrs({ size: "medium", type: "secondary" })`
  grid-area: time;
  justify-self: end;
`

//状态
const Status = styled(Text).attrs({ type: "secondary" })`
  grid-area: status;

`
//容器组件，用来布局消息和未读数量
const Message = styled.div`
  grid-area: message;
  /* 本身也是grid布局 */
  display: grid;
  grid-template-columns: 1fr 30px;
  /* 垂直居中 */
  align-items: center;
  /* 已回复的状态下将grid布局调整成3列布局  */
  ${({ replied }) => replied && css`
    grid-template-columns: 24px 1fr 30px;
  `}
`

const MessageText = styled(Paragraph).attrs({ ellipsis: true })`

`

//显示未读数
const UnreadBadge = styled(Badge)`
  justify-self: end;
`


const StyledMessageCard = styled.div`
/* 此处调用封装函数 */
  ${card()}
  display: grid;
  /* 三行三列 */
  grid-template-areas:
    "avatar name time"
    "avatar status status"
    "message message message"
  ;
  grid-template-columns: 64px 1fr 1fr;
  row-gap: 16px;
  background:${({ theme }) => theme.background};
  transition: 0.4s;
  &:hover{
    box-shadow: 0px 20px 50px rgba(0,0,0,0.1);
  }

  ${StyledAvatar}{
    grid-area: avatar;
  }

  ${({ active }) => active && css`
    background-color: ${({ theme }) => theme.darkPurple}};
    ${Name},${Status},${Time},${MessageText} {
      color: white;
    }
    ${Status},${Time} {
      opacity: 0.4;
    }
    ${activeBar({ barWidth: "4px", shadowWidth: "14px" })}

    //隐藏指示条暴露在外边的部分
    overflow: hidden;
  `}
`;

export default StyledMessageCard;

export { Name, Time, Status, Message, MessageText, UnreadBadge }
