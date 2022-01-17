import "@/assets/main.less";
import "@/pages/app";
import elements from "@/data/common/elements";

window.navigator.userAgent.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
)
  ? elements.nodes.body.empty().html('<p id="isMobile">暂不支持移动端运行</p>')
  : elements.nodes.app.removeAttr("style");
console.log(import.meta.env.MODE);
