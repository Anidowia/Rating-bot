<template>
 <div class="form-gap"></div>
<div class="container">
	<div class="row">
		<div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="text-center">
            <h3><i class="fa fa-lock fa-4x"></i></h3>
            <h2 class="text-center">Forgot Password?</h2>
            <p>You can reset your password here.</p>
            <div class="panel-body">
              <div class="form-group">
                <div class="input-group">
                  <input :type="passwordFieldType" v-model="password" placeholder="Input password" class="form-control">
                  <button type="password" @click="switchVisibility(0)" class = "btn btn-outline-dark">show/hide</button> 
                  </div>
                  <input :type="passwordFieldType" v-model="password" placeholder="Retype password" class="form-control">
                  </div>
                  <div class="form-group">
                    <router-link :to="{ path: '/' }"><button type="button" class="btn btn-primary btn-lg">Reset password</button></router-link> 
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
export default {
  data() {
    return {
      password: "",
      passwordFieldType: "password"
    };
  },
  methods: {
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    },
      showPassword() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    }
  }
}
</script>

<style>
@font-face {
	font-family: 'Mazzard';
	src: url('../fonts/MazzardM-SemiBold.eot'); /* IE 9 Compatibility Mode */
  src:url('../fonts/MazzardM-SemiBold.woff2') format('woff2'); /* Super Modern Browsers */
	src:url('../fonts/MazzardM-SemiBold.woff') format('woff'); /* Firefox >= 3.6, any other modern browser */
  src:url('../fonts/MazzardM-SemiBold.ttf') format('truetype'); /* Safari, Android, iOS */
}
#app {
  font-family: 'Mazzard';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.form-gap {
    padding-top: 70px;
}
p {
    margin-top: 0;
    margin-bottom: 3rem;
}
.text-center {
    text-align: center!important;
    margin-top: 34px;
    margin-left: 3vh;
}
.btn-group-lg>.btn, .btn-lg {
    --bs-btn-padding-y: 0.5rem;
    --bs-btn-padding-x: 1rem;
    --bs-btn-font-size: 1.25rem;
    --bs-btn-border-radius: 0.5rem;
    margin-top: 22px;
}
*, ::after, ::before {
    box-sizing: border-box;
    margin: 0 auto;
}
.col-md-4 {
    flex: 0 0 auto; 
    width: auto;
}
</style>
