import tpl from './layer.tpl'; //  ejs模板此时载入的是个函数
// import tpl from './layer.html'; //此时tpl是个字符串
import './layer.less';

function layer () {
  return {
    name: 'layer',
    tpl: tpl
  }
}
export default layer;
