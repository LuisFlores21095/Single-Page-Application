<template>
  <div id="c_login">
    <v-row justify="center" id="Login">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-tabs
            v-model="tab"
            background-color="primary accent-4"
            class="elevation-2"
            dark
          >
            <v-tabs-slider></v-tabs-slider>

            <v-tab
              v-for="i in tabs"
              :key="i"
              :href="`#tab-${i}`"
              @click="selectTab(i)"
            >
              {{ tabsName[i - 1] }}
            </v-tab>
          </v-tabs>

          <v-card-text v-show="selectedTab == 2">
            <v-container>
              <v-form ref="registerForm" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="firstName"
                      :rules="[rules.required]"
                      label="First Name"
                      maxlength="20"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="lastName"
                      :rules="[rules.required]"
                      label="Last Name"
                      maxlength="20"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="streetAddress"
                      :rules="[rules.required]"
                      label="Street Address"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="city"
                      :rules="[rules.required]"
                      label="City"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="state"
                      :rules="[rules.required]"
                      label="State"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="zipCode"
                      :rules="zipCodeRules"
                      label="ZIP Code"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="email"
                      @input="onChange"
                      :rules="emailRules"
                      :error="emailErrorDup"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="password"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      block
                      v-model="cpassword"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, passwordMatch]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Confirm Password"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-alert
                      dense
                      outlined
                      type="error"
                      v-show="RegisterPopup === 1"
                    >
                      {{ RegisterPopupMessage }}
                    </v-alert>
                  </v-col>

                  <v-col cols="12">
                    <v-alert
                      v-show="RegisterPopup === 2"
                      dense
                      text
                      type="success"
                    >
                      {{ RegisterPopupMessage }}
                    </v-alert>
                  </v-col>

                  <v-col class="d-flex" cols="12" sm="6" xsm="12">
                    <v-btn color="warning" @click="dialog = false"
                      >Continue as Guest</v-btn
                    >
                  </v-col>

                  <v-spacer></v-spacer>
                  <v-col class="d-flex" cols="12" sm="3" xsm="12">
                    <v-btn
                      block
                      :loading="loadingRegister"
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      @click="registervalidate"
                    >
                      Register
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
          <v-card-text v-show="selectedTab == 1">
            <v-container>
              <v-form ref="loginForm" v-model="valid" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="loginEmail"
                      :rules="loginEmailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="loginPassword"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-alert
                      dense
                      outlined
                      type="error"
                      v-show="LoginPopup === 1"
                    >
                      {{ LoginPopupMessage }}
                    </v-alert>
                  </v-col>

                  <v-col class="d-flex" cols="12" sm="6" xsm="12">
                    <v-btn block color="warning" @click="dialog = false"
                      >Continue as Guest</v-btn
                    >
                  </v-col>

                  <v-spacer></v-spacer>
                  <v-col class="d-flex" cols="12" sm="3" xsm="12">
                    <v-btn
                      block
                      :loading="loadingLogin"
                      :disabled="!valid"
                      color="success"
                      class="mr-4"
                      @click="loginvalidate"
                    >
                      Login
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :top="true"
      color="success"
      class="text-center"
    >
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    selectedTab: 1,
    dialog: true,
    tab: null,
    tabsName: ["Login", "Register"],
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tabs: 2,
    valid: true,
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    city: "",
    state: "",
    streetAddress: "",
    cpassword: "",
    loginPassword: "",
    loginEmail: "",
    RegisterPopup: 0,
    LoginPopup: 0,
    loadingRegister: false,
    loadingLogin: false,
    RegisterPopupMessage: "",
    LoginPopupMessage: "",
    emailErrorDup: false,
    snackbar: false,
    snackbarText: "You have successfully logged in",
    timeout: 3000,

    loginEmailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    zipCodeRules: [
      v => !!v || "Required",
      v => /^\d+$/.test(v) || "Zipcode contains only digits"
    ],

    show1: false,
    password: "",
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    }
  }),
  computed: {
    ...mapGetters(["tokenCheck"]),

    passwordMatch() {
      return () => this.password === this.cpassword || "Password must match";
    }
  },
  created() {
    if (this.tokenCheck != null) {
      this.dialog = false;
    }
  },

  methods: {
    ...mapMutations(["LOGIN_SUCCESS"]),

    onChange() {
      this.emailErrorDup = false;
    },
    selectTab(stuff) {
      this.selectedTab = stuff;
    },
    loginvalidate() {
      if (this.$refs.loginForm.validate()) {
        this.loadingLogin = true;

        axios
          .post("http://localhost:3000/login", {
            email: this.loginEmail,
            password: this.loginPassword
          })
          .then(response => {
            this.l_reset();
            console.log(response.data.token);
            this.LOGIN_SUCCESS(response.data.token);
            this.snackbar = true;
            this.dialog = false;
            this.loadingLogin = false;
          })
          .catch(error => {
            console.log(error.response.data.message);
            this.LoginPopupMessage = error.response.data.message;
            this.LoginPopup = 1;
            this.loadingLogin = false;
          });
      }
    },

    registervalidate() {
      if (this.$refs.registerForm.validate()) {
        this.loadingRegister = true;

        axios
          .post("http://localhost:3000/register", {
            firstName: this.firstName,
            lastName: this.lastName,
            streetAddress: this.streetAddress,
            city: this.city,
            state: this.state,
            zipCode: this.zipCode,
            email: this.email,
            password: this.password
          })
          .then(response => {
            this.r_reset();
            this.RegisterPopupMessage = response.data.message;
            this.RegisterPopup = 2;
            this.loadingRegister = false;
          })
          .catch(error => {
            this.RegisterPopup = 1;
            if (error.response.data.error.errorCode === 11000) {
              this.RegisterPopupMessage = error.response.data.message;
              this.emailErrorDup = true;
            } else {
              this.RegisterPopupMessage = error.response.data.message;
            }
            this.loadingRegister = false;
          });
      }
    },
    r_reset() {
      this.$refs.registerForm.reset();
    },

    l_reset() {
      this.$refs.loginForm.reset();
    }
  }
};
</script>

<style lang="scss">
a:hover {
  text-decoration: none;
}

#c_login {
  .v-snack__content {
    font-size: 17px;
    min-height: 50px;
  }
}
</style>
