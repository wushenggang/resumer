<template>
    <div id="resumePreview">
      
    <section data-name="profile" v-show="resume.profile">
      <h1>
        {{resume.profile.name}}
      </h1>
      <h2>{{resume.profile.title}}</h2>
      <p>
        <small>{{resume.profile.city}}</small>
        <small>{{resume.profile.birthday}}</small>
        <small>{{resume.profile.sex}}</small>
        <small>{{resume.profile.marray}}</small>
      </p>
    </section>

    <section data-name="projects" v-show="resume.projects">
      <h2>项目经历</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h3>{{item.name}}</h3>
          <small>{{item.role}}</small>
          <small>{{item.ptime}}</small>
          <small> {{item.job}} </small>
        </li>
      </ol>
    </section>

    <section data-name="workHistory" v-show="resume.workHistory">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.workHistory">
          <h3>{{item.company}}</h3>
          <small>{{item.details}}</small>
          <small>{{item.worktime}}</small>
        </li>
      </ol>
    </section>

    <section data-name="education" v-show="resume.education">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>{{item.school}}</h3>
          <small>{{item.details}}</small>
          <small>{{item.studytime}}</small>
          <small>{{item.schooldesc}}</small>
        </li>
      </ol>
    </section>

    <section data-name="awards" v-show="resume.awards">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h3>{{item.name}}</h3>
        </li>
      </ol>
    </section>

    <section data-name="contacts" v-show="resume.contacts">
      <h2>联系方式</h2>
      <table>
        <tr>
          <td>电话:{{resume.contacts.tel}}</td>
          <td>QQ:{{resume.contacts.qq}}</td>
          <td>微信:{{resume.contacts.wechat}}</td>
          <td>邮箱:{{resume.contacts.mail}}</td>
        </tr>
      </table>
    </section>
    </div>
</template>

<script>
    export default {
        name: "ResumePreview",
        computed:{
          resume(){
            return this.$store.state.resume;
        }
      },
      
    }
</script>

<style scoped lang="scss">
     #resumePreview{
      background:white;
      box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
      padding:2em;
      color:#333;
      line-height:1.2;
      overflow:auto;
      *{
      box-sizing:border-box;
      font-variant:normal;
      font-weight:normal;
    }
    ol{ list-style: none; }
    section  section{ margin-top: 2em; }
    p{ white-space: pre-line; } // 请问为什么要加这一行
    section {
      > h2:first-child{ background: #ddd; display: inline-block; padding: .2em; 
        margin-bottom: .5em;
      }
    }
    section[data-name="profile"]{
      > h1{ margin: .1em 0; font-size: 4em; }
    }
    section[data-name="workHistory"]
    section[data-name="projects"],
    section[data-name="award"]
    {
      li + li { margin-top: 1em; }
      li {
        h3{ border-bottom: 1px solid #999; padding-bottom: .3em; margin-bottom: .3em; }
      }
    }
    section[data-name="education"]{
      li{
        line-height: 1.5;
      }
    }
    section[data-name="contacts"]{
        td:first-child{
          padding-right:1em;
        }
      }
   }
</style>
