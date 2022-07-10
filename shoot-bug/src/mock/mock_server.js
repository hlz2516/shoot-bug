import Mock from 'mockjs';
//引入模拟的数据文件,像图片,json文件,不用export即可直接引入
// import test from 'test.json';
import postDescList1 from './postDescList1.json';
import postDescList2 from './postDescList2.json';
import floorsInfo from './floorsInfo.json';
import floors1 from './floors1.json';
import floors2 from './floors2.json';

//第一个参数为你要发送的请求url，第二个参数为返回的模拟数据
// Mock.mock('/mock/test',{code:200,data:test})
//获取帖子浏览区有多少页
Mock.mock('/api/postdescs/pagesizes?size=10',{code:200,data:2})
//帖子浏览区第一页所需数据
Mock.mock('/api/postdescs?page=1',{code:200,data:postDescList1})
//帖子浏览区第二页所需数据
Mock.mock('/api/postdescs?page=2',{code:200,data:postDescList2})

//某一个帖子详情页有多少页，以及一页多少层
Mock.mock('/api/floors?id=fjskhfksdhfushf12df1ds1',{code:200,data:floorsInfo})
//这个帖子第一页详细数据
Mock.mock('/api/floor?id=fjskhfksdhfushf12df1ds1&page=1',{code:200,data:floors1})
//这个帖子第二页详细数据
Mock.mock('/api/floor?id=fjskhfksdhfushf12df1ds1&page=2',{code:200,data:floors2})
