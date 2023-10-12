import { defineAsyncComponent } from "vue";
export function registerGlobalComponent(app) {
  app.component(
    "Auth_Layout-layout",
    defineAsyncComponent(() => import("@/layouts/Auth_Layout"))
  );
  app.component(
    "Default_Layout-layout",
    defineAsyncComponent(() => import("@/layouts/Default_Layout"))
  );
}
