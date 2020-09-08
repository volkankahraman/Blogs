<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button @click="Login">Login</button>
    <button @click="Register">Register</button>
  </div>
</template>

<script>
import formOne from "./components/form-one.vue";
import formTwo from "./components/form-two.vue";

export default {
  components: {
    "form-one": formOne,
    "form-two": formTwo,
  },
  data() {
    return {
      component: "form-two",
    };
  },
  methods: {
    Login: function () {
      this.component = "form-one";
    },
    Register: function () {
      this.component = "form-two";
    },
  },
};
</script>

<style>
</style>
