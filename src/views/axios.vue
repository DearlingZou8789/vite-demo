<template>
  <div>axios</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../utils/axios'
export default defineComponent({
  setup() {
    axios
      .get('')
      .then((res: Object) => {
        console.log(res)
      })
      .catch((err: Object) => {
        console.error(err)
      })
  }
})
</script>

<style lang="scss" scoped></style>
