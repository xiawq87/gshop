
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from './mutation-types'
import {reqAddress, reqFoodCatetorys, reqShops} from '../api'

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
  }
}
