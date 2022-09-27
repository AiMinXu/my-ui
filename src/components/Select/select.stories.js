import React from "react";
import Select from ".";
import Option from "../Option";
export default {
  title: "UI 组件/Input/Select",
  component: Select
};

export const Default = () => <Select>
  <Option>选项1</Option>
  <Option>选项2</Option>
  <Option>选项3</Option>
</Select>;

export const FormSelect = () => {
  return (
    <Select type="form">
      <Option>北京市</Option>
      <Option>河北省</Option>
    </Select>
  );
};
