<template>
  <div>
    <h2>Dashboard</h2>
    <p>Name: {{ user.name }}</p>
    <ul>
      <li v-for="league in user.leagues" :key="league.id">
        <router-link :to="'/game/' + league.id">
          <img src="league.logo" />
          <h2>{{league.name}}</h2>
          <div>
            {{league.year}} | {{league.standing}}
          </div>
        </router-link>
      </li>
    </ul>
   </div>
</template>
<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'Dashboard',
  data () {
    return {
      user: {
        name: 'Jesse',
        leagues: [
          {
            id: 1,
            logo: '',
            name: 'test',
            year: 2020,
            standing: 2
          }
        ]
      }
    }
  },
  methods: {
    getUserData: function () {
      let self = this
      axios
        .get('/api/user')
        .then((response) => {
          console.log(response)
          self.$set(this, 'user', response.data.user)
        })
        .catch((errors) => {
          console.log(errors)
          router.push('/')
        })
    }
  },
  mounted () {
    // this.getUserData()
  }
}
</script>
