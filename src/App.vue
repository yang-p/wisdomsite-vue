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
  components: {
    PageHeader
  }
}
</script>


<style lang="less" scoped>
@import './assets/css/public.less';
@import './assets/css/components.less';
</style>

