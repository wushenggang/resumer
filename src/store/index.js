import Vue from 'vue'
import Vuex from 'vuex'
import objectPath from 'object-path';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selected: 'profile',
    user: {
      id: '',
      username: ''
    },
    Caonima:{'profile':{'name':'姓名','city':'座右铭','title':'籍贯','birthday':'出生年月','sex':'性别','marray':'婚姻状况'},
    'workHistory':{'worktime':'工作时间','company':'公司名称','details':'岗位'},
    'education':{'studytime':'时间','school':'学校','details':'专业','schooldesc':'在校经历'},
    'projects':{'ptime':'项目时间','name':'项目名称','role':'项目角色','job':'主要工作'},
    'awards':{'name':'获奖名称'},
    'contacts':{'tel':'电话','qq':'QQ','wechat':'微信','mail':'邮箱'}},
    resumeConfig: [
        {field: 'profile', icon: 'id', keys: ['name', 'city', 'sex','title', 'birthday','marray']},
        {field: 'workHistory', icon: 'work', keys: ['worktime','company', 'details']},
        {field: 'education', icon: 'book', keys: ['studytime','school', 'details','schooldesc']},
        {field: 'projects', icon: 'heart', keys: ['ptime','name','role', 'job']},
        {field: 'awards', icon: 'cup', keys: ['name']},
        {field: 'contacts', icon: 'phone', keys: ['tel', 'qq','wechat','mail']}
    ],
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
        name: '吴盛钢',
        city: '杭州',
        sex:'男',
        title: '能死在我的脚下，是上天赐予你的恩赐',
        birthday: '1995-11-21',
        marray:'未婚',
      },
      workHistory: [{
        worktime:'2017.1-2018.5',
        company:'杭州银美科技有限公司',
        details:'前端工程师',
      }
       ],
      education: [{'studytime':'2014.9-2018-7','school':'长春理工大学光电信息学院','details':'自动化',
      'schooldesc':'2014届本科，担任南邮爱心社办公室副部长，负责新闻稿、横幅撰写工作，多次参加义工活动，照顾孤寡老人。'}
      ],
      projects: [
        {'ptime':'2017.2-2017.3','name':'浙江省博物馆','role':'前端工程师','job':'响应式页面的制作'}
      ],
      awards: [{name:'社区福利彩票五等奖'},{name:'康师傅冰红茶再来一瓶'},{name:'时代周刊封面人物'}
      ],
      contacts:
        { tel: '18758251784', qq: '315810842',wechat:'小钢',mail:'315810842@qq.com' },
    }
  },
  mutations: {
    initState(state, payload){
      Object.assign(state, payload)
    },
    switchTab(state, payload) {
      state.selected = payload // 关于 payload 看这里 http://vuex.vuejs.org/zh-cn/mutations.html#提交载荷（payload）
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state, {path, value}){
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state, payload){
      Object.assign(state.user, payload)
    },
    removeUser(state){
      state.user.id = null
    },
    addResumeSubfield(state, {field}) {
      let empty = {}
      state.resume[field].push(empty)
      state.resumeConfig.filter((i) => i.field === field)[0].keys.map((key) => {
          Vue.set(empty, key, '')
      })
    },
    delResumeSubfield(state, {path}){
        // 『删除哦』
        objectPath.del(state.resume, path);
    },
  }
})
