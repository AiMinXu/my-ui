import styled from "styled-components";
import StyledText from "../Text/style";
// Fliters用于包裹下拉菜单和label
const Filters = styled.div`

`;
//Fliters用于包裹动作按钮和label
const Action = styled.div`
  justify-self: end;
  ${StyledText} {
    padding-right: 1rem;
  }
`;
const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;

export default StyledFilter;
export { Filters, Action }
