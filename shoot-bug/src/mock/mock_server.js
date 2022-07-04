import Mock from 'mockjs';
//引入模拟的数据文件,像图片,json文件,不用export即可直接引入
import test from 'test.json';

//第一个参数为你要发送的请求url，第二个参数为返回的模拟数据
// Mock.mock('/mock/test',{code:200,data:test})