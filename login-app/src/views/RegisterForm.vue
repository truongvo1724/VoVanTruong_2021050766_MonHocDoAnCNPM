<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="body-register">
    <div class="bg-white" id="register">
      <div class="register-form-header ml-32">
        <span class="title-header-register">
          Đăng ký tài khoản mới miễn phí
        </span>
      </div>
      <form class="register-body ml-24 mt-10" @submit.prevent="onSubmit">
        <div class="row">
          <label class="flex flex-col" for="fullname">
            <span class="font-semiBold">Họ và tên</span>
            <input
              id="fullname"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 w-3/4"
              type="text"
              placeholder="Nhập họ và tên của bạn"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="username">
            <span class="font-semiBold">Tên đăng nhập</span>
            <input
              id="username"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 w-3/4"
              type=""
              placeholder="Nhập tên đăng nhập của bạn"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semiBold">Mật khẩu</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 w-3/4"
              type="password"
              placeholder="********"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="repassword">
            <span class="font-semiBold">Nhập lại mât khẩu</span>
            <input
              id="repassword"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 w-3/4"
              type="password"
              placeholder="********"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semiBold">Email</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 w-3/4"
              type="email"
              placeholder="Nhập Email của bạn"
            />
          </label>
        </div>
        <div class="checkbox-container mt-6">
          <input type="checkbox" id="agreeCheckbox" />
          <label for="agreeCheckbox" class="checkbox-label"
            ><span>
              Tôi đồng ý với các
              <a class="text-blue-500 hover:underline" href="#"
                >điều kiện và điều khoản</a
              >
            </span>
          </label>
        </div>
        <div class="row">
          <button
            type="submit"
            class="py-3 text-center w-3/6 bg-gray-400 text-white rounded-lg mt-10 ml-16"
          >
            Đăng ký
          </button>
        </div>
      </form>
      <p class="text-center mt-8">hoặc</p>
      <div class="mt-10 text-center">
        <span class="otherway-register"
          ><i
            class="fa fa-brands fa-facebook"
            style="font-size: 16px; padding-right: 5px"
          ></i
        ></span>
        <span class="otherway-register ml-9"
          ><i
            class="fa fa-brands fa-google"
            style="font-size: 16px; padding-right: 5px"
          ></i
        ></span>
        <span class="otherway-register ml-9"
          ><i
            class="fa fa-apple"
            style="font-size: 16px; padding-right: 5px"
          ></i
        ></span>
      </div>
      <div class="mt-10 text-center">
        <span class="">Bạn đã có tài khoản rồi?</span>
        <span class="ml-1">
          <RouterLink :to="{ name: 'Login', params: {} }" class="text-blue-500"
            >Đăng nhập</RouterLink
          >
        </span>
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
.body-register {
  background-color: #e5e6ec;
  padding: 156px 420px 279px 420px;
  justify-content: center;
  align-items: center;
}
#register {
  width: 600px;
  height: 899px;
  border-radius: 14px;
}
.otherway-register {
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
.title-header-register {
  color: var(--main-text, #002352);
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
}
</style>
