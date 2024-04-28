<template>
  <view class="demo">
    <!-- 通知栏 -->
    <nut-notify :type="notifyState.type" v-model:visible="notifyState.show" :msg="notifyState.desc" />

    <view class="user_switch">
      <nut-button size="large" type="info" @click="login.methods.showPop(0)" icon="my2">
        会员登陆
      </nut-button>
      <nut-button size="large" type="primary" @click="login.methods.showPop(1)">
        管理员登陆
      </nut-button>
    </view>

    <!-- 弹窗 -->
    <nut-dialog :title="login.info.title" v-model:visible="login.info.visible" @close="login.methods.handleClose"
      @ok="login.methods.handleClick" okText="登陆" cancelText="取消" :closeOnClickOverlay="false"
      overlayClass="overlayClass">
      <nut-form>
        <nut-form-item label="账号" :label-width="35">
          <nut-input v-model="login.info.name" :placeholder="login.info.placeholder" @input="login.methods.handleInput"
            :clearable="true" />
        </nut-form-item>
        <nut-form-item label="密码" :label-width="35">
          <nut-input v-model="login.info.psw" placeholder="请输入密码" type="password" @input="login.methods.handleInput"
            :clearable="true" />
        </nut-form-item>
      </nut-form>
    </nut-dialog>
  </view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import Taro from '@tarojs/taro';

const notifyState = reactive({
  show: false,
  desc: '',
  type: 'primary'
});

function callNotifyState(type, desc) {
  notifyState.show = true;
  notifyState.type = type;
  notifyState.desc = desc;
}

// const notifyState = {
//   state: reactive({
//     show: false,
//     desc: '',
//     type: 'primary'
//   }),
//   methods: {
//     cellClick(type, desc) {
//       notifyState.state.show = true;
//       notifyState.state.type = type;
//       notifyState.state.desc = desc;
//     }
//   }
// };

const login = {
  type: 0,
  info: reactive({
    visible: false,
    name: '',
    psw: '',
    title: '会员登陆',
    placeholder: '请输入账号',
  }),
  methods: {
    showPop(type) {
      login.type = type;
      login.info.name = '';
      login.info.psw = '';
      login.info.visible = true;
      if (type === 0) {
        login.info.title = '会员登陆';
        login.info.placeholder = '请输入账号';
        login.info.name = 'user';
        login.info.psw = '123456';
      } else if (type === 1) {
        login.info.title = '管理员登陆';
        login.info.placeholder = '请输入账号';
        login.info.name = 'admin';
        login.info.psw = '123456';
      }
    },
    handleClick() {
      login.methods.handleClose();
      if (login.type === 0) {
        console.log('会员登陆');
        if (login.info.name === 'user' && login.info.psw === '123456') {
          login.methods.success();
        } else {
          login.methods.fail();
        }
      } else if (login.type === 1) {
        console.log('管理员登陆');
        if (login.info.name === 'admin' && login.info.psw === '123456') {
          login.methods.success();
        } else {
          login.methods.fail();
        }
      }
    },
    handleClose() {
      login.info.visible = false;
    },
    success() {
      console.log('登陆成功');
      callNotifyState('primary', '登陆成功');
      setTimeout(() => {
        if (login.type === 0) {
          Taro.navigateTo({
            url: '/pages/user/user'
          });
        } else if (login.type === 1) {
          Taro.switchTab({
            url: '/pages/admin-room/admin-room'
          });
        }
      }, 2000);
    },
    fail() {
      setTimeout(() => {
        callNotifyState('danger', '登陆失败');
      }, 2000);
    },
  }
};

// Taro.hideTabBar();
</script>

<style lang="less">
.demo {
  overflow: hidden;
}

.user_switch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .nut-button {
    margin: 30px 0;
    width: 400px;
  }
}

.overlayClass {
  background: #EEEEEEFF;
}
</style>