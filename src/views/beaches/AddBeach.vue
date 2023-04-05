<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";
let newBeach = reactive({
  beachName: "",
  place: "",
  imageUrl: "",
});
const router = useRouter();
const addBeach = () => {
  axios.post("http://localhost:5036/Beach", newBeach).then(() => {
    router.push("/");
  });
};
</script>

<template>
  <div class="container mt-4">
    <form @submit.prevent="addBeach">
      <legend>Add New Beach & It's Location</legend>
      <div class="mb-3">
        <label for="txtBeachName" class="form-label">Beach Name</label>
        <input
          type="text"
          v-model="newBeach.beachName"
          class="form-control"
          id="txtBeachName"
        />
      </div>
      <div class="mb-3">
        <label for="txtPlace" class="form-label">Place</label>
        <input
          type="text"
          v-model="newBeach.place"
          class="form-control"
          id="txtPlace"
        />
      </div>
      <div class="mb-3">
        <label for="txtImageUrl" class="form-label">Image URL</label>
        <input
          type="text"
          v-model="newBeach.imageUrl"
          class="form-control"
          id="txtImageUrl"
        />
      </div>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>
