<template>
    <div class="sign">
        <MyHead></MyHead>
       <div class="sign_header">
           <b class="del">&times;</b>
           <h3>欢迎来到星享俱乐部</h3>
       </div>
       <div class="sign_center">
           <p><input type="text" placeholder="手机号" v-model="phone_value"/></p>
           <p><input type="text" placeholder="验证码" v-model="pwd_value"/></p>
           <button @click="signFn">登录/注册</button>
           <router-link to="/home" tag="div" class="link">使用账号密码登录</router-link>
       </div>
    </div>
</template>
<script>
import api from "@/api"
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            phone_value:"",
            pwd_value:"",

        }
    },
    computed:{

    },
    methods:{
        
        signFn(){
            if(this.pwd_value.trim()!=="" && /^1[1357]\d{9}$/.test(this.phone_value)){
                    api.signUserInfo({
                        phone:this.phone_value,
                        password:this.pwd_value
                    }).then(data=>{
                        let {token,message}=data;
                        window.localStorage.setItem("token",token)
                        this.$alert(message);
                        this.$router.go(-1)
                    }).catch(error=>{
                        this.$alert(error.response.data.message)
                    })
            }else{
                this.$alert("输入有误，请重新输入")
            }
        }
    },
    created(){
       
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
@import "../../static/scss/_minix.scss";
@import "../../static/scss/common.scss";
.sign{
  .sign_header{
      width: 100%;
      height: pxTorem(100px);
      box-shadow: 0 pxTorem(5px) pxTorem(13px) 0 #e6e6e6;
      box-sizing: border-box;
      padding: pxTorem(12px) pxTorem(25px) pxTorem(32px) pxTorem(25px);
      position: relative;
      b{
          font-size: 40px;
        //   font-weight: 800;
      }
      h3{
          font-size: 43px;
          font-weight: 800;
      }

  }
  .sign_center{
      flex: 1;
      background: #F8F8F6;
      box-sizing: border-box;
      padding: pxTorem(0px) pxTorem(26px) ;
      p{
          width: 100%;
          height: pxTorem(26px);
          margin-top: pxTorem(41px);
        //   background: #ccc;
          input{
               width: 100%;
                height: 100%;
              border: none;
              outline: none;
              font-size: 30px;
            //   padding-left: 15px;
            color:#91918F;
              border-bottom: 1px solid #91918F;
          }
      }
      >button{
          width: 100%;
           height: pxTorem(36px);
           border-radius: pxTorem(18px);
           background: #D4D4D4;
           color:#fff;
           font-size: 24px;
            border: none;
            outline: none;
            margin: pxTorem(60px) 0 pxTorem(30px) 0;
      }
      .link{
           width: 100%;
           height: pxTorem(30px);
            font-size: 24px;
            text-align: center;
            line-height:pxTorem(30px);
            color:#14A268; 
      }
  }
}
</style>