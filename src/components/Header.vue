<template>
  <div class="header-container">
    <h1>
      Kanban Board
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
  .header-container {
    background-color: dodgerblue;
    height: 7rem;
    width: 100%;
  }
</style>