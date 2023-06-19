<script setup>
    import { ref } from 'vue';
    //pinia state management
    import {useDataStore} from "@/stores/DataStore.js";
    const DataStore = useDataStore();
    DataStore.getToursData();//活動資料
    const turnPrev = ref(true);
 
</script>

<template id="recentActivity">
    <section class="recentActivity">
        <div><!--1-->
            <h3 class="title fBold f28">近期活動</h3>
            <div class="buttonsZone">
                <input type="radio" name="radios" id="radioPrev">
                <input type="radio" name="radios" id="radioNext">
                <label @click="turnPrev=true" for="radioPrev" class="radioLabel labPrev "><img src="../assets/img/Vector_arrow.png" class="rotate180"></label>
                <label @click="turnPrev=false" for="radioNext" class="radioLabel labNext"><img src="../assets/img/Vector_arrow.png"></label>
            </div>
        </div>
        <div> <!--2-->    
            <div class="activitiesContent">
            <div id="A" ref="contentA" v-if="turnPrev">
                <div v-for="(item,key) in DataStore.Toursdata.slice(0,4)">
                <img v-if="item.Picture1" :src="item.Picture1"  class="imgIncard" >
                <img v-else src="../assets/img/unsplash_L6xHmv2R3G4.png" class="imgIncard">
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
            <div id="B" ref="contentB" v-else>
                <div v-for="(item,key) in DataStore.Toursdata.slice(4,8)">
                        <img v-if="item.Picture1" :src="item.Picture1"  class="imgIncard">
                        <img v-else src="../assets/img/unsplash_L6xHmv2R3G4.png" class="imgIncard">
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
                
            </div>
        </div>
        <div  class="linkToRouter fBold">
            <RouterLink to="/cardsactivity" style="text-decoration:none;">瀏覽更多　→　</RouterLink>
        </div>
    </section>

</template>
