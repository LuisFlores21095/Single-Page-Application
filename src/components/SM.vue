<template>
    <div  class="center" >

      <nav class="side-nav">
        <Side/>
      </nav>

      <main>
        <Main/>
       
      </main>

    </div>
</template>

<script>
// @ is an alias to /src

import Side from '@/components/Side.vue'
import Main from '@/components/Main.vue'


export default {
  name: 'SM',
  components: {
    Side,
    Main
  }
}
</script>

<style lang="scss">
.center {
  grid-area: center;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 270px 1fr;
  grid-template-areas: 
  "side-nav side-nav"
  "main main";
  

}

.side-nav{
  grid-area: side-nav;
  /* display: none; */

}

main{
  grid-area: main;
}

main {
  background-color: white;
  color: black;  
}

@media (min-width: 768px) {
 
  .side-nav {
    display: block;
   
  }
  .center {
    
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  grid-template-areas: 
  "side-nav main"
  }
}



@media (min-width: 1400px) {
  .center{
    max-width: 1400px;
   margin: 0px auto;
  }
}



</style>