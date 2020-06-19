import http from "./http";
import { UserInfo } from "@/interface/user";
import { Toast } from "vant";
import { AxiosResponse } from "axios";
import { ResInfo, LunBoInfo } from "@/interface/base";

const apiPath = "http://localhost:3001";

// 登录
export const postLogin = async (data = {}) => {
  const url = "/api/login";
  const result: AxiosResponse<ResInfo> = await http({
    method: "post",
    url,
    data
  });
  if (result.data.code !== 0) {
    Toast({
      message: result.data.msg,
      className: "custom-toast",
      duration: 2000
    });
  }
  return result.data;
};
// 获取用户信息
export const getUserInfo = async (data = {}) => {
  const url = "/api/getUserInfo";
  const result: AxiosResponse<ResInfo<UserInfo>> = await http({
    method: "post",
    url,
    data
  });
  return result.data.data;
};
//  轮播
export const getLunbo = async (data = {}) => {
  // http://localhost:3000/api/lunbo
  const url = `${apiPath}/api/lunbo`; // "/api/lunbo";
  const result: AxiosResponse<ResInfo<LunBoInfo[]>> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data.data;
};
//  热门小说
export const getHotFiction = async (data = {}) => {
  const url = "/api/hotfiction";
  const result: AxiosResponse<ResInfo> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data;
};
// 免费小说
export const getFreeFiction = async (data = {}) => {
  const url = "/api/freefiction";
  const result: AxiosResponse<ResInfo> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data;
};
// 新书抢鲜
export const getNewFiction = async (data = {}) => {
  const url = "/api/newfiction";
  const result: AxiosResponse<ResInfo> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data;
};

// 轻小说
export const getQingFiction = async (data = {}) => {
  const url = "/api/qingfiction";
  const result: AxiosResponse<ResInfo> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data;
};

// 小说介绍
export const getBookInfo = async (data = {}) => {
  const url = `/api/book`;
  const result: AxiosResponse<ResInfo> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data;
};

// 小说章节
export const getBookCatalog = async (data = {}) => {
  const url = `/api/catalog`;
  const result: AxiosResponse<ResInfo> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data;
};

// 小说章节内容
export const getArticle = async (data = {}) => {
  const url = `/api/article`;
  const result: AxiosResponse<ResInfo> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data;
};

// 分类
export const getCategory = async (data = {}) => {
  const url = `/api/category`;
  const result: AxiosResponse<ResInfo> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data;
};

// 分类详情
export const getCategoryDetail = async (data = {}) => {
  const url = `/api/category/detail`;
  const result: AxiosResponse<ResInfo> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data;
};

// 排行榜
export const getRank = async (data = {}) => {
  const url = `/api/rank`;
  const result: AxiosResponse<ResInfo> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data;
};

// 排行榜详情
export const getRankDetail = async (data = {}) => {
  const url = `/api/rank/detail`;
  const result: AxiosResponse<ResInfo> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data;
};

// 搜索
export const getSearch = async (data = {}) => {
  const url = `/api/search`;
  const result: AxiosResponse<ResInfo> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data;
};

// 收藏
export const postCollect = async (data = {}) => {
  const url = `/api/collect`;
  const result: AxiosResponse<ResInfo> = await http({
    method: "post",
    url,
    data
  });
  return result.data;
};
// 点赞
export const postLike = async (data = {}) => {
  const url = `/api/like`;
  const result: AxiosResponse<ResInfo> = await http({
    method: "post",
    url,
    data
  });
  return result.data;
};
// 收藏列表
export const getCollectList = async (data = {}) => {
  const url = `/api/getCollectList`;
  const result: AxiosResponse<ResInfo> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data;
};
// 点赞列表
export const getLikeList = async (data = {}) => {
  const url = `/api/getLikeList`;
  const result: AxiosResponse<ResInfo> = await http({
    method: "get",
    url,
    params: data
  });
  return result.data;
};
