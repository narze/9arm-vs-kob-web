<template>
  <div class="home">
    <div id="cover">
      <img src="../assets/cover.jpg" />
      <div id="diff">
        <span v-if="payload.diffChanged">
          <span v-if="payload.diffChanged < 0" id="down">&#x2B07;</span>
          <span v-else-if="payload.diffChanged > 0" id="up">&#x2B06;</span>
          <span v-else-if="payload.diffChanged == 0" id="equal">=</span>
          <span id="diffChanged"
            >{{ payload.diffChanged > 0 ? "+" : ""
            }}{{ payload.diffChanged }}</span
          ></span
        >
        {{ loading ? "Loading" : `${payload.diff} คน` }}
      </div>
    </div>
    <div>
      {{ loading ? "" : `อัพเดตล่าสุด : ${formattedUpdatedAt}` }}
    </div>
    <div>
      <a href="https://9arm-vs-kob-api.vercel.app/data.json">API</a>
      | <a href="https://github.com/narze/9arm-vs-kob-web">GitHub</a> |
      <a href="https://github.com/narze/9arm-vs-kob">Scraper</a>
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
  updatedAt: string;
  diffChanged: number;
}

export default defineComponent({
  name: "Home",
  props: {},
  data() {
    return {
      loading: true,
      payload: {} as Payload,
      formattedUpdatedAt: "",
    };
  },
  mounted() {
    axios
      .get("https://9arm-vs-kob-api.vercel.app/data.json")
      .then((response) => {
        this.payload = response.data as Payload;

        const time = new Date(this.payload.updatedAt);
        this.formattedUpdatedAt =
          ("0" + time.getDate()).slice(-2) +
          "/" +
          ("0" + (time.getMonth() + 1)).slice(-2) +
          "/" +
          time.getFullYear() +
          " " +
          ("0" + time.getHours()).slice(-2) +
          ":" +
          ("0" + time.getMinutes()).slice(-2) +
          ":" +
          ("0" + time.getSeconds()).slice(-2);

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

#down {
  color: #ed1c24;
}
#up {
  color: #42b983;
}
#equal {
  color: #f8f826;
}

#diff {
  position: absolute;
  bottom: 30%;
  right: 10%;
  font-size: 6rem;
}

#diffChanged {
  font-size: 1rem;
  margin-left: -1rem;
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
  #diffChanged {
    font-size: 0.5rem;
    margin-left: -0.5rem;
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
