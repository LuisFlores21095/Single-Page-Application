<template>
  <div id="center">
    <nav class="side-nav">
      <SideNav />
    </nav>

    <main>
      <Gallery />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

import SideNav from "@/components/SideNav.vue";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "Layout-SM",
  components: {
    SideNav,
    Gallery
  }
};
</script>

<style lang="scss">
#center {
  grid-area: center;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 270px 1fr;
  grid-template-areas:
    "side-nav side-nav"
    "main main";
}

.side-nav {
  grid-area: side-nav;
  /* display: none; */
  background-color: white;

}

main {
  grid-area: main;
}

main {
  background-color: white;
  color: black;
}

@media (min-width: 768px) {
  .side-nav {
    display: block;
    box-shadow: 0 0 4px 1px rgba(0,0,0,0.05);

  }
  #center {
    display: grid;
    grid-gap: 15px;
        margin: 8px 10px;

    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr;
    grid-template-areas: "side-nav main";
  }
}

@media (min-width: 1400px) {
  #center {
    grid-gap: 25px;
    max-width: 1400px;
    margin: 15px auto;
  }
}
</style>
