<template>
    <div>
        <room-header title="title"></room-header>
        <div class="banner">
           <swiper :list="swiperList"></swiper>
        </div>
        <div class="container">
            <div class="head">
                <div class="line">
                    <div class="name" v-html="info.name"></div>
                    <div class="desc" v-html="info.desc"></div> 
                </div>
                <div class="book">
                    <div class="go-btn">
                        <router-link tag="span" :to="{path:'/userin',query:{routeId:info.id,price:info.price}}">预定</router-link>
                    </div>
                </div>
            </div>
            <div class="descInfo">
              {{info.descInfo}}
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from '../Home/component/Swiper'
import RoomHeader from '../details/component/RoomHeader'
import axios from "axios";
export default {
    components:{
        Swiper,
        RoomHeader
    },
  data() {
    return {
      info: {
          id:'',
          name:'路线',
          desc:'路线描述',
          descInfo:'',
          price:''

      },
      swiperList:[],
      baseUrl:'http://192.168.20.36:8090/jtly'
    };
  },
  created() {
      this.init()
  },
  methods: {
    init() {
      axios({
        method: "get",
        url: "/api/admin/route/jtlyroutebase/getRouteDetailByApp",
        params:{routeId:this.$route.query.id}
      }).then(res => {
        res = res.data;
        let imgArr = []
        res.data.fileList.forEach((img,i)=>{
            imgArr.push({
                id:i,
                imgUrl:this.baseUrl + '/' + img
            })
        })
        this.swiperList = imgArr;
        let infoObj = {
          id:res.data.id,
          name:res.data.name,
          desc:res.data.description,
          descInfo:res.data.productPoint,
          price:res.data.price
        }
        this.info = infoObj;
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
.container
    width calc(100% - 20px)
    margin 0 auto
    .head
      padding 10px 0
      display flex
      justify-content space-between
      .line
        flex 1
        .name
          font-size 20px
          font-weight bold
          padding-bottom 10px
        .desc 
          line-height 30px
      .book
        width 80px
        text-align center
        display flex
        align-items center
        .go-btn
          background-color red  
          color #fff
          margin 0 auto
          width 70px
          height 30px
          line-height 30px
    .descInfo
      line-height 24px
</style>
