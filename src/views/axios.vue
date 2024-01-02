<template>
  <div>axios</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
  name: 'AxiosView',
  setup() {
    axios
      .get('')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }
})
</script>

<style lang="scss" scoped></style>
