import styled, { css } from "styled-components";
import styledText from "../Text/style";
//此处不可使用styled包裹Text组件，可使用包裹styledText使其使用Text相关属性
//类似于高阶组件
const StyledParagraph = styled(styledText)`
//根据ellipsis是否显示
 ${({ ellipsis }) =>
    ellipsis &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `}
`;

export default StyledParagraph;
