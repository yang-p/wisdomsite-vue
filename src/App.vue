<template>
  <div id="app" class="page-body">
    <PageHeader></PageHeader>
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/pageHeader'
export default {
  name: 'App',
  data() {
    return {
      ispagebody: false
    }
  },
  components: {
    PageHeader
  },
  created() {
    // this.isPagebody()
  },
  events: {
    isPagebody(params) {
      this.ispagebody = params
      console.log('查看参数：',this.ispagebody)
    }
  }
}
</script>


<style lang="less" scoped>
@import './assets/css/public.less';
@import './assets/css/components.less';
</style>

