<template>
  <div class="home">
    <div id="cover">
      <img src="../assets/cover.jpg" />
      <div id="diff">{{ loading ? "Loading" : `${payload.diff} คน` }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

interface Payload {
  group9arm: number;
  groupKob: number;
  diff: number;
}

export default defineComponent({
  name: "Home",
  props: {},
  data() {
    return {
      loading: true,
      payload: {} as Payload,
    };
  },
  mounted() {
    axios
      .get("https://raw.githubusercontent.com/narze/9arm-vs-kob/main/data.json")
      .then((response) => {
        this.payload = response.data as Payload;
        this.loading = false;
      });
  },
});
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
#cover {
  position: relative;
}

#cover img {
  width: 100%;
  height: auto;
}

#diff {
  position: absolute;
  bottom: 30%;
  right: 10%;
  font-size: 6rem;
}

@media screen and (max-width: 1280px) {
  #diff {
    bottom: 30%;
    right: 10%;
    font-size: 5rem;
  }
}

@media screen and (max-width: 1080px) {
  #diff {
    bottom: 30%;
    right: 8%;
    font-size: 4rem;
  }
}

@media screen and (max-width: 960px) {
  #diff {
    bottom: 30%;
    right: 8%;
    font-size: 3rem;
  }
}

@media screen and (max-width: 720px) {
  #diff {
    bottom: 25%;
    right: 5%;
    font-size: 2rem;
  }
}

@media screen and (max-width: 600px) {
  #diff {
    bottom: 20%;
    right: 5%;
    font-size: 2rem;
  }
}

@media screen and (max-width: 400px) {
  #diff {
    bottom: 15%;
    right: 5%;
    font-size: 1.5rem;
  }
}
</style>
