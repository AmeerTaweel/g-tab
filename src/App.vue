<template>
  <div id="app" class="yellow-gradient">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  user-select: none;
}

/* Icons */

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Chrome. */
  text-rendering: optimizeLegibility;
}

.normal-icon {
  font-size: 24px;
}

.large-icon {
  font-size: 48px;
}

/* Text */

.text-accent {
  color: #f8b500;
}

/* Backgrounds */

.yellow-gradient {
  background: #fceabb;  /* fallback for old browsers */
  background: linear-gradient(to bottom right, #f8b500, #fceabb);
}

.black-gradient {
  background: #000000;  /* fallback for old browsers */
  background: linear-gradient(to bottom right, #434343, #000000);
}

/* Other */

.pointer {
  cursor: pointer;
}

.cursor-default {
  cursor: default;
}
</style>
