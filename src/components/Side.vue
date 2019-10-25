<template>
    <div id="Side">
        <div id="profile">
    <img id="myPhoto" alt="Luis Flores" src="../assets/person.png">
    <h3 id="side-header"><i>{{name}}</i></h3>
    <h2 id="Job-Title" >{{job}}</h2>
    </div>

     <div id="tabs">   
    <ul>
    <li  class= "side-tabs" v-for="(skill, index) in skills" :key="skill"><a class="side-a" :href="'#' + [[skillsAtt[index]]]">{{skill}}</a></li>
    </ul>
    </div> 
    </div>  
</template>


<script>


export default {
  name: "Side",
  data(){
      return{
          scrollPosition: null,
          name: "LUIS FLORES",
          job: "Software Engineer",
          skills:[
              "Front-end",
              "Back-end",           
              "Video Game",
              "Computer Science",
          ],
          skillsAtt:[
            "FE",
            "BE",
            "VG",
            "CS"
          ]
      }
  }
}
</script>

<style lang="scss">

  
  #Side{
      text-align: center;
  }

#myPhoto{
  width: 120px;
  margin-top: 30px;
}

 #profile{
   float: left;
   width: 50%;

 }

 #tabs{
   float:right;
   width: 50%;
   margin-top: 15px;

 }

 .side-tabs, .side-a{
    text-decoration: none;
   color: black;
   list-style-type: none;
 }

 .side-tabs, #Job-title, #side-header{
        margin: 0px 5px 0px 5px;
 }

 .side-tabs{
     padding: 15px 0px 15px 0px;
 }

  #Job-Title{
      font-size: .9rem;
  }
@media screen and (min-height: 300px )and (min-width: 768px)  {
  #Side {
    position: sticky;
    top: 0;
  }
}

  @media screen and (min-width: 768px) {     
      #profile, #tabs{
        width: 100%;
        float: none;
        
      }
      }
</style>