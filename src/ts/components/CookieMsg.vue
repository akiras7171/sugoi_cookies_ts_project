<template>
  <div v-bind:id="parentId">
      <span v-bind:id="compId" class="cookie-msg">
          {{name}}
      </span>
      <span v-bind:id="valueId" v-bind:class="[{'cookie-value':true}, {bgGreen:hasValue}]">
          {{value}}
      </span>
  </div>
</template>

<script>
const NO_COOKIE_MSG='NO COOKIE FOUND';
export default {
  props:{
    name :{
      type:String, required:false
    },
    valueId:{
      type:String, required:false
    },
    compId:{
      type:String, required:false
    },
    parentId:{
      type:String, required:false
    }
  },
  computed: {
    hasValue: function (){
      return this.$store.getters.has(this.name);
    },
    value: function (){
      return this.$store.getters.cookie(this.name);
    }
  },
  mounted: function(){
    this.$emit('get:cookies');
  }
}
</script>

<style scoped>
* {
  font-size: 18px;
}
.cookie-value{
  font-weight: bold; 
  word-wrap: break-word;
}
</style>