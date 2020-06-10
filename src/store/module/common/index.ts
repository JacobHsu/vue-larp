import { Base } from "./interface";
import * as Type from "./type";
import { ActionTree, MutationTree } from "vuex";
import {
  getLunbo,
  getHotFiction,
  getFreeFiction,
  getNewFiction,
  getCategoryDetail,
  getSearch
} from "@/request/api";

const state: Base = {
  lunboList: [],
  hotFictionList: [],
  freeFictionList: [],
  newFictionList: [],
  qingFictionList: [],
  searchList: [],
  navBar: {
    showTitle: true,
    showLeftTitle: true,
    leftTitle: ""
  },
  searchKW: ""
};
const mutations: MutationTree<Base> = {
  [Type.SET_LUNBO_LIST](mstate, data) {
    mstate.lunboList = data;
  },
  [Type.SET_HOTFICTION_LIST](mstate, data) {
    mstate.hotFictionList = data;
  },
  [Type.SET_FREEFICTION_LIST](mstate, data) {
    mstate.freeFictionList = data;
  },
  [Type.SET_NEWFICTION_LIST](mstate, data) {
    mstate.newFictionList = data;
  },
  [Type.SET_QINGFICTION_LIST](mstate, data) {
    mstate.qingFictionList = data;
  },
  [Type.SET_NAVBAR_TITLE](mstate, data) {
    mstate.navBar = data;
  },
  [Type.SET_SEARCH](mstate, data) {
    mstate.searchList = data;
  },
  [Type.SET_SEARCHKW](mstate, data) {
    mstate.searchKW = data;
  }
};

const actions: ActionTree<Base, any> = {
  async getLunbo({ commit }, data = {}) {
    const result = await getLunbo(data);
    commit(Type.SET_LUNBO_LIST, result);
    return result;
  },
  async getHotFiction({ commit }, data = {}) {
    const result = await getHotFiction(data);
    commit(Type.SET_HOTFICTION_LIST, result);
    return result;
  },
  async getFreeFiction({ commit }, data = {}) {
    const result = await getFreeFiction(data);
    commit(Type.SET_FREEFICTION_LIST, result);
    return result;
  },
  async getNewFiction({ commit }, data = {}) {
    const result = await getNewFiction(data);
    commit(Type.SET_NEWFICTION_LIST, result.data.records);
    return result.data.records;
  },
  async getQingFiction({ commit }, data = {}) {
    const result = await getCategoryDetail(data);
    commit(Type.SET_QINGFICTION_LIST, result.data.records);
    return result.data.records;
  },
  async getSearch({ commit }, data = {}) {
    const result = await getSearch(data);
    commit(Type.SET_SEARCH, result);
    return result;
  }
};
export default { state, mutations, actions };
