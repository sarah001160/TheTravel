<script setup>
import {ref} from 'vue';
import Navigate from './Navigate.vue';
//pinia DataStore.js統一管理狀態
import {useDataStore} from '@/stores/DataStore';
const DataStore = useDataStore();
DataStore.getSceneData();

const tempObj = ref({});//當前點擊的card之item
const active =ref(false);//是否啟動ModalBox
function checkClick(item){//當前點擊的card
    openModal();
    tempObj.value=item;
}
function openModal(){
   active.value=true;
}
function closeModal(){
    active.value=false;
    tempObj.value={};
}

</script>

<template>
      <!--全局元件SearchBarglobal.vue-->
      <div style="margin-top:10px;">
            <search-barglobal></search-barglobal>
      </div>
     <div class="pictureArea">
        <h2>景點</h2> 
    </div>
    <navigate></navigate>
     <div style="margin-left:10%;">所有景點-共有{{DataStore.ScenesLength}} 筆資料</div>
    <section>
       <div class="card" v-for="(item,key) in DataStore.Scenedata" :key="item.index"
       @click="checkClick(item)"
       >     
         
            <img :src="item.Picture1" v-if="item.Picture1" class="imgIncard">
            <img src="../assets/img/unsplash_L6xHmv2R3G4@2x.png" v-else class="imgIncard">
            <h4>{{item.Name}}</h4>
            <p class="locationtag">
                <img src="../assets/img/Vector_bluemap.png" style="margin-right:5px;">
                {{item.Region}}
            </p>
            <p class="descrip">{{item.Description}}</p>
            <div class="Pinmobile">
                <h4>{{item.Name}}</h4>
                <p class="locationtag">
                    <img src="../assets/img/Vector_bluemap.png">
                    {{item.Region}}
                </p>
            </div>
       </div>
    </section>

    <!---ModalBox-->
    <div class="modalBox" v-if="active" >
        <a href="#" @click.prevent="closeModal()" class="close"></a>
        <div class="IntroA">
                <img :src="tempObj.Picture1" v-if="tempObj.Picture1">
                <img src="../assets/img/unsplash_L6xHmv2R3G4@2x.png" v-else>
            <div>
                <h4 class="fBold f28">{{tempObj.Name}}</h4>
                <p class="locationtag">
                    <img src="../assets/img/Vector_bluemap.png">
                    {{tempObj.Region}}
                </p>
                <div class="detailZone">
                    <p>開放時間: {{tempObj.Opentime}}</p>
                    <p v-if="tempObj.Ticketinfo">票價資訊: {{tempObj.Ticketinfo}}</p>
                    <p v-else>票價資訊: 無</p>
                    <p>連絡電話: +{{tempObj.Tel}}</p>
                    <p>地點: {{tempObj.Location}}{{tempObj.Add}}</p>
                </div>
            </div>
        </div>
        <div class="IntroB">
            <h4 class="title fBold f28">景點介紹</h4>
            <p v-if="tempObj.Description">{{tempObj.Description}}</p>
            <p v-else style="margin-top:5px;">無</p>
        </div>
        <div class="IntroC">
            <h4 class="title fBold f28">地圖</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d690658.6304662743!2d120.41425460902312!3d23.689314890952065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f210e420ba6d1%3A0x83cb1aa521840d7e!2z546J5bGx!5e0!3m2!1szh-TW!2stw!4v1685722831814!5m2!1szh-TW!2stw"
                width="80%" height="450" style="border:0; margin-left:10%;" 
                allowfullscreen="" loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="transportInfo" style="width:80%;margin:30px 10%;">
                <h5>交通資訊:</h5>
                <p v-if="tempObj.Travellinginfo">{{tempObj.Travellinginfo}}</p>
                <p v-else>無</p>
            </div>
        </div>
        <div class="IntroD">
            <h4 class="title fBold f28">注意事項</h4>
            <p v-if="tempObj.Remarks">{{tempObj.Remarks}}</p>
            <p v-else>無</p>
        </div>  
    </div>

      
    <!--全局元件Footerglobal.vue-->
    <footerglobal></footerglobal>
    

   
</template>


<style scoped lang="scss">
$primary:var( --vt-c-white);
$secondary:#23BFD4;
.fBold{ font-weight:bold;}
.f13{ font-size:13px;}
.f16{font-size:16px;}
.f20{ font-size:20px;}
.f28{ font-size:28px;}
.locationtag{
  color:#23BFD4;
  margin:2px 0 2px 0px;
  max-width:100px;
}
/*mixin */
    @mixin mobile{
        @media(279px< width <=765px){
            @content;
        }
    }
    @mixin tab{
        @media(765px< width<=976px){
             @content;
        }
    }
    .imgIncard{ //小卡片的風景圖
        width:100%;
        height:45%;
        border-radius:10px;
        overflow:hidden;
    }
    .title{ 
        padding-left:10px;
        border-left:18px solid $secondary;
        margin-bottom:20px;
    }

div.pictureArea{
    width:80%;
    height:250px;
    margin:50px auto 10px auto;
    background-image:url('https://www.eastcoast-nsa.gov.tw/image/28950/640x480');
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center bottom;
    padding-top:90px;
    >h2{
        text-align:center;
        color:white;
        font-weight:bold;
        font-size:26px;
        word-spacing:10px;
    }
}

section{
    width:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    width:100%;
    padding:10px 10%;//上下 左右
    //background:yellow;
    justify-content:space-between;
    div.card{
        width:23%;
        height:300px;
        //border:1px solid red;
        display:inline-block;
        margin-top:50px;
        overflow:hidden;
        cursor:pointer;
        border-radius:10px;
        &:hover{
            box-shadow:0 0 8px grey;
        }
        >h4{
            font-weight:bold;
        }
        >p.descrip{
            display:-webkit-box;
            max-width:100%;
            -webkit-line-clamp:4;
            -webkit-box-orient:vertical;
            overflow: hidden;
        }
        div.Pinmobile{
            display:none;
        }
        @include mobile{
            width:100%;
            margin:5px;
            max-height:150px;
            display:flex;
            flex-direction:row;
            border-top:1px solid grey;
            border-radius:0;
            padding:10px 0;
            &:last-child{border-bottom:1px solid grey;}
            >img{
                width:130px;
                height:130px;
            }
            >h4{
                display:none;
            }
            p, p.descrip{
                display:none;
            }
            &:hover{
             box-shadow:none;
            }
            div.Pinmobile{
                display:block;
                margin-left:10px;
                >h4{
                    font-weight:bold;
                    display:block;
                }
                >p{ 
                    font-weight:bold;
                    display:block;
                } //區域

            }
        }
    }
}
  

.modalBox{
    width:99%; 
    height:100vh;
    z-index:100;
    background:rgba(247, 244, 244, 0.95); 
    color:black; 
    padding:30px;
    border:1px solid grey;
    border-radius:10px;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    margin:3px auto;
    overflow-y:auto;
    div.IntroA{
         border-bottom:1px solid grey;
         width:100%;
         display:flex;
         flex-direction:row;
         @include mobile{
            padding-top:50px;
            flex-direction:column;
         }
         @include tab{//與mobile同
            padding-top:50px;
            flex-direction:column;
         }
        >img{
            max-width:400px;
            height:300px;
            margin:10px 10%;
            @include mobile{
                width:90%;
                margin:0 auto;
            }
            @include tab{
                max-width:70%;
                margin:0 auto;
                height:400px;
            }
        }
        >div{
            width:50%;
            padding:10px;
            @include mobile{ 
                width:90%;
                margin:30px 5%;
            }
            @include tab{
                width:90%;
                margin:0 5%;
            }
            div.detailZone{
                margin-top:30px;
                margin-bottom:30px;
                >p{
                    margin-top:10px;
                    margin-left:72px;
                    text-indent:-72px;
                }
            }
        }
    }
    div.IntroB{
        width:100%;
        min-height:250px;
        border-bottom:1px solid grey;
        display:flex;
        flex-direction:row;
        padding-top:40px;
        padding-bottom:40px;
        @include mobile{
            flex-direction:column;
            width:90%;
            margin:0 5%;
        }
        @include tab{//與mobile同
            flex-direction:column;
            width:90%;
            margin:0 5%;
        }
        h4{
            width:160px;
            height:40px;
            display:block;
        }
        p{
            width:70%;
            word-break: break-all;
            @include mobile{
                width:90%;
                margin:0 5%;
            }
            @include tab{//與mobile同
                width:90%;
                margin:0 5%;
            }
        }
    }
    div.IntroC{//地圖
        padding-top:40px;
        width:100%;
        min-height:250px;
        border-bottom:1px solid grey;
        @include mobile{
            flex-direction:column;
            width:90%;
            margin:0 5%;
        }
        @include tab{//與mobile同
            flex-direction:column;
            width:90%;
            margin:0 5%;
        }
    }
    div.IntroD{
        padding-top:40px;
        width:100%;
        min-height:250px;
        display:flex;
        flex-direction:row;
        padding-top:40px;
        padding-bottom:40px;
        @include mobile{
            flex-direction:column;
            width:100%;
            margin:0 5%;
        }
        @include tab{//與mobile同
            flex-direction:column;
            width:100%;
            margin:0 5%;
        }
        >h4{
            width:160px;
            height:40px;
            display:block;
        }
        >p{
            margin-top:10px;
            width:70%;
            word-break: break-all;
            @include mobile{
                width:90%;
                margin:0 5%;
            }
            @include tab{//與mobile同
                width:90%;
                margin:0 5%; 
            }
        }
    }
}
 
    /*---X close*/
.close {
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  z-index:100;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
/*-------------------------*/
   

 

</style> 


