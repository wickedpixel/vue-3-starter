<template>
    <div class="inner-box" :data-loading="module.loading_data">
      Results Form


    </div>
  </template>
  
  <script setup>
  /*




  */

import { provide, ref, reactive, onMounted, watch } from 'vue'
import axios from 'axios';

var $ = jQuery;
  
let module = reactive({
  loading_data: false,
});

provide('main_module', module);  

function saveData(){
  var data = new FormData();

  data.append('action', "api_call");
  data.append('api_action', "save_table");
  data.append('order_id', 10);


  module.loading_data = true;
  axios.post(ajax_url, data).then((response) => {
    let data = response.data;
    console.log(data);
    if(data.status && data.status == "success"){

    }

    module.loading_data = false;
  });
}


onMounted(() => {
  console.log("mounted");
});

</script>

<style lang="scss">


</style>
  