import React from "react";
import * as H from "history";

interface Props {
  history: H.History;
}
function Home(props: Props) {
  const { history } = props;
  const teamLogo = [
    "teamlogo1.png",
    "teamlogo2.png",
    "teamlogo3.png",
    "teamlogo4.png",
    "teamlogo5.png",
    "teamlogo6.png"
  ];
  const badgesImg = [
    { imgName: "tengxun.png", text1: "腾讯T派", text2: "全国优秀团队" },
    { imgName: "huawei.png", text1: "华为主题", text2: "设计优秀奖" },
    { imgName: "sanxing.png", text1: "三星移动", text2: "创意设计优秀奖" }
  ];
  return (
    <div></div>
  );
}

export default Home;
