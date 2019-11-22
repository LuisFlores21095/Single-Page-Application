<template>
  <div class="center">
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
.center {
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
  }
  .center {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr;
    grid-template-areas: "side-nav main";
  }
}

@media (min-width: 1600px) {
  .center {
    max-width: 1600px;
    margin: 0px auto;
  }
}
</style>
