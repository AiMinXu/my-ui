import React from "react";
import MessageCard from ".";
import face1 from '../../assets/images/face-male-1.jpg'
export default {
  title: "UI 组件/MessageCard",
  component: MessageCard
};

export const Default = () => <MessageCard
  avatarSrc={face1}
  name="xxx"
  avatarStatus="online"
  statusText="在线"
  time="3 小时前在线"
  message="这是一个UI基础组件库的例子"
  unreadCount={3}
/>;

export const ActiveMessageCard = () => <MessageCard
  avatarSrc={face1}
  name="xxx"
  avatarStatus="online"
  statusText="在线"
  time="3 小时前在线"
  message="这是一个UI基础组件库的例子"
  unreadCount={3}
  active={true}
/>
export const RepliedMessageCard = () => <MessageCard
  avatarSrc={face1}
  name="xxx"
  avatarStatus="online"
  statusText="在线"
  time="3 小时前在线"
  message="这是一个UI基础组件库的例子"
  unreadCount={3}
  replied
/>
export const PepliedInActiveMessageCard = () => <MessageCard
  avatarSrc={face1}
  name="xxx"
  avatarStatus="online"
  statusText="在线"
  time="3 小时前在线"
  message="这是一个UI基础组件库的例子"
  unreadCount={3}
  active={true}
  replied
/>
