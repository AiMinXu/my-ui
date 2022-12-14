import React from "react";
import PropTypes from "prop-types";
import StyledMessageCard, { Name, Time, Status, Message, MessageText, UnreadBadge } from "./style";
import Avatar from "../Avatar";
import { useTheme } from "styled-components";
import Icon from "../Icon";
import { ReactComponent as Replied } from "../../assets/icons/replied.svg";

function MessageCard({
  avatarSrc,
  avatarStatus,//头像在线状态
  statusText,
  name,
  time,//消息发送或者接收的时间
  message,
  unreadCount,//未读数量
  active,
  replied,//是否已回复
  children,
  ...rest }) {

  const theme = useTheme()
  return (
    <StyledMessageCard active={active} {...rest}>

      <Avatar status={avatarStatus} src={avatarSrc} />
      <Name>{name}</Name>
      <Status>{statusText}</Status>
      <Time>{time}</Time>

      <Message replied={replied}>
        {replied &&
          <Icon
            width={16}
            height={14}
            icon={Replied}
            color={active ? theme.inactiveColorDark : theme.inactiveColor}
            opacity={active ? 0.4 : 1}
            // 靠左对齐
            style={{
              justifyContent: "start"
            }}
          />
        }
        <MessageText>{message}</MessageText>
        <UnreadBadge count={unreadCount}></UnreadBadge>
      </Message>
      {children}
    </StyledMessageCard>
  );
}


MessageCard.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  avatarStatus: PropTypes.any,
  statusText: PropTypes.any,
  name: PropTypes.any,
  time: PropTypes.any,
  message: PropTypes.any,
  unreadCount: PropTypes.number,
  active: PropTypes.bool,
  replied: PropTypes.bool,
  children: PropTypes.any,
};

export default MessageCard;
