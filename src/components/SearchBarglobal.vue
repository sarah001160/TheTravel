<script setup>
import {ref} from 'vue';
const inputTxt = ref('');

</script>

<template>
    <div id="searchBar" class="searchBar">
        <div class="logozone">
            <RouterLink to="/" class="link"><img src="../assets/img/THE_blue.png"></RouterLink>
            <RouterLink to="/" class="link"><img src="../assets/img/Vector_blue_Taiwan.png"></RouterLink>
        </div>
        <div class="wrapperArea">
            <div class="wrapper">
                <div>
                    <span class="f13" style="color:gray">地點</span>
                    <h3 class="fBold">全台灣</h3>
                    <div class="dropDown spot"><!--地區 下拉式選單-->
                    <div>
                            <input id="selectAllbox" type="checkbox">
                            <label for="selectAllbox" class="fBold">
                                全選
                            </label>
                        </div>
                    <div class="Regions">
                        <div>
                            <h4 class="fBold">北部</h4> 
                            <span>基隆市</span>
                            <span>台北市</span>
                            <span >新北市</span>
                            <span >宜蘭縣</span>
                        </div>
                        <div>
                            <h4 class="fBold">中部</h4> 
                            <span>苗栗縣</span>
                            <span>台中市</span>
                            <span>彰化縣</span>
                            <span>南投縣</span>
                        </div>
                        <div>
                            <h4 class="fBold">南部</h4> 
                            <span>嘉義縣</span>
                            <span>台南市</span>
                            <span>高雄市</span>
                            <span>屏東縣</span>
                        </div>
                        <div>
                            <h4 class="fBold">東部</h4> 
                            <span>花蓮縣</span>
                            <span>台東縣</span>
                        
                        </div>
                        <div>
                            <h4 class="fBold">外島</h4> 
                            <span >澎湖縣</span>
                            <span >連江縣</span>
                            <span >金門縣</span>
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div><!--分類/分類 -->
                    <span class="f13" style="color:gray">分類</span>
                    <h3 class="fBold">景點</h3>
                    <div class="dropDown category"><!--下拉式選單-->
                        <RouterLink to="/cardsscene">
                            <div class="mark"><img src="../assets/img/icon_map.svg"><p>景點</p></div>
                        </RouterLink>
                        <RouterLink to="/cardshotel">
                            <div class="mark"><img src="../assets/img/icon_house.svg"><p>旅宿</p></div>
                        </RouterLink>
                        <RouterLink to="/cardsactivity">
                            <div class="mark"><img src="../assets/img/icon_baloon.svg"><p>活動</p></div>
                        </RouterLink>
                        <RouterLink to="/cardsfood">
                            <div class="mark"><img src="../assets/img/icon_spoon.svg"><p>美食</p></div>
                        </RouterLink>
                    </div>
                </div>
                <input type="text" placeholder="試試輸入關鍵字" v-model="inputTxt">             
            </div>
           
                <button class="fBold">
                    <img src="../assets/img/Vector_search.png">搜尋
                </button>            
        </div>
        <div class="mobileInputSearch">
            <input type="text" placeholder="試試輸入關鍵字">
            <button class="fBold"><img src="../assets/img/Vector_search.png">搜尋</button>
        </div> 
       
       
    </div>
</template>

<style scoped lang="scss">
    $primary:var( --vt-c-white);
    $secondary:#23BFD4;
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

    div.searchBar{
        height:auto;
        width:100%;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        align-items:center;
        //background:pink;
        .logozone{
            width:125px;
            height:auto;
            //background:red;
            transform:translateX(90%);
            padding-top:30px;
            >.link{margin-right:8px;}
            @include tab{
                transform:translateX(30%);
            }
            @include mobile{
                transform:translateX(30%);
            }
        }
        .wrapperArea{
            display:flex;
            flex-direction:row;
            margin:48px auto 0 auto;//上右下左
            border-radius:20px;   
            width:60%;
            position:relative; //dropDown and button
            @include tab{
                width:90%;
            }
            @include mobile{
                width:90%;
            }
           
            .wrapper{
                box-shadow:0 0 1px grey;
                display:flex;
                flex-direction:row;
                background-color:$primary;
                width:100%;
                padding:10px;
                border-top-left-radius:5px;
                border-bottom-left-radius:5px;
                @include mobile{
                    flex-wrap:wrap;
                }
                div{//共有兩個div
                    width:100px;
                    text-align:left;
                    padding-left:20px;
                    box-sizing:border-box;
                    border-right:1px solid black;
                    @include mobile{
                        padding-left:5px;
                        width:50%;
                    }
                    &:nth-child(2){ //div:nth-child(2)時
                        @include mobile{
                            border-right:none;
                            border-top-right-radius:5px;
                            border-bottom-right-radius:5px;
                        }
                    }
                    cursor:pointer;
                    .dropDown{
                        display:none;
                        position:absolute;
                        top:100%;
                        left:-10px;
                        background:$primary;
                        box-shadow:0.5px 0.5px 1px black;
                        z-index:5;
                        border-radius:5px;
                        &.spot{ //.dropDown.spot區域 display none
                            width:auto;
                            height:200px;
                        }
                        &.category{ //.dropDown.category 分類
                            width:auto;
                            height:auto; //156px
                            @include mobile{
                                min-width:auto;
                            }
                        }
                    }
                    &:hover{ //div:hover          
                        .dropDown{
                            display:block;
                            &.spot{ //div:hover時 .dropDown.spot
                                display:flex;
                                flex-direction:column;
                                min-width:400px;
                                height:auto;
                                padding-right:10px;
                                padding-left:10px;
                                >div:nth-child(1){//全選 那一列
                                    border:none;
                                    //background:yellow;
                                    width:100%;
                                    display:inline-block;
                                    padding-top:10px;
                                    padding-left:20px;
                                    padding-bottom:10px;
                                    transform:translateX(-5px);
                                    >input[type=checkbox]{
                                        width:16px;
                                        height:16px;
                                    }
                                    label{
                                        cursor:pointer;
                                        margin-left:10px;
                                        font-size:16px;
                                    }
                                }
                                div.Regions{
                                    width:100%;
                                    border:none;
                                    display:flex;
                                    flex-direction:row;
                                    padding:0;
                                    transform:translateX(-5px);
                                    >div{ //5個欄位*1
                                        flex-grow:1 0 20%;//五分之一
                                        width:20%;
                                        margin-bottom:20px;
                                        border:none;
                                    // background:pink;
                                        display:flex;
                                        flex-direction:column;
                                        justify-content:top;//內容物排列
                                        align-items:center;
                                        text-align:center;
                                        margin-left:0;
                                        h4{
                                            width:100%;
                                            height:auto;
                                            border-bottom:3px solid black;
                                            text-align:center;
                                            font-size:16px;
                                        }
                                        span{
                                            width:100%;
                                            display:block;
                                            padding:13px 1px;
                                            // border:1px solid red;
                                            font-size:16px;
                                            &:hover{
                                                background:$secondary;
                                                color:$primary;
                                            }
                                        }
                                    }
                                }
                                
                                
                            }
                            &.category{ //div:hover時 .dropDown.category
                                display:grid;
                                grid-template-columns:auto auto;
                                padding:16px;
                                @include mobile{
                                padding:5px;
                                }
                                div.mark{
                                border:none;
                                margin-top:2px;
                                margin-right:5px;
                                width:88px;
                                height:54px;
                                position:relative;
                                img{
                                    position:absolute;
                                    top:15px;
                                    left:12px;
                                    filter:brightness(100%);
                                    &:nth-child(1){ filter:brightness(0%);} //img
                                }    
                               p{ 
                                    position:absolute;
                                    top:12px;
                                    left:45px;
                                    font-size:17px;
                                    color:black;
                                }
                                &:hover{ //.mark:hover
                                    background-color:$secondary;
                                    img{
                                    filter:brightness(0%);
                                    &:nth-child(1){
                                        filter:brightness(100%);
                                    }
                                    }
                                    p{color:$primary;}
                                    
                                }
                                
                                }
                                
                            }
                        }
                    }
                        
                }
                >input[type="text"]{
                    border:none;
                    flex:1 2 100px; 
                    padding-left:20px;
                    &:focus{
                        outline:none;
                        border:solid 2px $secondary;
                    }
                    @include mobile{display:none}  
                }
            
            }
            button{
                width:120px;
                top:0;
                bottom:0;
                flex-basis:120px;
                border:none;
                background:$secondary;
                color:$primary;
                position:relative;
                padding:19px 0;
                padding-left:22px;
                box-sizing: border-box;
                cursor: pointer;
                border-top-right-radius:5px;
                border-bottom-right-radius:5px;
                img{
                    position:absolute;
                    top:27px;
                    left:10%;
                }
                @include mobile{display:none}
                
            }
            
        }
        .mobileInputSearch{
            display:none;
            @include mobile{
                box-shadow:0 0 1px grey;
                display:block;
                margin:5px auto;
                width:90%;
                display:flex;
                flex-direction:row;
                input{
                width:80%;
                padding-left:20px;
                height:50px;
                border:none;
                border-top-left-radius:5px;
                border-bottom-left-radius:5px;
                &:focus{
                    outline:none;
                    border:solid 2px $secondary;
                }               
                }
                button{
                width:20%;
                background:$secondary;
                color:$primary;
                cursor:pointer;
                border:none;
                position:relative;
                border-top-right-radius:5px;
                border-bottom-right-radius:5px;
                img{ //放大鏡
                    position:absolute;
                    top:16px;
                    left:10%;
                }
                }
            }
            
        }
        
    
    
    }


</style>