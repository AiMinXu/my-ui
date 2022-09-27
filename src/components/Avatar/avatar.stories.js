import Avatar from ".";
import face1 from "../../assets/images/face-male-1.jpg";
import face2 from "../../assets/images/face-male-2.jpg";
import face3 from "../../assets/images/face-male-3.jpg";
import face4 from "../../assets/images/face-male-4.jpg";
//添加默认导出对象
export default {
  title: "UI 组件/Avatar",//名称
  component: Avatar//导入组件
}

export const Default = () => {
  return <Avatar src={face1} />
}

export const Sizes = () => {
  return <div className="row-elements">
    <Avatar size="48px" src={face1} />
    <Avatar size="56px" src={face2} />
    <Avatar size="64px" src={face3} />
    <Avatar size="72px" src={face4} />
  </div>
}

export const WithStatus = () => {
  return (
    <div className="row-elements">
      <Avatar src={face1} status="online" />
      <Avatar src={face2} status="offline" />
      <Avatar src={face4} status="offline" size="72px" statusIconSize="12px" />
    </div>
  );
};
