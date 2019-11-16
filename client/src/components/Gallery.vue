<template>
  <div id="home-gallery">
    <div id="FE">
      <p class="Main-text">{{Frontend}}</p>
    </div>
    <img class="main-imgs" id="M-1" src="../assets/IR.png" />
    <img class="main-imgs" id="M-2" src="../assets/APS.png" />
    <img class="main-imgs" id="M-3" src="../assets/CSS-grid.png" />
    <img class="main-imgs" id="M-5" src="../assets/vue2.png" />
    <img class="main-imgs" id="M-21" src="../assets/html-css.png" />
    <img class="main-imgs" id="M-23" src="../assets/VueBoot.png" />
    <img class="main-imgs" id="M-29" src="../assets/VaBaS.png" />

    <div id="BE">
      <p class="Main-text">{{Backend}}</p>
    </div>
    <img class="main-imgs" id="M-8" src="../assets/jsLogo.jpeg" />
    <img class="main-imgs" id="M-27" src="../assets/MongoDB.jpg" />
    <img class="main-imgs" id="M-25" src="../assets/SoapvJson2.jpeg" />
    <img class="main-imgs" id="M-20" src="../assets/mevn.jpg" />
    <img class="main-imgs" id="M-26" src="../assets/PHPSQL2.jpg" />

    <div id="VG">
      <p class="Main-text">{{VG}}</p>
    </div>
    <img class="main-imgs" id="M-12" src="../assets/Unity.jpg" />
    <img class="main-imgs" id="M-27" src="../assets/CharUnity.jpg" />
    <img class="main-imgs" id="M-11" src="../assets/AWS.png" />

    <div id="CS">
      <p class="Main-text">{{CS}}</p>
    </div>
    <img class="main-imgs" id="M-14" src="../assets/Treea.png" />
    <img class="main-imgs" id="M-15" src="../assets/CsharpL.jpg" />
    <img class="main-imgs" id="M-16" src="../assets/10101.jpg" />
    <img class="main-imgs" id="M-17" src="../assets/Algo.jpg" />
    <img class="main-imgs" id="M-28" src="../assets/ML.jpg" />
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      Frontend:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?",
      Backend:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?",
      VG:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?",
      CS:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita? Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga repudiandae?"
    };
  }
};
</script>

<style lang="scss">
#M-17,
#M-1,
#M-28,
#M-27,
#M-25,
#M-26,
#M-24,
#M-2,
#M-3,
#M-4,
#M-5,
#M-8,
#M-9,
#M-10,
#M-11,
#M-13,
#M-19,
#M-15,
#M-16,
#M-18,
#M-21,
#M-22,
#M-23 {
  display: none;
}

#home-gallery {
  background-color: #f5f5f5;
  display: grid;
  padding: 10px;

  grid-template-columns: 1fr;
  grid-auto-rows: 320px;
  grid-template-areas: " html-css";
}
.Main-text {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  margin: 0px 8%;
  text-align: center;
}

.main-imgs {
  width: 100%;
}

.main-imgs {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 768px) {
  #M-1,
  #M-17,
  #M-28,
  #M-27,
  #M-25,
  #M-26,
  #M-2,
  #M-3,
  #M-4,
  #M-5,
  #M-8,
  #M-9,
  #M-10,
  #M-11,
  #M-13,
  #M-19,
  #M-15,
  #M-16,
  #M-14,
  #M-18,
  #M-20,
  #M-21,
  #M-22,
  #M-23,
  #M-24 {
    display: block;
  }

  #M-29 {
    display: none;
  }

  .Main-text {
    top: 50%;
    position: relative;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    margin: 0 10px;
    font-size: 2vw;
  }

  #home-gallery {
    display: grid;
    grid-template-columns: repeat(9, minmax(10px, 1fr));
    grid-template-rows: repeat(19, 10vw);
    grid-gap: 13px;
  }

  #M-1 {
    grid-column: 1/5;
    grid-row: 1/3;
  }
  #M-2 {
    grid-column: 5/10;
    grid-row: 1/2;
  }
  #M-5 {
    grid-column: 8/10;
    grid-row: 2/5;
  }

  #FE {
    grid-column: 5/8;
    grid-row: 2/5;
  }
  #M-8 {
    grid-column: 1/5;
    grid-row: 3/5;
  }
  #M-3 {
    grid-column: 3/7;
    grid-row: 5/7;
  }

  #M-23 {
    grid-column: 1/3;
    grid-row: 5/7;
  }
  #M-21 {
    grid-column: 7/10;
    grid-row: 5/7;
  }
  #M-11 {
    grid-column: 1/3;
    grid-row: 7/10;
  }

  // #M-20{
  //   grid-column: 6/10;
  //   grid-row: 7/8;
  // }
  #M-25 {
    grid-column: 6/10;
    grid-row: 7/10;
  }

  #M-20 {
    grid-column: 1/6;
    grid-row: 10/12;
  }
  #M-26 {
    grid-column: 6/10;
    grid-row: 10/12;
  }

  #BE {
    grid-column: 3/6;
    grid-row: 7/10;
  }

  #VG {
    grid-column: 3/8;
    grid-row: 12/14;
  }
  #M-15 {
    grid-column: 1/3;
    grid-row: 12/16;
  }
  #M-27 {
    grid-column: 8/10;
    grid-row: 12/16;
  }
  #M-12 {
    grid-column: 3/8;
    grid-row: 14/16;
  }

  // #M-19{
  //   grid-column: 6/8;
  //   grid-row: 14/16;
  // }

  #CS {
    grid-column: 5/8;
    grid-row: 16/19;
  }
  #M-28 {
    grid-column: 1/5;
    grid-row: 16/18;
  }
  #M-14 {
    grid-column: 1/5;
    grid-row: 18/20;
  }
  #M-17 {
    grid-column: 5/10;
    grid-row: 19/20;
  }
  #M-16 {
    grid-column: 8/10;
    grid-row: 16/19;
  }
}
@media screen and (min-width: 1400px) {
  #home-gallery {
    grid-template-rows: repeat(19, 150px);
  }
  .Main-text {
    top: 50%;
    position: relative;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    margin: 0 10px;
    font-size: 26px;
  }
}
</style>