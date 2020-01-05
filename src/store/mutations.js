
import {RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  LOGOUT,
  RESET_USER_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_COMMENT,
  RECEIVE_SHOP_INFO} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },

  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },

  [LOGOUT] (state) {
    state.userInfo = {}
  },

  [RESET_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  },

  [RECEIVE_SHOP_GOODS] (state, {shopGoods}) {
    state.shopGoods = shopGoods
  },

  [RECEIVE_SHOP_COMMENT] (state, {shopComment}) {
    state.shopComment = shopComment
  },

  [RECEIVE_SHOP_INFO] (state, {shopInfo}) {
    state.shopInfo = shopInfo
  }
}
