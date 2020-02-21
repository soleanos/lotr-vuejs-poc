<template>
  <div class="home">
    <div
      v-for="(item, index) in characters"
      v-bind:item="item"
      v-bind:index="index"
      v-bind:key="item.id">
      
      <div>
        <md-card>
          <md-card-header>
            <div class="md-title"> {{item.name}}</div>
          </md-card-header>

          <md-card-content>
              Race : {{item.race}}  <br>
              Genre : {{item.gender}} <br>
              Date de naissance : {{item.birth}} <br>
              Royaume : {{item.realm}}
          </md-card-content>

          <md-card-actions>
            <md-button>Ajouter à l'équipe</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      characters: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    const instance = axios.create({
      baseURL: 'https://the-one-api.herokuapp.com/v1',
      timeout: 1000,
      headers: {'Authorization': 'Bearer R93Stw7XCYmHuDZgHp9I'}
    });

    instance.get('/character').then(response => {
     this.characters = response.data.docs
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
