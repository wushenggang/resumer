<template>
  <div class="page">
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/>
    </main>
  </div>
</template>
<script>
  import 'normalize.css/normalize.css'
  import './assets/reset.css'
  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import ResumePreview from './components/ResumePreview'
  import icons from './assets/icons'
 
  export default{
    name:'app',
    components:{Topbar,ResumeEditor,ResumePreview},
    created(){
      document.body.insertAdjacentHTML('afterbegin',icons)
    }
  }
</script>
<style lang="scss">
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
    >main{
      flex-grow: 1;
      min-width: 1024px;
      max-width: 1440px;
      margin-top: 16px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      padding: 0 16px;
      width: 100%;
      align-self: center;
    }
  }
    svg.icon{
    height:1em;
    width:1em;
    fill:currentColor;
    vertical-align:-0.1em;
    font-size:16px;
  }
</style>
