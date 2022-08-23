<template>
<section class="h-100 gradient-form">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">
                <div class="text-center">
                  <img src="@/assets/logo.png"
                    style="width: 185px;" alt="logo">
                  <h4 class="mt-1 mb-5 pb-1">Welcome to the Rating Bot</h4>
                </div>
                <form>
                  <p>Please login to your account</p>
                  <div class="form-outline mb-4">
                    <input v-model="message" placeholder="Full name" id="form2Example11" class="form-control" required/>
                    <label class="form-label" for="form2Example11">Username</label>
                  </div>
                  <div class="form-outline mb-4">
                    <input :type="password" v-model="password" placeholder="Password" id="myInput" class="form-control" required> 
                    <label class="form-label" for="form2Example22">Password</label>
                  </div>
                  <div class="text-center pt-1 mb-5 pb-1">
                    <router-link :to="{ path: '/about' }"> <button class="col btn btn-dark-moon btn-rounded" type="button">Log in</button></router-link> 
                    <router-link :to="{ path: '/password' }"><button type="button" class="btn btn-link" style = "  vertical-align:top;">Forgot the password?</button></router-link>
                  </div>
                  <!-- <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <button type="button" class="btn btn-outline-primary">Create new</button>
                  </div> -->
                </form>
              </div>
            </div>
            <div align="left" class="col-lg-6 d-flex align-items-center gradient-custom-2" style = "background-image: linear-gradient(to right top, #ffffff, #0c40f4, #000000);">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <p> GOSU is an IT company for solving problems and developing products of any complexity.
                  <ul>
                    <li>development and maintenance of products on the 1c platform</li>
                    <li>development of analytical systems</li>
                    <li>mobile application development</li>
                    <li>integration of information systems</li>
                    </ul> 
                  📊 10 years on the market; <br>
                  🔒 more than 500 successfully implemented projects <br>
                  🔝 our mission:<br> 
                  Change the perception of IT, make it simple and accessible for everyone! </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
</template>

<style>

@media (min-width: 844px) {
.gradient-form {
height: 100vh !important;
}
}
@media (min-width: 390px) {
.gradient-custom-2 {
border-top-right-radius: .3rem;
border-bottom-right-radius: .3rem;
}
}
.btn-dark-moon {
    background: rgb(29, 44, 205);  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #fff !important;
    margin-bottom: 1.5rem !important;
    margin-right: 12px;
    --bs-btn-padding-y: 0.37rem;
}
.mb-4 {
  margin-right: 14px;
}
body {
  text-align: center;
  -webkit-animation: bgcolor 20s infinite;
  animation: bgcolor 10s infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}
@font-face {
	font-family: 'Mazzard';
	src: url('../fonts/MazzardM-SemiBold.eot'); /* IE 9 Compatibility Mode */
  src:url('../fonts/MazzardM-SemiBold.woff2') format('woff2'); /* Super Modern Browsers */
	src:url('../fonts/MazzardM-SemiBold.woff') format('woff'); /* Firefox >= 3.6, any other modern browser */
  src:url('../fonts/MazzardM-SemiBold.ttf') format('truetype'); /* Safari, Android, iOS */
}
.card-body {
  font-family: "Mazzard";
}
:root {
  width: fit-content;
}
</style>

