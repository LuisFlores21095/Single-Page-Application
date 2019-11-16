<template>
  <div id="Side">
    <div id="profile">
      <img id="myPhoto" alt="Luis Flores" src="../assets/person.png" />
      <h3 id="side-header">
        <i>{{name}}</i>
      </h3>
      <h2 id="Job-Title">{{job}}</h2>
    </div>

    <div id="tabs">
      <b-list-group v-b-scrollspy>
        <b-list-group-item
          v-for="(skill, index) in skills"
          :key="skill"
          :href="'#' + [[skillsAtt[index]]]"
        >{{skill}}</b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>


<script>

export default {
  name: "SideNav",
  data() {
    return {
      scrollPosition: null,
      name: "LUIS FLORES",
      job: "Software Engineer",
      skills: ["Front-end", "Back-end", "Video Game", "Computer Science"],
      skillsAtt: ["M-1", "M-21", "M-26", "M-12"]
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      if (window.innerWidth > 768) {
        this.skillsAtt = ["M-1", "M-21", "M-26", "M-12"];
      } else {
        this.skillsAtt = ["FE", "BE", "VG", "CS"];
      }
    }
  }
};
</script>

<style lang="scss">
#tabs {
  float: right;
  width: 50%;

  .list-group {
    text-align: center;
  }

  .list-group-item {
    border: none;
    color: black;
    padding: 1rem 1.25rem;
  }

  .list-group-item.active {
    background-color: white;
    font-weight: bold;
    font-size: 1.3rem;
  }
}

#Side {
  text-align: center;
}

#myPhoto {
  width: 120px;
  margin-top: 30px;
}

#profile {
  float: left;
  width: 50%;
}

.side-a {
  text-decoration: none;
  color: black;
  list-style-type: none;
}

#Job-title,
#side-header {
  margin: 0;
}

#Job-Title {
  font-size: 0.9rem;
}
@media screen and (min-width: 420px) {
  #tabs .list-group-item {
    border: none;
    color: black;
    padding: 1.2rem 1.25rem;
  }
}
@media screen and (min-height: 300px) and (min-width: 768px) {
  #Side {
    position: sticky;
    top: 0;
  }
}

@media screen and (min-width: 768px) {
  #profile,
  #tabs {
    width: 100%;
    float: none;
  }
}
</style>