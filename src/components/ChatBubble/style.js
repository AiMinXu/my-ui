import styled, { css } from "styled-components";
import Paragraph from '../Paragraph'
import Text from "../Text";
import Icon from "../Icon";
//时间
const Time = styled(Paragraph).attrs({ type: "secondary", size: "small" })`
  margin: 6px;
  margin-left: 24px;
  word-spacing: 1rem;
`

//尾巴svg图标
const BubbleTip = styled(Icon)`
  position: absolute;
  bottom: -15%;
  left: 0;
  z-index: 5;
`

//气泡
const Bubble = styled.div`
  padding: 15px 27px;
  box-shadow: 0px 8px 24px rgba(0,0,0,0.1);
  border-radius: 100px;
  position: relative;
  z-index: 10;
`

//文本
const MessageText = styled(Text)`

`

//创建变体
const typeVariants = {
  // mine作为key
  mine: css`
    ${Bubble} {
      background-color: ${({ theme }) => theme.primaryColor};
    }

    ${BubbleTip} {
      transform: rotateY(180deg);
      left: unset;
      right: 0;
      //path属性设置svg将其变为和气泡一样的颜色
      path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }

    ${Time} {
      text-align: right;
      margin-left: 0;
      margin-right: 24px;
    }

    ${MessageText} {
      color: white;
    }
  `,
};
//使用flex布局，上下布局，是时间和气泡上下布局
const StyledChatBubble = styled.div`
  display: flex;
  flex-direction: column;

  ${({ type }) => type && typeVariants[type]}
`;

export default StyledChatBubble;
export { Time, BubbleTip, Bubble, MessageText }
