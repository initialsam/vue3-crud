<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import ConfirmDeletePopup from "../../components/ConfirmDeletePopup.vue";

const beachCollection = ref([]);
const itemToDeleteId = ref([0]);

const router = useRouter();
let deleteModal;
onMounted(() => {
  deleteModal = new window.bootstrap.Modal(
    document.getElementById("deleteModal"),
    {
      backdrop: true,
    }
  );
  axios.get("http://localhost:5036/Beach").then((response) => {
    beachCollection.value = response.data;
  });
});

const navigateToAddPage = () => {
  router.push("/add");
};

const openDeleteModal = (id) => {
  itemToDeleteId.value = id;
  deleteModal.show();
};

const confirmDelete = () => {
  axios
    .delete(`http://localhost:5036/Beach/${itemToDeleteId.value}`)
    .then(() => {
      beachCollection.value = beachCollection.value.filter(
        (_) => _.id !== itemToDeleteId.value
      );
      itemToDeleteId.value = 0;
      deleteModal.hide();
    });
};
</script>
<template>
  <div class="container">
    <div class="row mt-2">
      <div class="col col-md-4 offset-md-4">
        <button
          type="button"
          @click="navigateToAddPage"
          class="btn btn-primary"
        >
          Add
        </button>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="item in beachCollection" :key="item.id">
        <div class="card">
          <img :src="item.imageUrl" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ item.beachName }}</h5>
            <p class="card-text">Location: {{ item.place }}</p>
            <router-link class="btn btn-primary" :to="`/edit/${item.id}`"
              >Edit</router-link
            >
            <button
              type="button"
              @click="openDeleteModal(item.id)"
              class="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <ConfirmDeletePopup
      @confirmdelete-click="confirmDelete"
    ></ConfirmDeletePopup>
  </div>
</template>
