import styled from "styled-components";
import arrowRight from "assets/icons/arrowRight.svg";
import Icon from "components/Icon";

//图标的容器
const SocialLinks = styled.div`
  & > * {
    margin: 0 9px;
  }
`;

const ContactSection = styled.section`
  display: grid;
  row-gap: 18px;
`;
//相册容器
const AlbumSection = styled.section``;

const AlbumTitle = styled.div`
/* 占据整个宽度 */
  justify-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    text-decoration: none;
    font-size: ${({ theme }) => theme.normal};
    color: ${({ theme }) => theme.primaryColor};
    /* 箭头图标 */
    &::after {
      display: inline-block;
      content: url(${arrowRight});
      margin-left: 2px;
    }
  }
`;

const Album = styled.div`
  margin-top: 14px;
  justify-self: start;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Photo = styled.img`
  width: 76px;
  height: 76px;
  /* 自动缩放占满容器 */
  object-fit: cover;
`;

//关闭按钮
const CloseIcon = styled(Icon).attrs({ opacity: 0.3 })`
  position: absolute;
  right: 30px;
  top: 30px;
  cursor: pointer;
`;


const StyledProfile = styled.div`
  display: grid;
  align-content: start;
  justify-content: center;
  justify-items: center;
  position: relative;
  padding: 30px;
  height: 100vh;
  margin-top: 2vh;
  overflow-y: auto;
`;

export default StyledProfile;
export {
  SocialLinks,
  ContactSection,
  Album,
  AlbumSection,
  AlbumTitle,
  Photo,
  CloseIcon,
};
