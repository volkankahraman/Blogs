
  <template>
<form-helper>
    <div slot="form-header">
      <h3>Sign Up</h3>
    </div>
    <div slot="form-fields">
      <label for="id">Username :</label>
      <input type="text" id="id"><br>
      <label for="password">password :</label>
      <input type="password" id="password"><br>
      <label for="password-again">password again:</label>
      <input type="password" id="password-again">

    </div>
    <div slot="form-controls">
      <button @click.prevent="handleSubmit"> Login </button>
    </div>
  </form-helper>
</template>

<script>
import formHelper from './formHelper.vue'

export default {
  components: {
    "form-helper": formHelper,
  },
  data () {
    return {

    }
  },
  methods: {
    handleSubmit: function () {
     alert(); 
    }
  },
}
</script>

<style>

</style>
