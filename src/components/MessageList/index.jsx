import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChartList } from "./style";
import MessageCard from "../MessageCard/index";
import Filter from "../Fliter";
import Select from "../Select";
import Option from "../Option";
import Button from "../Button";
import Icon from "../Icon";
import Input from "../Input";
import FilterList from "components/FilterList";
import face1 from "../../assets/images/face-female-1.jpg";
import { ReactComponent as Plus } from "./../../assets/icons/plus.svg";
import messageData from "data/messages";
import { animated } from "react-spring";
import useStaggeredList from 'hooks/useStaggeredList'
function MessageList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(6);

  return (
    <StyledMessageList {...rest}>
      {/* <Input.Search />
      <ChartFilter /> */}
      <FilterList
        options={["最新消息", "在线好友优先"]}
        actionLabel="创建回话"
      >


        <ChartList>
          {/* <MessageCard

            key={1}
            active={true}
            replied={true}
            avatarSrc={face1}
            name="xxx"
            avatarStatus="online"
            statusText="在线"
            time="3hour ago"
            message="xxxxxxxxxxxxxxxxxxxxZXCZXCZXCZXCZ"
            unreadCount={2}
          />
          {
            // 必须添加key值
            [1, 2, 3, 4, 5, 6].map((_, index) => {
              return <MessageCard

                key={index}
                active={index === 3}
                replied={index % 3 === 0}
                avatarSrc={face1}
                name="xxx"
                avatarStatus="online"
                statusText="在线"
                time="3hour ago"
                message="xxxxxxxxxxxxxxxxxxxx"
                unreadCount={2}
              />
            })
          } */}
          {messageData.map((message, index) => (
            // animated.div包裹
            //style={trailAnimes[index]第几个取第几个
            <animated.div key={message.id} style={trailAnimes[index]}>
              <MessageCard
                key={message.id}
                active={index === 3}
                replied={message.replied}
                avatarSrc={message.avatarSrc}
                name={message.name}
                avatarStatus={message.status}
                statusText={message.statusText}
                time={message.time}
                message={message.message}
                unreadCount={message.unreadCount}
              />
            </animated.div>
          ))}
        </ChartList>
      </FilterList>
      {/* {children} */}
    </StyledMessageList>
  );
}

function ChartFilter() {
  return (
    <Filter style={{ padding: "20px 0" }}>
      <Filter.Filters label="列表排序">
        <Select>
          <Option>最新消息优先</Option>
          <Option>在线好友优先</Option>
        </Select>
      </Filter.Filters>

      <Filter.Action label="创建会话">
        <Button>
          <Icon icon={Plus} width={12} height={12} />
        </Button>
      </Filter.Action>
    </Filter>

  )
}


MessageList.propTypes = {
  children: PropTypes.any
};

export default MessageList;
