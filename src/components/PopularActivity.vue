<script setup>
    //pinia state management
    import {useDataStore} from "@/stores/DataStore.js";
    const DataStore = useDataStore();
    DataStore.getToursData();//活動資料

</script>

<template id="popularActivity">
    <section class="popularActivity">
      <div><!--1-->
            <h3 class="title fBold f28">熱門活動</h3>
            <div class="popularActivityButtonsZone">
                <input type="radio" name="popularActivityRadios" id="popularActivityPrev" >
                <input type="radio" name="popularActivityRadios" id="popularActivityNext">
                <label  for="popularActivityPrev"><img src="../assets/img/Vector_arrow.png" class="radioLabel rotate180"></label>
                <label  for="popularActivityNext"><img src="../assets/img/Vector_arrow.png" class="radioLabel"></label>
            </div>    
      </div>
      <div><!---2-->
        <div class="popularActivityContentforPC"><!--PC、tab寬度下出現--->
            <div v-for="(item,key) in DataStore.Toursdata.slice(0,1)" :key="item.Id" ><!---v-for0~1-->
                <img :src="item.Picture1" v-if="item.Picture1" class="imgIncard">
                <img src="../assets/img/unsplash_L6xHmv2R3G4@2x.png" v-else class="imgIncard">
                <h4 class="topictag f28">{{item.Name}}</h4>
                <div class="locationtag">
                    <img style="margin-right:10px;" src="../assets/img/Vector_bluemap.png">
                    <span class="f20">{{item.Region}}</span>
                </div>
                <p>
                    {{item.Description}}
                </p>
                <span class="annualtag fBold">景點</span>
            </div>
            <div><!--內含4個小的框--->
                <div v-for="(item,key) in DataStore.Toursdata.slice(11,15)" :key="item.Id">
                    <img :src="item.Picture1" v-if="item.Picture1" class="imgIncard">
                    <img src="../assets/img/unsplash_L6xHmv2R3G4@2x.png" v-else class="imgIncard">
                    <h4 class="topictag f20">{{item.Name}}</h4>
                    <div class="locationtag">
                        <img style="margin-right:10px;" src="../assets/img/Vector_bluemap.png">
                        <span class="f16">{{item.Region}}</span>
                    </div>
                    <span class="annualtag fBold">景點</span>
                </div>
            </div>
        </div>
         <div class="popularActivityContentforMobile"><!--mobile寬度下出現--->
            <div v-for="(item,key) in DataStore.Toursdata.slice(9,13)" :key="item.Id">
               <img :src="item.Picture1" alt="activitypictures" v-if="item.Picture1" class="imgIncard">
               <span class="timetag wordBreak">
                  <img src="../assets/img/Vector_calendar.png" style="margin-right:5px;">
                  {{item.Start}}~{{item.End}}
                </span>
              <h4 class="topictag f20">{{item.Name}}</h4>
              <div class="locationtag">
                <img src="../assets/img/Vector_bluemap.png">
                <span class="f16">{{item.Region}}</span>
              </div>
              <span class="annualtag fBold">年度活動</span>
            </div>
         </div>
         <div class="linkToRouterPopularActivity fBold">
            <RouterLink  to="/cardsactivity" style="text-decoration:none;">瀏覽更多　→　</RouterLink>
          </div>
      </div>
      
    </section>
</template>

<style>
/*see main.scss*/
</style>