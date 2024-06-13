<template>
  <div class="home">
    <h1>
      {{ appName }}
    </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BodyTitle',
  computed: {
    ...mapGetters('appinfos', {
      appName: 'appName'
    })
  }
}
</script>

<style>

</style>