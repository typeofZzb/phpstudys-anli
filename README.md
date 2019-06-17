# 前言
>星巴克 （美国连锁咖啡公司）

<img src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=bd660a79083b5bb5bed727f80ee8b204/b7fd5266d01609243e4aa9c9df0735fae7cd34f0.jpg"/>


---
### 简介

```
    星巴克（Starbucks）咖啡公司成立于1971年，是世界领先的特种咖啡的零售商，烘焙
者和星巴克品牌拥有者。旗下零售产品包括30多款全球顶级的咖啡豆、手工制作的浓缩咖啡
和多款咖啡冷热饮料、新鲜美味的各式糕点食品以及丰富多样的咖啡机、咖啡杯等商品。
1987年，星巴克原董事长霍华德·舒尔茨先生收购星巴克，从此带领公司跨越了数座里程碑。
1992年6月，星巴克作为第一家专业咖啡公司成功上市，迅速推动了公司业务增长和品牌发
展。当前公司已在北美，拉丁美洲，欧洲，中东和太平洋沿岸37个国家拥有超过12,000多家
咖啡店，拥有员工超过117，000人。长期以来，公司一直致力于向顾客提供最优质的咖啡和
服务，营造独特的“星巴克体验”，让全球各地的星巴克店成为人们除了工作场所和生活居所
之外温馨舒适的“第三生活空间”。与此同时，公司不断地通过各种体现企业社会责任的活动回馈社会，改善环境，回报合作伙伴
和咖啡产区农民。鉴于星巴克独特的企业文化和理念，公司连续多年被美国《财富》杂志评为“最受尊敬的企业”。
```
## 技术栈
vue + vuex + vue-router + webpack + ES6/7 + vue- + sass + flex + axios + element-ui +
## 项目运行
>git clone  git@github.com:typeofZzb/phpstudys-anli.git

>cd phpstudys-anli
>>cd starbucks
>>> cd sever

```
npm install (推荐)或 yarn
npm start
```

>>>cd vue-dome

```
npm install (推荐)或 yarn
npm run dev

```
## 项目布局

```
.
├── build                                         // webpack配置文件
├── config                                        // 项目打包路径
├── src                                           // 源码目录
│   ├── api                                       // 接口
│   │   ├──  index.js                             // 所有接口             
│   ├── components                                // 公共组件
│   │   ├──  children.vue                         // 发布任务
│   │   ├──  Dialog.vue                           // 加班/休假 切换
│   │   ├──  frame.vue                            // 提示弹框
│   │   ├──  header.vue                           // header 头部
│   │   ├──  list.vue                             //列表
│   ├── piugins                                    // 公用的插件
│   │   ├──  index.js                             
│   ├── router                                     //  路由
│   │   ├──  index.js                              // 配的路由信息
│   ├── static                                     // 静态资源
│   │   ├── icon                                   // 字体图标
│   │   ├── img                                    // 图片
│   │   ├── scss                                   // css 样式
│   ├── store                                      // 仓库管理
│   │   ├── modules                                // 拆分出来的资源
│   │   │   ├── user                                // 查询用户是否登陆后的信息
│   │   │   │   ├── userInfo.js                     // 查询用户是否登陆的配置
│   │   ├── index.js                                // store 仓库的配置
│   ├── utils                                       // 公用的方法
│   │   ├── file.js                                   // 上传文件
│   │   ├── flexble.js                                // flex 弹性布局
│   │   ├── request.js                                //  axios 二次封装
│   ├── views                                         //  所有视图 
│   │   ├── application                               // 创建任务视图
│   │   │   ├── index.vue                                   
│   │   ├── approval                                   // 审批历史视图
│   │   │   ├── index.vue                                
│   │   ├── details                                   // 申请信息视图
│   │   │   ├── index.vue                                  
│   │   ├── home                                      // 首页视图
│   │   │   ├── children                              // 首页分类视图
│   │   │    │   ├── index.vue                                   
│   │   │   ├── index.vue                                  
│   │   ├── login                                     // 搜索页面视图
│   │   │   ├── index.vue                                   
│   │   ├── screen                                    // 筛选页面视图
│   │   │   ├── index.vue                                  
│   │   ├── sign                                      // 登录/注册页面视图
│   │   │   ├──index.vue                                   
│   │   ├── sort                                      // 排序页面视图
│   │   │   ├── index.vue                   
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加载各种公共组件
├── favicon.ico                                 // 图标
├── index.html                                  // 入口html文件



```
