<template>
  <TheNavbar/>
  <div class="app__container"><router-view></router-view></div>
  <TheFooter/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloPage from '@/pages/HelloPage.vue';
import TheNavbar from '@/components/TheNavbar/TheNavbar.vue';
import TheFooter from '@/components/TheFooter/TheFooter.vue';

@Options({
  components: {
    TheFooter,
    HelloPage,
    TheNavbar
  },
})
export default class App extends Vue {
  user: any = null;

  async mounted(): Promise<void> {
    const resp = await fetch('http://localhost:3000/users/1')
      .then((response) => response.json());
    this.user = resp || null;
  }

  get userFullName() {
    return this.user
      ? `Default user: ${this.user.first_name} ${this.user.last_name}`
      : ''
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.app__container{
  width: 100%;
  height: 86vh;
}

</style>
