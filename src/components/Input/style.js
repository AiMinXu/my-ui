import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  background: none;
  color: ${({ theme }) => theme.garyDark};
  font-size: ${({ theme }) => theme.medium};
  display: block;

  &::placeholder{
    color: ${({ theme }) => theme.gary3}
  }
`;

//前缀图标
const Prefix = styled.div`
  margin-right:16px;
`

//后缀图标组件
const Suffix = styled.div`
  margin-left: 16px;
`
//整体输入框容器
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background: ${({ theme }) => theme.gray2};
  border-radius: 24px;
  padding: 0 30px;
`

export default StyledInput;

export { InputContainer, Prefix, Suffix }
