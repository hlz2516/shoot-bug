import Mock from "mockjs";
//引入模拟的数据文件,像图片,json文件,不用export即可直接引入
// import test from 'test.json';
import postDescList1 from "./postDescList1.json";
import postDescList2 from "./postDescList2.json";
import floorsInfo from "./floorsInfo.json";
import floors1 from "./floors1.json";
import floors2 from "./floors2.json";
import draftDescList1 from './draftDescList1.json';
import draftDetail1 from './draftDetail1.json';

let Result = {
  code: 200,
  msg: "OK",
  data: null,
};

//第一个参数为你要发送的请求url，第二个参数为返回的模拟数据
// Mock.mock('/mock/test',{code:200,data:test})
//获取帖子浏览区有多少页
Mock.mock("/api/posts/pagecount", { code: 200, data: 2 });
//帖子浏览区第一页所需数据
Mock.mock("/api/postdescs?page=1", "get", () => {
  Result.data = postDescList1;
  return Result;
});
//帖子浏览区第二页所需数据
Mock.mock("/api/postdescs?page=2", "get", () => {
  Result.data = postDescList2;
  return Result;
});

//某一个帖子详情页有多少页，以及一页多少层
Mock.mock("/api/floors?id=fjskhfksdhfushf12df1ds1", "get", () => {
  Result.data = floorsInfo;
  return Result;
});
//这个帖子第一页详细数据
Mock.mock("/api/floor?id=fjskhfksdhfushf12df1ds1&page=1", "get", () => {
  Result.data = floors1;
  return Result;
});
//这个帖子第二页详细数据
Mock.mock("/api/floor?id=fjskhfksdhfushf12df1ds1&page=2", "get", () => {
  Result.data = floors2;
  return Result;
});

//接收到该post请求时，给对应的json文件添加数据
Mock.mock("/api/floor/add?id=fjskhfksdhfushf12df1ds1", "post", (data) => {
  let body = JSON.parse(data.body);
  floors2.push(body);
  return Result;
});

//用户的草稿post请求，这里假设和后端已经约定好文章的字段中published字段意为是否已发布
Mock.mock("/api/article/save","post",(data)=>{return Result})

//用户的发布文章的请求
Mock.mock("/api/article/publish","post",()=>{return Result})

//请求草稿箱有多少页
Mock.mock("/api/drafts/pagecount",'get',{ code: 200, data: 1 })

Mock.mock("/api/draftdescs?page=1","get",()=>{
  Result.data = draftDescList1;
  return Result;
})

Mock.mock('/api/draft?id=djfh1d5f3d2d5f41','get',()=>{
  Result.data = draftDetail1;
  return Result;
})