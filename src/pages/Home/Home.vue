<template>
  <section class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont iconsousuo"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfo._id? '/userinfo' : '/login'">
        <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
        <span class="header_login_text" v-else><i class="iconfont &#xe9b7;"></i></span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="imgBaseUrl + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/home_back.svg" alt="back" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <div class="shop_container">
        <ShopList/>
      </div>
    </div>
  </section>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    import {mapState, mapActions} from 'vuex'

    import HeaderTop from '../../components/HeaderTop/HeaderTop'
    import ShopList from '../../components/ShopList/ShopList'

    export default {
      components: {
        HeaderTop,
        ShopList
      },

      data() {
        return {
          imgBaseUrl: 'https://fuss10.elemecdn.com'
        }
      },

      mounted () {
        this.getCategorys()
        this.getShops()
      },

      computed: {
        ...mapState(['address', 'categorys', 'userInfo']),

        categorysArr () {
          const categorysArr = []

          const size = this.categorys.length
          const pageSize = 8
          const totalPage = size % pageSize === 0? size/pageSize : size/pageSize+1;

          for(let i=0; i<totalPage; i++) {
            categorysArr[i] = []
            for(let j=0; j<pageSize; j++) {
              const offset = pageSize * i + j
              categorysArr[i][j] = this.categorys[offset]
            }
          }

          return categorysArr
        }
      },

      methods: {
        ...mapActions(['getCategorys', 'getShops'])
      },

      watch: {
        categorys (value) {
          this.$nextTick(() => { //一旦完成界面更新（不是数据更新），立即调用
            /* eslint-disable no-new */
            new Swiper('.swiper-container', {
              loop: true, // 循环模式选项

              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination'
              }
            })
          })
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'

  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
      .shop_container
        margin-bottom 50px
</style>
