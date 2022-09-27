import React from "react";
import PropTypes from "prop-types";
import "styled-components/macro";
import { Link, useLocation, matchPath } from "react-router-dom";


import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from "./style";
import Badge from "../Badge/index";
import Avatar from "../Avatar";
import profileImage from "../../assets/images/face-female-1.jpg";
import {
  faCommentDots,
  faUsers,
  faFolder,
  faStickyNote,
  faEllipsisH,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
function NavBar({ to, children, ...rest }) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImage} status="online" />
      <MenuItems>
        <MenuItem to="/" showBadge icon={faCommentDots} />
        <MenuItem to="/contacts" icon={faUsers} />
        <MenuItem to="/files" icon={faFolder} />
        <MenuItem to="/notes" icon={faStickyNote} />
        <MenuItem icon={faEllipsisH} />
        <MenuItem
          to="/settings"
          icon={faCog}
          css={`
            align-self: end;
          `}
        />
      </MenuItems>
    </StyledNavBar>
  );
}

function MenuItem({ to = "#", icon, showBadge, ...rest }) {
  const loc = useLocation();
  // matchPath函数，使用!!将其转换成布尔类型
  const active = !!matchPath(
    {
      path: to,
      end: true,
    },
    loc.pathname
  );
  return (
    <StyledMenuItem active={active} {...rest}>
      <Link to={to}>
        <Badge show={showBadge} >
          <MenuIcon active={active} icon={icon} />
        </Badge>
      </Link>
    </StyledMenuItem>
  )
}

NavBar.propTypes = {

};

export default NavBar;
export { MenuItem }
