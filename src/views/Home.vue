<template>
  <div class="home">
    <div class="d-flex justify-content-between align-items-center black-gradient text-accent shadow p-2">
      <h1 class="ml-2 mr-5">gTab</h1>
      <div class="mx-5" />
      <i class="material-icons large-icon ml-5 mr-2 p-2 pointer">add</i>
    </div>
    <div v-if="groups" class="d-flex flex-column secondary-text">
      <div v-for="(group, index) in groups" :key="index" class="mx-3">
        <hr v-if="index" class="border border-dark">
        <tab-group :group="group" :index="index" class="py-3 pointer"/>
      </div>
    </div>
    <p v-else>No tab groups found.</p>
  </div>
</template>

<script>
// @ is an alias to ./src
import TabGroup from '@/components/TabGroup.vue'

export default {
  name: `home`,
  data () {
    return {
      groups: this.$store.state.groups
    }
  },
  methods: {
    updateGroups () {
      this.groups = this.$store.state.groups
    }
  },
  computed: {
    storeGroups(){
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
