import styled from "styled-components";
import ChatBubble from "components/ChatBubble";
import { animated } from "react-spring";

// 用于布局中间的消息气泡，容器
const Conversations = styled(animated.div)`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  flex: 1;

  & > * {
    margin: 10px 0;
  }
`;

// 自己发送的消息样式，attr传递参数
const MyChatBubble = styled(ChatBubble).attrs({ type: "mine" })`
  align-self: flex-end;
`;

const StyledConversation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  border: 1px solid ${({ theme }) => theme.gray4};

  /* footer向下对齐 */
  & > *:last-child {
    align-self: end;
  }
`;

export default StyledConversation;
export { Conversations, MyChatBubble };
