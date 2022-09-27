import React from "react";
import PropTypes from "prop-types";
import StyledInput, { Prefix, Suffix, InputContainer } from "./style";

import Icon from "../Icon";
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg'
import { useTheme } from "styled-components";
import InputText from "./InputText";
function Input({ placeholder = '请输入内容...', prefix, suffix, ...rest }) {

  return (
    <InputContainer {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder} />
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  );
}

//给予默认值，然后留下自定义属性
function Search({ placeholder = '请输入内容...', ...rest }) {

  //需求：将图标文字设置成与占位文字相同的颜色（自定义属性传递主题色）
  const theme = useTheme()
  return <Input placeholder={placeholder} color={theme.gray3} prefix={<Icon icon={SearchIcon} width={18} height={18} />} {...rest} />
}

Input.Search = Search//将Search组件当成Input组件导出
Input.Text = InputText;


Input.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any
};

export default Input;
