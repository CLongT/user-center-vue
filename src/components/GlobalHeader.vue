<template>
  <div id="global-header">
    <!--wrap换行-->
    <a-row :wrap="false">
      <a-col flex="200px">
        <div class="title-bar">
          <img class="logo" alt="logo" src="../assets/logo.png"/>
          <div class="title">Long用户中心</div>
        </div>
      </a-col>
      <a-col flex="auto">
        <a-menu v-model:selectedKeys="current"
                mode="horizontal"
                :items="items"
                @click="doMenuClick"
        />
      </a-col>
      <a-col flex="100px">
        <div class="user-login-status">
          <a-button type="primary" href="/user/login">登录</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import {h, ref} from 'vue';
import {HomeOutlined, CrownOutlined} from '@ant-design/icons-vue';
import {MenuProps} from 'ant-design-vue';
import {useRouter} from "vue-router";

const router = useRouter();
// 菜单点击事件后的处理路由跳转事件
const doMenuClick = ({key}: { key: string }) => {
  router.push({
    path: key,
  })

};

const current = ref<string[]>(['mail']);
// 监听路由变化，更新当前菜单选中状态
router.afterEach((to, from, failure) => {
  current.value = [to.path];
});
const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/user/login',
    // icon: () => h(AppstoreOutlined),
    label: '用户登录',
    title: '用户登录',
  },
  {
    key: '/user/register',
    // icon: () => h(SettingOutlined),
    label: '用户注册',
    title: '用户注册',
  },
  {
    key: '/admin/userManage',
    icon: () => h(CrownOutlined),
    label: '用户管理',
    title: '用户管理',
  },
  {
    key: 'others',
    label: h('a',
        {href: 'https://antdv.com', target: '_blank'}, '关于作者'),
    title: '关于作者',
  },
]);
</script>
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;

}

.logo {
  height: 48px;
}
</style>

