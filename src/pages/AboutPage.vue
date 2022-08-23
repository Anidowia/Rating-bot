<template>
  <div class="wrapper">
  <!-- Sidebar  -->
  <nav id="sidebar" v-bind:class = "(toggle)?'show':'hide'">
      <div id="dismiss" @click='toggle = !toggle'>
          <i class="fas fa-arrow-left"></i>
      </div>
      <div class="sidebar-header">
          <h3>Dina Sherubayeva</h3>
      </div>
      <ul class="list-unstyled components">
          <li>
            <router-link :to="{ path: '/' }"><a>Log out</a> </router-link> 
               <!-- <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
              <ul class="collapse list-unstyled" id="pageSubmenu">
                  <li>
                      <a href="#pagestart">Page 1</a>
                  </li>
                  <li>
                      <a href="#">Page 2</a>
                  </li>
                  <li>
                      <a href="#">Page 3</a>
                  </li>
              </ul>  -->
          </li>
          <li>
            <router-link :to="{ path: '/input' }"><a>Hand Input</a> </router-link> 
          </li>
      </ul>
  </nav>
  <!-- Page Content  -->
  <div id="content">
      <nav class="navbar transparent navbar-inverse navbar-fixed-top">
          <div class="container-fluid">
              <button type="button" id="sidebarCollapse" class="btn btn-info" @click='toggle = !toggle'>
                  <i class="fas fa-align-left"></i>
              </button>
          </div>
      </nav>
<h2 id = "pagestart">Сведения о проделанной работе</h2>
<table class="table table-borderless" style = "width='30%'">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Имя</th>
      <th scope="col">Описание</th>
      <th scope="col">Клиент</th>
      <th scope="col">Статус</th>
      <th scope="col">Часы факт</th>
      <th scope="col">Часы зачет</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Задача с правами</td>
          <td>Закрытие прав пользователей</td>
          <td>Аскона</td>
          <td>На тестировании</td>
          <td>1</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>ТелеграммБот</td>
          <td>Данные с поломы</td>
          <td>Фархат</td>
          <td>Выполнено</td>
          <td>15</td>
          <td>15</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <!-- <td colspan="2">Larry the Bird</td> -->
          <td>Установить формат на номера</td>
          <td>Изменить формат</td>
          <td></td>
          <td></td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
</table>
<BarChart width='40%' height='90%'/> 
<TableIn/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <div class="line"></div>

      <h2>Lorem Ipsum Dolor</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <div class="line"></div>
      <h2>Lorem Ipsum Dolor</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>

<div class="overlay" v-bind:class = "(toggle)?'':'active'"></div>
</template>

<script>

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import BarChart from '@/components/barChart';
export default {
  components: {
    BarChart,
    },
  data(){
  return {
     toggle: true //toggle variable
   
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
body {
  font-family: 'Mazzard';
  background: #fafafa;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: 'Mazzard';
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
}
p {
  font-family: 'Mazzard';
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}
.table-borderless {
  font-family: 'Mazzard';
}
a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
  font-family: 'Mazzard';
}

.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  margin-left: 0px;
  margin-top: -60px;
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}

/* ---------------------------------------------------
  SIDEBAR STYLE
----------------------------------------------------- */
:root {
  width: fit-content;
}

#sidebar {
  width: 218px;
  position: fixed;
  top: 0;
  left: -250px;
  height: 150vh;
  z-index: 999;
  background: rgb(147, 152, 255);
  color: #fff;
  transition: all 0.3s;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
}

#sidebar.active {
  left: 0;
}

#dismiss {
  width: 35px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background: #7386D5;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

#dismiss:hover {
  background: #fff;
  color: #7386D5;
}

.overlay {
  display: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 998;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
.overlay.active {
  display: block;
  opacity: 1;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul p {
  color: #fff;
  padding: 10px;
}

#sidebar ul li a {
  padding: 10px;
    font-size: 1.1em;
    display: block;
    color: #ffffff;
    text-decoration: none;
}

#sidebar ul li a:hover {
  color: #7386D5;
  background: #fff;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #7386D5;
}

a.article,
a.article:hover {
  background: #6d7fcc !important;
  color: #fff !important;
}

#content {
  display:contents;
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
  position: absolute;
  top: 0;
  right: 0;
}
.overlay.active {
    display: block;
    opacity: 1;
}
.overlay {
    display: none;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    z-index: 998;
    opacity: 0;
    transition: all 0.5s ease-in-out;
}

    #sidebar {
      margin-left: 0;
    }
    #content {
      min-width: 0;
      width: 100%;
    }
    .show
    {
      margin-left: 0!important;
    }
    .hide
    {
      margin-left: 250px!important;
    }
  
  @media (max-width: 767px) {
    .show
    {
      margin-left: 0!important;
    }
    .hide
    {
      margin-left: 250px!important;
    }
  }

</style>