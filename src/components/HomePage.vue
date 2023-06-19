<script setup>
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
    <popular-food></popular-food>
    <popular-hotel></popular-hotel>
    <!--全局元件Footerglobal.vue-->
    <footerglobal></footerglobal>


  </div>
</template>

<style>
/*see main.scss*/
</style>


