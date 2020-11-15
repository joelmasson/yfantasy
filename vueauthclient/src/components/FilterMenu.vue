import Filter from 'Filter';
<template>
    <div>
        <div v-for="filter in filters" :key="filter.id">
            <Fitler :filter="filter"></Fitler>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FilterMenu',
  data () {
    return {

    }
  }
}
</script>
