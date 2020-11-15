<template>
  <div>
    <label :for="type">{{ type }}</label>
    <select :name="type">
      <option v-for="option in options" :value="option.value" :key="option.id">
        {{ option.value }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'Fitler',
  props: {
    filter: 'filter'
  },
  data () {
    return {
      options: [],
      type: ''
    }
  },
  methods: {
    changeFilter: function () {
    }
  }
}
</script>
