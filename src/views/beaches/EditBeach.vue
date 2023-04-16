<script setup>
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

import { storeToRefs } from "pinia";
import { useCounterStore } from "../../stores/counter.js";

const store = useCounterStore();
const { increment } = store;
const { count, doubleCount } = storeToRefs(store);

const clickAdd = () => {
  increment();
};

let beachToUpdate = reactive({
  id: 0,
  beachName: "",
  place: "",
  imageUrl: "",
});

const router = useRouter();
const route = useRoute();

onMounted(() => {
  axios
    .get(`http://localhost:5036/Beach/${route.params.id}`)
    .then((response) => {
      beachToUpdate.id = response.data.id;
      beachToUpdate.beachName = response.data.beachName;
      beachToUpdate.place = response.data.place;
      beachToUpdate.imageUrl = response.data.imageUrl;
    });
});

const updateBeach = () => {
  axios.put("http://localhost:5036/Beach", beachToUpdate).then(() => {
    router.push("/");
  });
};
</script>
<template>
  <div class="container mt-4">
    <form @submit.prevent="updateBeach">
      <legend>Update Beach & It's Location</legend>
      <div class="mb-3">
        <label for="txtBeachName" class="form-label">Beach Name</label>
        <input
          type="text"
          v-model="beachToUpdate.beachName"
          class="form-control"
          id="txtBeachName"
        />
      </div>
      <div class="mb-3">
        <label for="txtPlace" class="form-label">Place</label>
        <input
          type="text"
          v-model="beachToUpdate.place"
          class="form-control"
          id="txtPlace"
        />
      </div>
      <div class="mb-3">
        <label for="txtImageUrl" class="form-label">Image URL</label>
        <input
          type="text"
          v-model="beachToUpdate.imageUrl"
          class="form-control"
          id="txtImageUrl"
        />
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
      <h3>{{ count }}</h3>
      <h5>{{ doubleCount }}</h5>
      <button type="button" @click="clickAdd">B</button>
    </form>
  </div>
</template>
