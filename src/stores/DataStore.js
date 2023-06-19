
//統一管理資料
import {defineStore} from 'pinia';

export const useDataStore = defineStore("DataStore",{
        state:()=>{
            return{
                Toursdata:[]||JSON.parse(localStorage.getItem('Toursdata')),
                Scenedata:[]||JSON.parse(localStorage.getItem('Scenedata')),
                Hotelsdata:[]||JSON.parse(loaclStorage.getItem('Hotelsdata')),
                Foodsdata:[]||JSON.parse(loaclStorage.getItem('Foodsdata'))
            }
        },
        actions:{
            async getToursData(){
                const url= await `https://popularactivityapi.onrender.com/Info`;
                const myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');
                //myHeaders.append('Authorization','Bearer TokenNum');如有要金鑰再加入這句syntax
                return fetch(url,{
                    method:'GET',
                    headers:myHeaders,
                    })
                .then(response =>response.json())
                .then((result)=>{
                    this.Toursdata = result;
                    this.filterToursdataTime();
                    localStorage.setItem('Toursdata',JSON.stringify(this.Toursdata));
                    //console.log(this.Toursdata)
                })
                .catch((error)=>{ console.log(error)})
            },
            async getSceneData(){
                const url= await `https://json-sceneattractions.onrender.com/Info`;
                const myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');
                //myHeaders.append('Authorization','Bearer TokenNum');如有要金鑰再加入這句syntax
                return fetch(url,{
                        method:'GET',
                        headers:myHeaders,
                    })
                .then(response => response.json())
                .then((result)=>{
                    this.Scenedata = result;
                    this.filterScenedataTime();
                    localStorage.setItem('Scenedata',JSON.stringify(this.Scenedata));
                    //console.log(this.Scenedata);
                })
                .catch((error)=>{ console.log(error)})
            },
            async getHotelsData(){
                const url=`https://hotelsapi.onrender.com/Info`;
                const myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');
                return fetch(url,{
                        method:'GET',
                        headers:myHeaders,
                    })
                .then(response => response.json())
                .then((result)=>{
                    this.Hotelsdata = result;
                    localStorage.setItem('Hotelsdata',JSON.stringify(this.Hotelsdata));
                    //console.log(this.Hotelsdata);
                })
                .catch((error)=>{ console.log(error)})
            },
            async getFoodsData(){
                const url=`https://foodapi-puve.onrender.com/Info`;
                const myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');
                return fetch(url,{
                    method:'GET',
                    headers:myHeaders,
                })
                .then(response => response.json())
                .then((result)=>{
                    this.Foodsdata = result;
                    localStorage.setItem('Foodsdata',JSON.stringify(this.Foodsdata));
                    //console.log(this.Foodsdata);
                })
                .catch((error)=>{
                    console.log(error)
                });
            },
            filterToursdataTime(){//getAPI資料中去除時間
                this.Toursdata.forEach(item=>{
                if(item.Start.includes('T')){
                    item.Start = item.Start.split('T')[0]
                }
                if(item.End.includes('T')){
                    item.End = item.End.split('T')[0]
                }
                return item.Start,item.End;
                })
            },
            filterScenedataTime(){
                this.Scenedata.forEach(item=>{
                    if(item.Start.includes('T')){
                        item.Start = item.Start.split('T')[0]
                    }
                    if(item.End.includes('T')){
                        item.End = item.End.split('T')[0]
                    }
                    return item.Start,item.End;
                    })
            }
        },
        getters:{
            ToursLength(){
                return this.Toursdata.length; 
            },
            ScenesLength(){
                return this.Scenedata.length;
            },
            HotelsLength(){
                return this.Hotelsdata.length;
            },
            FoodsLength(){
                return this.Foodsdata.length;
            }
           
            //name:(state)=>state.X*2
            //or name(state){...}
        }
    }
)