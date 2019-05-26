<template>
  <div class="tab-group">
    <div>
      <div @click="toggleActions">
        <h2 class="text-justify">{{group.name}}</h2>
        <p class="text-justify">{{group.tabs.length}} Tab<span v-if="group.tabs.length > 1">s</span></p>
      </div>
      <div v-if="areActionsShown" class="container cursor-default">
        <div class="row">
          <div v-for="(action, index) in actions" :key="index" @click="action.runnable()" class="col-6 text-left">
            <div class="m-2 pointer">
              <h3>{{action.head}}</h3>
              <p>{{action.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabGroup',
  data () {
    return {
      areActionsShown: false,
      actions: [{
        head: `Open`,
        text: `this group in a new window.`,
        runnable: this.toggleActions
      }, {
        head: `Add`,
        text: `this group to the tabs in this window.`,
        runnable: this.toggleActions
      }, {
        head: `Replace`,
        text: `this group with the tabs in this window.`,
        runnable: this.toggleActions
      }, {
        head: `Open`,
        text: `this group in a new incognito window.`,
        runnable: this.toggleActions
      }]
    }
  },
  props: {
    group: Object
  },
  methods: {
    toggleActions () {
      this.areActionsShown = !this.areActionsShown
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
