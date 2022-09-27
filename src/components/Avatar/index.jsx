import React from 'react'
import PropTypes from 'prop-types'
import face1 from '../../assets/images/face-male-1.jpg'
import StyledAvatar, { AvatarClip, AvatarImage, StatusIcon } from './style'


function Avatar({ src, size = "48px", status, statusIconSize = "8px", ...rest }) {
  return (
    <StyledAvatar {...rest}>
      {/* status是空值则不会进行显示 */}
      {status && <StatusIcon status={status} size={statusIconSize}></StatusIcon>}
      <AvatarClip size={size}>
        <AvatarImage src={src} alt="" />
      </AvatarClip>
    </StyledAvatar>
  )
}

// 使用propTypes进行传值的规范约束，oneOf接收一个数组，类似于type
Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(["online", "offline"]),
  statusIconSize: PropTypes.string,
}

export default Avatar
