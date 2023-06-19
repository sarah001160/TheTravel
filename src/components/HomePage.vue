<script setup>
    import {ref, onMounted, computed} from 'vue';
    import Scene from './Scene.vue';
    import recentActivity from './RecentActivity.vue';
    import HotSpots from './HotSpots.vue';
    import PopularActivity from './PopularActivity.vue';
    import PopularCity from './PopularCity.vue';
    import PopularFood from './PopularFood.vue';
    import PopularHotel from './PopularHotel.vue';

</script>
<template>
  <div id="HomePage" >
    <Scene></Scene>
    <recent-activity></recent-activity>
    <hot-spots></hot-spots>
    <popular-activity></popular-activity>
    <popular-city></popular-city>
    <popular-food></popular-food><!--尚未建立api-->
    <popular-hotel></popular-hotel><!---尚未設定CSS-->
  
 

    
  </div>
</template>

<style>
/*see main.scss*/
</style>


