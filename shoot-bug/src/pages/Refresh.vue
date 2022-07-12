<template>
  <div></div>
</template>

<script>
export default {
    beforeRouteEnter (to, from, next) {
        next((vm)=>{
            if (Object.keys(to.params || {}).length) {
                vm.$router.replace({
                    name: from.name,
                    params: to.params,
                    query: to.query
                })
            }else{
                vm.$router.replace({
                    path: from.path,
                    query: to.query
                })
            }
        })
    }
}
</script>

<style>

</style>