<template>
  <div class="home">
    <div class="d-flex justify-content-between align-items-center black-gradient text-accent shadow p-2">
      <h1 class="ml-2 mr-5">gTab</h1>
      <div class="mx-5" />
      <i class="material-icons large-icon ml-5 mr-2 p-2 pointer" @click="createNewGroup">add</i>
    </div>
    <div v-if="groups" class="d-flex flex-column secondary-text">
      <div v-for="(group, index) in groups" :key="index" class="mx-3">
        <hr v-if="index" class="border border-dark">
        <tab-group :group="group" :index="index" class="py-3 pointer"/>
      </div>
    </div>
    <div v-show="newGroup.isVisible" class="mx-3">
      <hr class="border border-dark">
      <div class="d-flex justify-content-between align-items-center p3">
        <div>
          <input class="h2 w-100 text-justify transparent-input" v-model="newGroup.name" @keyup.enter="saveNewGroup" placeholder="New Group Name"/>
          <p class="text-justify">0 Tabs</p>
        </div>
        <i class="material-icons large-icon p-2 pointer" @click="saveNewGroup">check_circle</i>
      </div>
    </div>
    <p v-if="!groups.length && !newGroup.isVisible">No tab groups found.</p>
  </div>
</template>

<script>
// @ is an alias to ./src
import TabGroup from '@/components/TabGroup.vue'
import * as types from '../mutation-types'

export default {
  name: `home`,
  data () {
    return {
      groups: this.$store.state.groups,
      newGroup: {
        isVisible: false,
        name: ``
      }
    }
  },
  methods: {
    updateGroups () {
      this.groups = this.$store.state.groups
    },
    createNewGroup () {
      this.newGroup.isVisible = true
      window.setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight)
      }, 10)
    },
    saveNewGroup () {
      this.newGroup.isVisible = false
      this.$store.commit(types.CREATE_GROUP, this.newGroup.name)
      this.newGroup.name = ``
    }
  },
  computed: {
    storeGroups () {
      return this.$store.state.groups
    }
  },
  watch: {
    storeGroups: `updateGroups`
  },
  components: {
    TabGroup
  }
}
</script>

<style lang="sass" scoped>
.transparent-input
  border: none
  background-color: transparent

::placeholder
  color: #212121
</style>
