<script setup>
    //pinia state management
    import {useDataStore} from "@/stores/DataStore.js";
    const DataStore = useDataStore();
    DataStore.getHotelsData();//民宿資料
</script>

<template id="popularHotel">
    <section class="popularHotel">
      <div><!--1-->
            <h3 class="title fBold f28">熱門住宿</h3>
            <div class="popularHotelButtonsZone">
                <input type="radio" name="popularHotelRadios" id="popularHotelPrev" >
                <input type="radio" name="popularHotelRadios" id="popularHotelNext">
                <label  for="popularHotelPrev"><img src="../assets/img/Vector_arrow.png" class="radioLabel rotate180"></label>
                <label  for="popularHotelNext"><img src="../assets/img/Vector_arrow.png" class="radioLabel"></label>
            </div>    
      </div>
      <div class="hotelContent"> <!--2-->     
            <div v-for="(item,key) in DataStore.Hotelsdata.slice(9,13)" :key="item.Id">
               <img :src="item.Picture1" v-if="item.Picture1" class="imgIncard">
               <img src="../assets/img/unsplash_L6xHmv2R3G4@2x.png" v-else class="imgIncard">
               <h4 class="topictag f20">{{item.Name}}</h4>
               <div class="locationtag">
                    <img style="margin-right:10px;" src="../assets/img/Vector_bluemap.png">
                    <span class="f16">{{item.Region}}</span>
                </div>
                <span class="annualtag fBold">旅宿</span>
            </div> 
      </div>
      <div class="linkToRouterHotels fBold">
        <RouterLink  to="/cardshotel"
            style="text-decoration:none;">瀏覽更多　→　</RouterLink>
       </div>   
      
    </section>
</template>

