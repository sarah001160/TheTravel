<script>

</script>
<template>
    <nav>
        <RouterLink class="link" to="/cardsactivity">活動</RouterLink>
        <RouterLink class="link" to="/cardsscene">景點</RouterLink>
        <RouterLink class="link" to="/cardsfood">美食</RouterLink>
        <RouterLink class="link" to="/cardshotel">旅宿</RouterLink>
    </nav>

</template>

<style scoped lang="scss">
     nav{
        width:80%;
        margin:50px 10% 100px 10%;
        //height:80px;
        //background-color:yellow;
        text-align:center;//字置中
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        >.link{
            width:22%;
            text-decoration:none;
            font-weight:bold;
            color:black;
            border-bottom:1px solid grey;
            &:hover{
                color:grey;
            }
        }
    }

</style>