
import {RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  LOGOUT,
  RESET_USER_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_COMMENT,
  RECEIVE_SHOP_INFO} from './mutation-types'
import {reqAddress,
  reqFoodCatetorys,
  reqShops,
  reqLogout,
  reqUserInfo,
  reqShopGoods,
  reqShopComment,
  reqShopInfo} from '../api'

export default {
  async getAddress ({commit, state}) {
    const {latitude, longitude} = state
    const geohash = latitude + ',' + longitude
    const result = await reqAddress(geohash)
    if(result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  async getCategorys ({commit}) {
    const result = await reqFoodCatetorys();
    if(result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  async getShops({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops(longitude, latitude)
    if(result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  recordUserInfo({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  async logout({commit}) {
    const result = await reqLogout()
    if(result.code === 0) {
      commit(LOGOUT)
    }
  },

  async resetUserInfo({commit}) {
    const result = await reqUserInfo()
    if(result.code === 0) {
      const userInfo = result.data
      commit(RESET_USER_INFO, {userInfo})
    }
  },

  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code === 0) {
      const shopInfo = result.data
      commit(RECEIVE_SHOP_INFO, {shopInfo})
    }
  },

  async getShopGoods({commit}) {
    const result = await reqShopGoods()
    if(result.code === 0) {
      const shopGoods = result.data
      commit(RECEIVE_SHOP_GOODS, {shopGoods})
    }
  },

  async getShopComment({commit}) {
    const result = await reqShopComment()
    if(result.code === 0) {
      const shopComment = result.data
      commit(RECEIVE_SHOP_COMMENT, {shopComment})
    }
  }
}
