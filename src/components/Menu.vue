<template>
<div class="menu-items">
<h1 class="title">Categories</h1>
<div v-for="category in categoryArray">
     <router-link :to="{ name: 'ChannelList', params: { id: category }}"> {{category}}</router-link>
</div>

</div>
</template>
<style>
.menu-items{
    padding:10px;
        border:1px solid #00a6ff;

}
.menu-items div{
    border:1px solid #00a6ff;
    padding:10px;
    border-bottom:none;
    font-size:16px;

}
.menu-items div:last-child{
    border:1px solid #00a6ff;
}
.title{
  color:#00a6ff;
  margin:10px 0px;
  font-weight:bold;
}
</style>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      categoryArray: [
        "All", "Food", "Travel","Art"
      ]
    }
  }
}
</script>