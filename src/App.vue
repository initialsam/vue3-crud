<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useCounterStore } from "./stores/counter.js";

const store = useCounterStore();
const clickAdd = () => {
  store.increment();
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Beautiful Beaches</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="`/`">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="`/CountView`"
              >CountView</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <h3>{{ store.count }}</h3>
    <h5>{{ store.doubleCount }}</h5>
    <button @click="clickAdd">A</button>
    <RouterView />
  </div>
</template>

<style scoped></style>
