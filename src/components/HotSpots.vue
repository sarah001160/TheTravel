<script setup>
    //pinia DaraStore.js統一管理狀態
    import {useDataStore} from '@/stores/DataStore';
    const DataStore = useDataStore();
    DataStore.getSceneData();//景點資料
</script>


<template id="hotSpots">    
    <section class="hotSpots">
        <!---1--->
        <div>
            <h3 class="title fBold f28">熱門景點</h3>
            <div class="secondbuttonsZone">
                <input type="radio" name="secondradios" id="secondradioPrev" >
                <input type="radio" name="secondradios" id="secondradioNext">
                <label  for="secondradioPrev"><img src="../assets/img/Vector_arrow.png" class="radioLabel rotate180"></label>
                <label  for="secondradioNext"><img src="../assets/img/Vector_arrow.png" class="radioLabel"></label>
            </div>    
        </div>
        <!---2-->
        <div class="forPC"><!--PC寬度下呈現-->
            <div v-for="(item,key) in DataStore.Scenedata.slice(4,5)" :key="item.Id" ><!---v-for0~1-->
                <img :src="item.Picture1" v-if="item.Picture1">
                <img src="../assets/img/unsplash_L6xHmv2R3G4@2x.png" v-else>
                <h4 class="topictag f28">{{item.Name}}</h4>
                    <div class="locationtag">
                        <img style="margin-right:10px;" src="../assets/img/Vector_bluemap.png">
                        <span class="f20">{{item.Region}}</span>
                    </div>
                    <p>
                        {{item.Toldescribe}}
                    </p>
                    <span class="annualtag fBold">景點</span>
            </div>
            <div><!--v-for 1~5--->
                <div  v-for="(item,key) in DataStore.Scenedata.slice(5,9)" :key="item.Id">
                    <img :src="item.Picture1" v-if="item.Picture1" class="imgIncard">
                    <img src="../assets/img/unsplash_L6xHmv2R3G4@2x.png" v-else class="imgIncard">
                    <h4 class="topictag f20">{{item.Name}}</h4>
                    <div class="locationtag">
                        <img style="margin-right:10px;" src="../assets/img/Vector_bluemap.png">
                        <span class="f16">{{item.Region}}</span>
                    </div>
                    <span class="annualtag fBold">景點</span>
                    <span  class="annualtag fBold">打卡</span>
                </div>
            </div>
        </div>
        <div class="forMobile"><!--mobile寬度下呈現--->
            <div v-for="(item,key) in DataStore.Scenedata.slice(5,9)" :key="item.Id">
                <img :src="item.Picture1" v-if="item.Picture1" class="imgIncard">
                <img src="../assets/img/unsplash_L6xHmv2R3G4@2x.png" v-else class="imgIncard">
                <h4 class="topictag f20">{{item.Name}}</h4>
                <div class="locationtag">
                    <img style="margin-right:10px;" src="../assets/img/Vector_bluemap.png">
                    <span class="f16">{{item.Region}}</span>
                </div>
                <span class="annualtag fBold">景點</span>
                <span  class="annualtag fBold">打卡</span>
            </div>
        </div>

        <div class="linkToRouterHotsopts fBold">
            <RouterLink to="/cardsscene" style="text-decoration:none;">瀏覽更多　→　</RouterLink>
        </div>

    </section>
</template>
<style>
/*see main.scss */
</style>