<template>
  <div id="app" class="yellow-gradient">
    <router-view/>
  </div>
</template>

<script>
import * as types from './mutation-types'

export default {
  name: `app`,
  created () {
    chrome.storage.sync.get([`groups`], (result) => {
        this.$store.commit(types.SET_GROUPS, result.groups)
    })
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: black
  user-select: none

// Icons:

.material-icons
  font-family: 'Material Icons'
  font-weight: normal
  font-style: normal
  display: inline-block
  line-height: 1
  text-transform: none
  letter-spacing: normal
  word-wrap: normal
  white-space: nowrap
  direction: ltr
  -webkit-font-smoothing: antialiased // Support for all WebKit browsers.
  text-rendering: optimizeLegibility // Support for Chrome.

.normal-icon
  font-size: 24px

.large-icon
  font-size: 48px

// Text:

.text-accent
  color: #f8b500

// Backgrounds:

.yellow-gradient
  background: #fceabb  // Fallback for old browsers.
  background: linear-gradient(to bottom right, #f8b500, #fceabb)

.black-gradient
  background: #000000  // Fallback for old browsers.
  background: linear-gradient(to bottom right, #434343, #000000)

// Other:

.pointer
  cursor: pointer

.cursor-default
  cursor: default
</style>
