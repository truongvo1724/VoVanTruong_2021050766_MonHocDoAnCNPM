<template>
  <div class="mt-8">
    <div class="container mx-auto px8 ml-64 m-40">
      <form
        class="flex flex-col justify-start space-y-6 ml-64"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullname">
            <span class="font-semiBold">Fullname</span>
            <input
              id="fullname"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 max-w-prose"
              type="text"
              placeholder="Vo van truong"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semiBold">Email Address</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 max-w-prose"
              type="email"
              placeholder="example@gmail.com"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semiBold">Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 max-w-prose"
              type="password"
              placeholder="Example"
            />
          </label>
        </div>
        <div class="row">
          <button
            type="submit"
            class="py-3 text-center w-full bg-green-400 text-white rounded-lg max-w-prose"
          >
            Đăng ký
          </button>
        </div>
      </form>
      <div class="w-full mt-6 ml-96">
        <span class="">Bạn đã có tài khoản?</span>
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
