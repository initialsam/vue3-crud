<!-- 
<script>
export default {
  // data() 返回的屬性將會成為響應式的狀態
  // 並且暴露在 `this` 上
  data() {
    return {
      count: 200,
      name: "Jack + 10",
    };
  },

  // methods 是一些用來更改狀態與觸發更新的函數
  // 它們可以在範本中作為事件監聽器繫結
  methods: {
    increment() {
      this.count = this.count + 10;
      this.name = "Anna";
    },
  },

  // 生命週期鉤子會在元件生命週期的各個不同階段被呼叫
  // 例如這個函數就會在元件掛載完成後被呼叫
  mounted() {
    console.log(`The initial count is ${this.count}.`);
  },
};
</script> -->

<script setup>
//setup 語法糖 可省略 export default 跟 data() { return }
import { computed } from "@vue/reactivity";
import { ref, onMounted, reactive, watch } from "vue";

// 響應式狀態
// ref 可以放入任何型別
// 不能用 watch 監控內容改變
const count = ref(1);
const name = ref("Jack1");
const refdata = ref({
  count: 2,
  name: "Jack2",
});

// reactive 只能放 object 跟 array
const data = reactive({
  count: 3,
  name: "Jack3",
});

// 用來修改狀態、觸發更新的函數
function increment() {
  //ref 要改名子 就要.value
  count.value = count.value + 2;
  name.value = "Anna 2";
}
const incrementData = () => {
  //reactive 不需要.value
  data.count = data.count + 4;
  data.name = "Ben 4";
  //觸發get
  console.log(plus.value);
  //觸發set
  plus.value = plus.value;
};
const incrementRefData = () => {
  //ref 就要.value
  refdata.value.count = refdata.value.count + 6;
  refdata.value.name = "CC 6";
};

const com = computed(() => {
  if (data.count > 20) {
    return `${data.name} > 20`;
  }
});

const plus = computed({
  get: () => {
    return count.value + 300;
  },
  set: (value) => {
    //count.value = count.value + 10000;
    count.value = value + 10000;
  },
});

// 生命週期鉤子
// https://cn.vuejs.org/guide/essentials/lifecycle.html
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
watch(count, () => {
  console.log("count 被改變了");
});
watch(name, () => {
  console.log("name 被改變了");
});
watch(data, () => {
  console.log("data 被改變了");
});
watch(refdata, () => {
  //ref不能被watch 硬要做可以加 deep true
  console.log("refdata 被改變了");
});
</script>

<template>
  <button @click="increment">
    {{ name }} Count is : {{ count }} {{ count > 20 ? `${name} > 20` : "" }}
  </button>
  <button @click="incrementData">
    {{ data.name }} Count is : {{ data.count }} {{ com }}
  </button>
  <button @click="incrementRefData">
    {{ refdata.name }} refdata is : {{ refdata.count }}
  </button>
</template>
