import React from "react";
import Paragraph from ".";

export default {
  title: "排版/Paragraph",
  component: Paragraph
};

export const Default = () => (
  <>
    <Paragraph>默认</Paragraph>;
    <Paragraph>默认</Paragraph>;
  </>
)

export const Ellipsis = () => <Paragraph ellipsis>
  这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落
</Paragraph>
