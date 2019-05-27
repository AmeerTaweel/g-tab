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
import { constants } from 'crypto';
export default {
  name: 'TabGroup',
  data () {
    return {
      areActionsShown: false,
      actions: [{
        head: `Open`,
        text: `this group in a new window.`,
        runnable: () => {this.openInNewWindow(false)}
      }, {
        head: `Add`,
        text: `this group to the tabs in this window.`,
        runnable: this.openTabsInCurrentWindow
      }, {
        head: `Replace`,
        text: `this group with the tabs in this window.`,
        runnable: this.replaceTabsInCurrentWindow
      }, {
        head: `Open`,
        text: `this group in a new incognito window.`,
        runnable: () => {this.openInNewWindow(true)}
      }]
    }
  },
  props: {
    group: Object
  },
  methods: {
    toggleActions () {
      this.areActionsShown = !this.areActionsShown
    },
    openInNewWindow (isIncognito) {
      chrome.windows.create({
        url: this.group.tabs,
        focused: true,
        incognito: isIncognito,
        type: `normal`
      })
    },
    openTabsInCurrentWindow(){
      for(let i = 0; i < this.group.tabs.length; i++){
        chrome.tabs.create({
          url: this.group.tabs[i]
        })
      }
    },
    replaceTabsInCurrentWindow(){
      chrome.tabs.query({currentWindow: true}, (tabs) => {
        if(tabs.length > this.group.tabs.length){
          const tabIds = tabs.map(tab => tab.id)
          chrome.tabs.remove(tabIds.splice(this.group.tabs.length, tabs.length))
        }
        for(let i = 0; i < this.group.tabs.length; i++){
          if(i < tabs.length){
            chrome.tabs.update(tabs[i].id, {
              url: this.group.tabs[i]
            })
          } else {
            chrome.tabs.create({
              url: this.group.tabs[i]
            })
          }
        }
      })
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
