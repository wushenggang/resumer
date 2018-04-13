import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
  state:{
    selected: 'profile',
    resume: {
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'workHistory', icon: 'work' },
        { field: 'education', icon: 'book' },
        { field: 'projects', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' },
      ],
      profile: {
        name: '吴吴吴',
        city: '杭州',
        title: 'CEO',
        birthday:'1995-11-21'
      },
      workHistory: [
        {
          company: '杭州银美科技有限公司', content: `公司坐落在杭州黄龙体育馆旁的中田大厦，主要在文创领域发力。
            我的主要工作如下:
            1. 完成既定产品需求。
            2. 修复 bug。`
        },
        { company: 'XXXX有限公司', content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
            我的主要工作如下:
            1. 完成既定产品需求。
            2. 修复 bug` },
       ],
       education: [
        { school: '长春理工大学光电信息学院', content: '本科' },
        { school: '杭州第十一中学'},
       ], 
      projects: [
        { name: 'project A', content: '内容' },
        { name: 'project B', content: '内容' },
      ],
      awards: [
        { name: '国家奖学金', content: '连续三次获得国家奖学金' },
        { name: '最帅大学生'},
      ],
      contacts: [
        { contact: 'phone', content: '18758251784' },
        { contact: 'qq', content: '315810842' },
      ],
    }
  },
  mutations:{
    switchTab(state,payload){
        state.selected=payload
    }
  }
})
export default store;