<template>
  <header>
    <div class="nav-logo">
      <img id="header-logo" alt="logo" src="../assets/logo.png" />
    </div>
    <div class="H-nav-tabs">
      <ul id="Links">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/Store">Store</router-link>
        </li>
        <li>
          <router-link to="/Contact">Contact</router-link>
        </li>
        <li>
          <router-link to="/About">About</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
header {
  background-color: #3f8abf;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 2fr 1fr;
  grid-template-areas:
    "nav-logo"
    "H-nav-tabs";
}
.nav-logo {
  grid-area: nav-logo;
}

.H-nav-tabs {
  grid-area: H-nav-tabs;
  height: 100%;
}

.H-nav-tabs {
  text-align: center;
  background-color: #6e859c;
}
header ul {
  background-color: #6e859c;
  height: 100%;
  padding: 0;
  margin: 0;
  text-align: center;
}

header li {
  display: inline-block;
}

header li a {
  padding: 10px 3px 10px 3px;
  display: block;
  color: white;
  text-decoration: none;
  font-weight: inherit;
  margin: 0;
}

header li a:hover {
  background-color: rgb(206, 206, 206);
  text-decoration: none;
  color: inherit;
}

#header-logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 93px;
  padding-top: 3px;
  padding-bottom: 3px;
}

@media screen and (min-width: 290px) {
  header li a {
    padding: 10px 7px 10px 7px;
    display: block;
    font-size: 1.2rem;
  }
}
@media screen and (min-width: 330px) {
  header li a {
    padding: 10px 12px 10px 12px;
    display: block;
    // font-size: 1.2rem
  }
}
@media screen and (min-width: 440px) {
  header li a {
    padding: 10px 25px 10px 25px;
    display: block;
  }
}

@media screen and (min-width: 575px) {
  header li a {
    padding: 10px 40px 10px 40px;
    display: block;
  }
}
</style>
