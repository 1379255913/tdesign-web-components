import { AttachNode, TNode } from '../common';

export interface TdBackTopProps {
  /**
   * 回到顶部的内容
   */
  children?: TNode;
  /**
   * 监听滚动的容器。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default 'body'
   */
  container?: AttachNode;
  /**
   * 回到顶部内容
   */
  content?: TNode;
  /**
   * 回到顶部内容，同 `content`
   */
  default?: TNode;
  /**
   * 回到顶部的耗时单位：毫秒
   * @default 200
   */
  duration?: number;
  /**
   * 回到顶部相对右下角的位置偏移，示例：[10, 20] 或 ['10em', '8rem']
   * @default ["24px", "80px"]
   */
  offset?: Array<string | number>;
  /**
   * 回到顶部的形状
   * @default square
   */
  shape?: BackTopShapeEnum;
  /**
   * 组件尺寸
   * @default medium
   */
  size?: 'medium' | 'small';
  /**
   * 指定回到该对象。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body
   * @default 'body'
   */
  target?: AttachNode;
  /**
   * 组件主题风格，浅色、主色、暗色
   * @default light
   */
  theme?: 'light' | 'primary' | 'dark';
  /**
   * 滚动高度达到此参数值才出现
   * @default '200px'
   */
  visibleHeight?: string | number;
  /**
   * 点击回到顶部时触发
   */
  onClick?: (context: { e: MouseEvent }) => void;
  /**
   * 在host标签上忽略的属性
   * @default []
   */
  ignoreAttributes?: string[];
}

export type BackTopShapeEnum = 'circle' | 'square';
