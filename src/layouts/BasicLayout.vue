<template>
  <div id="basic-layout">
    <a-layout>
      <a-layout-header class="header">
        <global-header/>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view/>
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://baidu.com" target="_blank">
          百度首页

        </a>
        Footer
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup lang="ts">

import GlobalHeader from "../components/GlobalHeader.vue";
</script>

<style scoped>
#basic-layout .header{
  background-color: white;
  margin-bottom: 16px;
  color: unset;
  padding-inline: 20px;
}
#basic-layout .footer {
  background-color: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}
#basic-layout .content {
  padding: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to right , #fefefe, #fff);
}

</style>