<!-- <template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleRegister">
        <div v-if="!successful">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              v-model="user.username"
              v-validate="'required|min:3|max:20'"
              type="text"
              class="form-control"
              name="username"
            />
            <div
              v-if="submitted && errors.has('username')"
              class="alert-danger"
            >{{errors.first('username')}}</div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="user.email"
              v-validate="'required|email|max:50'"
              type="email"
              class="form-control"
              name="email"
            />
            <div
              v-if="submitted && errors.has('email')"
              class="alert-danger"
            >{{errors.first('email')}}</div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              v-model="user.password"
              v-validate="'required|min:6|max:40'"
              type="password"
              class="form-control"
              name="password"
            />
            <div
              v-if="submitted && errors.has('password')"
              class="alert-danger"
            >{{errors.first('password')}}</div>
          </div>
          <div class="form-group">
            <label for="password">Confirm password</label>
            <input
              v-model="user.confirmPassword"
              v-validate="'required|min:6|max:40'"
              type="password"
              class="form-control"
              name="confirmPassword"
            />
            <div
              v-if="submitted && errors.has('confirmPassword')"
              class="alert-danger"
            >{{errors.first('password')}}</div>
            <div
              v-if="submitted && user.password !== user.confirmPassword"
              class="alert-danger"
            >Password khong khop</div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block">Sign Up</button>
          </div>
        </div>
      </form>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}</div>
    </div>
  </div>
</template> -->
<template>
  <div id="home">
    <div id="signup-form">
      <div class="header-form" style="display:flex; justify-content: center; align-items: center;">
        <h4 style="color:#022c68; margin-top:20px;font-weight: 700;padding:0 30px 0 30px;">Đăng ký tài khoản mới miễn phí
        </h4>
      </div>
      <form name="form" @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="fullName">Họ và tên</label>
          <input type="text" id="fullName" v-model="user.fullName" placeholder="Nhập họ và tên của bạn"  
            v-validate="'required|max:40'"/>
        </div>
        <div class="form-group">
          <label for="username">Tên đăng nhập</label>
          <input type="text" id="username" v-model="user.username" v-validate="'required|min:3|max:20'"
            class="form-control" name="username" placeholder="Nhập tên đăng nhập của bạn" />
          <div v-if="submitted && errors.has('username')" class="alert-danger">{{ errors.first('username') }}</div>
        </div>

        <div class="form-group" :class="{ 'has-success': passwordsMatch(), 'has-warning': !passwordsMatch() }">
          <label for="password">Mật khẩu</label>
          <div style="position:relative;">
            <input :type="showPassword ? 'text' : 'password'" v-model="user.password" v-validate="'required|min:6|max:40'"
              class="form-control" name="password" />
            <div v-if="submitted && errors.has('password')" class="alert-danger">{{ errors.first('password') }}</div>
            <button @click="togglePasswordVisibility_password"
              style="position:absolute;top:50%;right:42px;transform:translateY(-50%);font-size:20px;border:none;background:none;">
              <i :class="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
            </button>
          </div>
        </div>

        <div class="form-group" :class="{ 'has-success': passwordsMatch(), 'has-warning': !passwordsMatch() }">
          <label for="confirmPassword">Nhập lại mật khẩu</label>
          <div style="position:relative;">
            <input :type="showPassword_cfps ? 'text' : 'password'" v-model="user.confirmPassword"
              v-validate="'required|min:6|max:40'" class="form-control" name="confirmPassword" />
            <div v-if="submitted && user.password !== user.confirmPassword" class="alert-danger">Password khong khop</div>
            <button @click="togglePasswordVisibility_confirmPassword"
              style="position:absolute;top:50%;right:42px;transform:translateY(-50%);font-size:20px;border:none;background:none">
              <i :class="showPassword_cfps ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
            </button>
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="user.email" v-validate="'required|email|max:50'" class="form-control"
            name="email" placeholder="Nhập email của bạn" />
          <div v-if="submitted && errors.has('email')" class="alert-danger">{{ errors.first('email') }}</div>
        </div>

        <div class="form-group1" style="display: flex; align-items: center;">
          <label for="agree" style="display: flex; align-items: center;">
            <input type="checkbox" id="agree" v-model="agree" style="margin-right: 5px;" />
            Tôi đồng ý với các<span style="margin: 0 5px;"><router-link to="/"
                style="text-decoration: none; color: #005eff">điều kiện và điều khoản</router-link></span>của
          </label>
        </div>

        <div class="signup-footer"
        style="display: flex; flex-direction: column; justify-content: center; align-items:center; margin-top:20px">
        <button class="signup-button" type="submit">Đăng ký</button>
        <p style="margin-top:20px">Hoặc</p>
        <div class="icon">
          <i style="border: 1px solid rgb(228, 228, 228); border-radius: 50%; padding: 10px; color:#022c68;margin-left:10px"
            class="fab fa-facebook-f"></i>
          <i style="border: 1px solid rgb(228, 228, 228); border-radius: 50%; padding: 10px; margin-left:10px;color:#022c68"
            class="fab fa-google-plus-g"></i>
          <i style="border: 1px solid rgb(228, 228, 228); border-radius: 50%; padding: 10px;margin-left:10px;color:#022c68"
            class="fab fa-apple"></i>
        </div>
        <p style="margin-t op:20px">Bạn đã có tài khoản rồi?<router-link to="/login"
            style="text-decoration:none;color:#005eff; font-weight:700">Đăng nhập</router-link></p>
      </div>
      </form>
      <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">{{ message }}</div>
    </div>
  </div>
</template>
<script>
import User from '../models/user';

export default {
  name: 'Register',
  data() {
    return {
      user: new User('', '', '', ''),
      submitted: false,
      successful: false,
      message: '',
      agree: false,
      showPassword: false,
      showPassword_cfps: false,

    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/home');
    }
  },
  methods: {
    handleRegister() {
      this.submitted = true;
      this.message = '';
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;

              setTimeout(() => {
                  this.$router.push("/login")
              }, 1500)
            },
            error => {
              this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
      });
    },
    togglePasswordVisibility_password() {
      this.showPassword = !this.showPassword;
    },
    togglePasswordVisibility_confirmPassword() {
      this.showPassword_cfps = !this.showPassword_cfps;
    },
    passwordsMatch() {
      this.password === this.confirmPassword && this.password !== '';
    },
  }
};
</script>
<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f2f5;
  width: 100vw;
  height: 100vh;
  font-family: Roboto;
}

label {
  display: block;
  margin-bottom: 10px;
  margin-left: 40px;
  font-weight: bold;
  color: var(--light-greyscale-greyscale-900, #000);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
}

.form-group input {
  display: flex;
  width: 87%;
  height: 40px;
  padding: 16px 15px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f7f7f7;
  border: 0px;
  margin-left: 30px;
}

#home #signup-form {
  width: 530px;
  height: auto;
  border-radius: 14px;
  background: var(--light-greyscale-greyscale-200, #fff);
  box-shadow: 0px 12px 40px 0px rgba(0, 0, 0, 0.16);
  padding: 0 30px 0 30px;
}

input[ type="checkbox"] {
  color: green;
}

.signup-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 195px;
  height: 50px;
  padding: 15px 15px;
  border-radius: 40px;
  background: #e5e6ec;
  box-shadow: 0px 2px 10px 0px rgba(244, 103, 0, 0.05);
  color: var(--light-text-active, #fff);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
}

.signup-button:hover {
  background-color: #00bf6f;
}
</style>

<!-- <style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style> -->