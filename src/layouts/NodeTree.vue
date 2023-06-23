<template>
    <div :style="nodeMargin" >
      
    
      <div v-if="hasChildren">
        <div class="menuItem">
            <a-button type="primary">{{ node.title }}</a-button>
        
        </div>
        <TreeNode
          v-for="child in node.items"
          :key="child.key"
          :node="child"
          :spacing="spacing + 10"
        />
      </div>
      <div v-else >
        <b-alert show class="d-flex justify-content-between mb-1">
        {{ node.title }}
        <span class="fas fa-angle-right" />
        </b-alert>
      </div>
    </div>
  </template>
<script lang="ts">
export default {
  name: 'TreeNode',
  props: {
    node: {
      type: Object,
      required: true
    },
    spacing: {
      type: Number,
      default: 0
    }
  },
  computed: {
    nodeMargin() {
      return {
        'margin-left': `${this.spacing}px`
      }
    },
    hasChildren() {
      const { items } = this.node
      return items && items.length > 0
    }
  }
}
</script>
<style>
.menuItem{
    background-color: cadetblue;
}
</style>