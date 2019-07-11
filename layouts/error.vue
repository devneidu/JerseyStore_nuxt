<template>
    <div>
        <div v-if="error.statusCode >= 500" class="text-center">
          <img src="/server-error.png" alt="server error image" class="img-fluid">
          <div class="alert alert-danger mt-3">
            <strong>Please connect to a network</strong>
          </div>
        </div>
        <div v-if="error.statusCode == 404" class="text-center">
          <img src="/404.png" alt="page not found error image" class="img-fluid">
          <div class="alert alert-danger mt-3">
            <strong>Page not found</strong>
          </div>
        </div>
    </div>
</template>

<script>
export default {
props: {
    error: {
      type: Object,
      default: null
    }
  },
}
</script>

<style>

</style>
