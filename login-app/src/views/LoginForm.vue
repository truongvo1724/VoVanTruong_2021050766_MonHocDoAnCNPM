<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="body">
    <div class="bg-white" id="home">
      <div class="login-form-header ml-56">
        <span class="title-header"> Đăng nhập </span>
        <span class="title-header ml-56"> X </span>
      </div>
      <div class="login-body ml-24 mt-10">
        <form
          class="flex flex-col justify-start space-y-6"
          @submit.prevent="onSubmit"
        >
          <div class="row">
            <label class="flex flex-col" for="username">
              <span class="font-semiBold">Tên đăng nhập</span>
              <input
                id="username"
                class="px-4 py-3 rounded-lg border border-gray-100 mt-1 w-3/4"
                type=""
                placeholder="truong"
              />
            </label>
          </div>
          <div class="row">
            <label class="flex flex-col justify-between" for="password">
              <span class="font-semiBold"
                >Mật khẩu<a class="text-blue-500 hover:underline ml-52" href="#"
                  >Quên mật khẩu</a
                ></span
              >
              <input
                id="password"
                class="px-4 py-3 rounded-lg border border-gray-100 mt-1 w-3/4"
                type="password"
                placeholder="Example"
              />
            </label>
          </div>
          <div class="row">
            <button
              type="submit"
              class="py-3 text-center w-3/4 bg-green-500 text-white rounded-lg"
            >
              Đăng Nhập
            </button>
          </div>
        </form>
        <p class="text-center mr-20 mt-8">hoặc đăng nhập bằng</p>
        <div class="mt-10">
          <span class="otherway"
            ><i
              class="fa fa-brands fa-facebook"
              style="font-size: 16px; padding-right: 5px"
            ></i
            >Facebook</span
          >
          <span class="otherway ml-9"
            ><i
              class="fa fa-brands fa-google"
              style="font-size: 16px; padding-right: 5px"
            ></i
            >Google</span
          >
        </div>
        <div class="mt-10 ml-14">
          <span>Bạn chưa có tài khoản?</span>
          <span class="ml-1">
            <RouterLink
              :to="{ name: 'Register', params: {} }"
              class="text-blue-500"
              >Đăng ký ngay</RouterLink
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    function onSubmit() {}
    return { onSubmit };
  },
};
</script>
<style>
.body {
  background-color: #e5e6ec;
  padding: 156px 420px 279px 420px;
  justify-content: center;
  align-items: center;
}
#home {
  width: 600px;
  height: 589px;
  border-radius: 14px;
}
.otherway {
  flex-shrink: 0;
  border-radius: 24px;
  background: var(--light-greyscale-greyscale-300, #e5e6ec);

  color: var(--light-greyscale-greyscale-900, #000);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  padding: 13.02px 55px 13px 55px;
}
.title-header {
  color: var(--main-text, #002352);
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 36.4px */
}
</style>
