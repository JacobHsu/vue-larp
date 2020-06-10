/** 设置导航的标题
 * @param{vm} context 当前上下文this
 * @param{Boolean} showTitle 是否显示title
 * @param{Boolean} showLeftTitle 是否显示左边title
 * @param{String} leftTitle 左边title内容
 * @param{String} back 返回路由路径
 * @return{void} 空
 */
export function siteNavTitle(
  vm: any,
  showTitle: boolean,
  showLeftTitle: boolean,
  leftTitle: string | string[],
  back: string = ""
): void {
  let type = {
    back,
    showTitle,
    showLeftTitle,
    leftTitle
  };
  vm.$store.commit("SET_NAVBAR_TITLE", type);
}
