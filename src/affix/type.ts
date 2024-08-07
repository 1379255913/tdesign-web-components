import { ScrollContainer, TNode } from '../common';

export interface TdAffixProps {
  /**
   * 内容，同 content
   */
  children?: TNode;
  /**
   * 指定滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default () => window
   */
  container?: ScrollContainer;
  /**
   * 内容
   */
  content?: TNode;
  /**
   *  距离容器底部达到指定距离后触发固定
   * @default 0
   */
  offsetBottom?: number;
  /**
   *  距离容器顶部达到指定距离后触发固定
   * @default 0
   */
  offsetTop?: number;
  /**
   * 固钉定位层级，样式默认为 500
   */
  zIndex?: number;
  /**
   * 固定状态发生变化时触发
   */
  onFixedChange?: (affixed: boolean, context: { top: number }) => void;
}

export interface AffixRef {
  handleScroll: () => void;
}
