<template>
  <v-row justify="center" id="Login">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <!-- <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title> -->

        <v-tabs
          v-model="tab"
          background-color="primary accent-4"
          class="elevation-2"
          dark
        >
          <v-tabs-slider></v-tabs-slider>

          <v-tab v-for="i in tabs" :key="i" :href="`#tab-${i}`" @click="selectTab(i)">
             {{ tabsName[i-1] }}
          </v-tab>
        </v-tabs>

        <v-card-text v-if="selectedTab == 2" >
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="first name*" required></v-text-field>
              </v-col>
             
              <v-col cols="12"  sm="6" md="6">
                <v-text-field
                  label="last name*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" >
                <v-text-field
                  label="Address*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" >
                <v-text-field
                  label="City*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>

                <v-col cols="12">
                <v-text-field
                  label="Confirm Password*"
                  type="Confirm Password"
                  required
                ></v-text-field>
              </v-col>
             
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Continue as Guest</v-btn
          >
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  methods: {
    selectTab(stuff) {
      this.selectedTab = stuff;
    }
    
  },
  data: () => ({
    selectedTab: 1,  
    dialog: true,
    tab: null,
    tabsName: ["Login", "Register"]
    ,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tabs: 3
  })
};
</script>

<style lang="scss">
a:hover {
  text-decoration: none;
}
</style>
