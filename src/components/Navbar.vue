<script setup>

</script>

<template>
  <div id="allTheNav">
    <input type="checkbox" id="navi-toggle" class="checkbox" />
    <label for="navi-toggle" class="button">
      <span class="icon">&nbsp;</span>
    </label>
    <div class="background">&nbsp;</div>

    <nav class="nav">
      <ul class="list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About me</router-link></li>
        <li><router-link to="/Projets">Projets</router-link></li>
        <li><router-link to="/Experiences">Experiences</router-link></li>
      </ul>
    </nav>
  </div>

</template>

<style>

.checkbox {
  display: none;
}

.button {
  position: fixed;
  background-color: rgb(0, 127, 255);
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  top: 5vh; 
  left: 2vw; 
  z-index: 2000;
  text-align: center; 
  cursor: pointer;
}

/* @media screen and (min-width: 700px) { */
.background {
  position: fixed;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  margin-top: -10vh; 
  margin-left: -20vw;
  background: rgb(0, 127, 255);
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
}
/* } */

.nav {
  position: fixed;
  height: 300px;
  top: 0;
  right: -60vw;
  z-index: 1500;
  opacity: 0;
  width: 0;
  transition: all 0.8s;
}

.list {
  position: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 13%;
  margin-left: 5%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 8%;
}

.list a {
  position: flex;
  color: black;
  font-weight: bold;
  font-size: 175%;
  text-decoration: none;
}

.list a:hover{
  position: flex;
  color: white;
  border-radius: 20px;
}

.checkbox:checked ~ .background {
  transform: scale(23);
}

.checkbox:checked ~ .nav {
  opacity: 1;
  width: 100%;
  right: 0;
}

.icon {
  position: flex;
  margin-top: 50%;
  margin-left: 50%;
  transform: translate(-50%, -50%);
}

.icon, .icon::before, .icon::after {
  width: 3rem;
  height: 2px;
  background-color: black;
  display: inline-block;
}

.icon::before, .icon::after {
  content: "";
  position: absolute;
  left: 0;
  transition: all 0.2s;
}

.icon::before {
  top: -0.8rem;
}

.icon::after {
  top: 0.8rem;
}

.button:hover icon:before {
  top: -1rem;
}

.button:hover icon::after {
  top: 1rem;
}

.checkbox:checked + .button .icon {
  background-color: transparent;
}

.checkbox:checked + .button .icon::before {
  top: 0;
  transform: rotate(135deg);
}
.checkbox:checked + .button .icon::after {
  top: 0;
  transform: rotate(-135deg);
}

</style>