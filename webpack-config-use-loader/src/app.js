import './css/common.css';
// import './components/layer/layer.less';
// import './components/layer/layer.styl';
// 引入模板
// import Layer from './components/layer/layer.js';
import Layer from './components/layer/layer.js';

const App = function () {
  var dom = document.getElementById('app');
  var layer = new Layer();
  dom.innerHTML = layer.tpl({
    name: "ben",
    arr: ['xiaomi', 'apple', 'opp']
  });
};
new App();