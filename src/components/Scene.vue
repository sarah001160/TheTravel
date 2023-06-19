<script setup>
</script>
<template id="scene">
      <section class="scene">
       <div class="logozone">
         <a href="#"><img src="../assets/img/THE.png" alt="logo"></a>
         <a href="#"><img src="../assets/img/Vector_Taiwan.png" alt="logo"></a>
       </div>
       <h1>和你一起探索台灣</h1>
       <div class="wrapperArea">
          <div class="wrapper">
              <div>
                <span class="f13" style="color:gray">地點</span>
                <h3 class="fBold">全台灣</h3>
                <div class="dropDown spot">
                   <div><input id="selectAll" type="checkbox"><label for="selectAll" class="fBold">全選</label></div>
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
              <div>
                <span class="f13" style="color:gray">分類</span>
                <h3 class="fBold">景點</h3>
                <div class="dropDown category">
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
              <input type="text" placeholder="試試輸入關鍵字">             
          </div>
          
          <button class="fBold">
               <img src="../assets/img/Vector_search.png">搜尋
            </button> 
         
       </div>
       <div class="mobileInputSearch">
            <input type="text" placeholder="試試輸入關鍵字">
            <button class="fBold"><img src="../assets/img/Vector_search.png">搜尋</button>
        </div> 
      
      
    </section>
</template>