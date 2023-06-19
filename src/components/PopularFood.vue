<script setup>
 //pinia state management
    import {useDataStore} from "@/stores/DataStore.js";
    const DataStore = useDataStore();
    DataStore.getFoodsData();
</script>
<template>
    <section class="popularFood">
        <div><!--1-->
            <h3 class="title fBold f28">熱門美食</h3>
            <div class="PopularFoodbuttonsZone">
                <input type="radio" name="rs" id="one" >
                <input type="radio" name="rs" id="one">
                <label  for="one"><img src="../assets/img/Vector_arrow.png" class="radioLabel rotate180"></label>
                <label  for="one"><img src="../assets/img/Vector_arrow.png" class="radioLabel"></label>
            </div>  
        </div>
        <div><!--2-->
            <div v-for="(item,key) in DataStore.Foodsdata.slice(0,4)" :key="index"><!--vfor-->
                <img :src="item.Picture1" v-if="item.Picture1" class="imgIncard">
                <img src="../assets/img/unsplash_L6xHmv2R3G4@2x.png" v-else class="imgIncard">
                <h4 class="topictag f20">{{item.Name}}</h4>
                <div class="locationtag">
                    <img style="margin-right:10px;" src="../assets/img/Vector_bluemap.png">
                    <span class="f16">{{item.Region}}</span>
                </div>
                <span class="annualtag fBold">小吃</span>
            </div>
            
        </div>
        <div class="linkToRouterFood fBold">
            <RouterLink  to="/cardsfood"
             style="text-decoration:none;">瀏覽更多　→　
            </RouterLink>
       </div>   
          
    </section>

</template>
<style>
/* see main.scss*/
</style>