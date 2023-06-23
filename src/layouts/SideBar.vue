<template>
  <div>
  
      <NodeTree v-for="node in menuData" :key="node.id" :node="node" />
  
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import NodeTree from './NodeTree.vue';
export default defineComponent({
  props: ['menu'],
  components:{
    NodeTree
  },
 data:function () {
    const menuData=this.menu
  // const menu=[
  // {
  //         id: 1,
  //         label: 'Foods',
  //         children: [
  //           {
  //             id: 2,
  //             label: 'Fruits',
  //             children: [
  //               {
  //                 id: 3,
  //                 label: 'Banana',
  //                 children:[
  //                     {
  //                       id:31,
  //                       label:'Big'
  //                     },
  //                     {
  //                       id:32,
  //                       label:'Medium'
  //                     },
  //                     {
  //                       id:32,
  //                       label:'Small'
  //                     }
  //                 ]
  //               },
  //               {
  //                 id: 4,
  //                 label: 'Apple'
  //               },
  //               {
  //                 id: 5,
  //                 label: 'Strawberry'
  //               }
  //             ]
  //           },
  //           {
  //             id: 6,
  //             label: 'Vegetables',
  //             children: [
  //               {
  //                 id: 7,
  //                 label: 'Carrot'
  //               },
  //               {
  //                 id: 8,
  //                 label: 'Lettuce'
  //               },
  //               {
  //                 id: 9,
  //                 label: 'Potato'
  //               }
  //             ]
  //           }
  //         ]
  //       },
  //       {
  //         id: 10,
  //         label: 'Drinks',
  //         children: [
  //           {
  //             id: 11,
  //             label: 'Beers',
  //             children: [
  //               {
  //                 id: 12,
  //                 label: 'Budweiser'
  //               },
  //               {
  //                 id: 13,
  //                 label: 'Heineken'
  //               }
  //             ]
  //           },
  //           {
  //             id: 14,
  //             label: 'Wines'
  //           },
  //           {
  //             id: 15,
  //             label: 'Whiskey'
  //           }
  //         ]
  //       }
  // ]
  return {
    menuData
  }
 }
})
</script>