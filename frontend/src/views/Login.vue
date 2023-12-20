<template>
  <div id="home">
    <div id="login-form">
      <div class="login-form-header">
        <span class="title-header">Đăng nhập</span>
        <span class="close-button" style="position: absolute;top: 20%;right:10px; cursor: pointer;
        padding:5px;
      font-size: 20px;
      color: #3e3f41; font-family: Roboto; ">x</span>
      </div>
      <form name="form" @submit.prevent="handleLogin">
        <div id="login-body">
          <div class="label-input">Tên đăng nhập</div>
          <input v-model="user.username" v-validate="'required'" type="text" class="form-control" name="username" />
          <div v-if="errors.has('username')" class="alert alert-danger" role="alert">Username is required!</div>
          <div style="
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
            width: 462px;
          ">
            <span class="label-input">Mật khẩu</span><span><a href="google.com" id="forgot-password">Quên mật
                khẩu?</a></span>
          </div>
          <div class="" style="position:relative;">
            <input v-model="user.password" v-validate="'required'" :type="showPassword ? 'text' : 'password'">
            <button v-on:click="togglePasswordVisibility()"
              style=" position: absolute;top: 50%;right:0; transform: translateY(-50%);font-size: 20px;border:none;background:none">
              <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
            </button>
            <div v-if="errors.has('password')" class="alert alert-danger" role="alert">Password is required!</div>
          </div>
          <div class="form-group">
            <button class="login-button" :disabled="loading" style="border:none">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Đăng nhập</span>
            </button>
          </div>
          <p class="login-with">hoặc đăng nhập bằng</p>
          <div style="
            display: flex;
            justify-content: space-around;
            padding-top: 10px;
          ">
            <span class="otherway"><i class="fab fa-brands fa-facebook-f"
                style="font-size: 20px; padding-right: 10px; color:#005eff;"></i>Facebook</span>
            <span class="otherway"><i class="fab fa-brands fa-google"
                style="font-size: 16px; padding-right: 5px; color:#df3416"></i>Google</span>
          </div>
          <p class="footer">
            Bạn chưa có tài khoản?
            <router-link to="/register">Đăng ký ngay!</router-link>
          </p>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">{{ message }}</div>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f2f5;
  width: 100vw;
  height: 100vh;

}

#login-form {
  width: 600px;
  height: 620px;
  border-radius: 14px;
  background: var(--light-greyscale-greyscale-200, #fff);
  box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.16);
}

.login-form-header {
  position: relative;
  max-height: 58.264px;
  border-bottom: 1px solid #f7f7f7;
  padding-bottom: 12px;
}

.title-header {
  padding-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light-greyscale-greyscale-900, #000);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-transform: uppercase;
}

#login-body {
  padding: 36.74px 80px 0px 80px;
}

.label-input {
  color: var(--light-greyscale-greyscale-900, #000);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;

}

#login-body input {
  display: flex;
  width: 450px;
  height: 50px;
  padding: 16px 15px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f7f7f7;
  border: 0px;
}

#forgot-password {
  color: var(--dark-other-link-500, #2f80ed);
  text-align: right;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-decoration: none;
}

.login-button {
  margin-top: 40px;
  display: flex;
  width: 440px;
  height: 60px;
  padding: 15px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 40px;
  background: #00bf6f !important;
  box-shadow: 0px 2px 10px 0px rgba(244, 103, 0, 0.05);
  color: var(--light-text-active, #fff);
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.login-button:hover {
  cursor: pointer;
}

.login-with {
  margin-top: 30px;
  color: var(--light-transparent-greyscale-65, rgba(0, 0, 0, 0.65));
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.192px;

}

.otherway {
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--light-greyscale-greyscale-300, #e5e6ec);
  color: var(--light-greyscale-greyscale-900, #000);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  padding: 13.02px 55px 13px 55px;
  margin-bottom: 20px;
  width: 220px;
  margin-left: 20px;
}

.footer {
  margin-top: 35px;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}

button:hover {
  cursor: pointer;
}
</style>
<script>
import User from '../models/user';

export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: '',
      showPassword: false,
    };
  },
  computed: {

    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/home');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/home');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  }
};
</script>