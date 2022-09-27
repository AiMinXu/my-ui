import styled, { css } from "styled-components";

//设置类型变体
const typeVariant = {
  primary: css`
    color: ${({ theme }) => theme.grayDark};
  `,
  secondary: css`
    color: ${({ theme }) => theme.grayDark};
    opacity: 0.3;
  `,
  danger: css`
    color: ${({ theme }) => theme.red};
  `,
}

//size变体
const sizeVariant = {
  normal: css`
    ${({ theme }) => theme.normal}
  `,
  medium: css`
    ${({ theme }) => theme.medium}
  `,
  large: css`
    ${({ theme }) => theme.large}
  `,
  xlarge: css`
    ${({ theme }) => theme.xlarge}
  `,
  xxlarge: css`
    ${({ theme }) => theme.xxlarge}
  `,
  small: css`
    ${({ theme }) => theme.small}
  `,
  xsmall: css`
    ${({ theme }) => theme.xsmall}
  `,
  xxsmall: css`
    ${({ theme }) => theme.xxsmall}
  `,
}

//注意将渲染改成行内文本
const StyledText = styled.span`
  /* 字体大小给若不传给默认值normal */
  font-size: ${({ size }) => sizeVariant[size] || sizeVariant.normal};
  ${({ type }) => typeVariant[type]}
  ${({ bold }) => bold && `font-weight':500`}
`;

export default StyledText;
