<template>
    <v-app>
      <v-main>
        <v-container fluid fill-height>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6" lg="4">
              <v-card>
                <v-card-title class="text-center">Login</v-card-title>
                <v-card-text>
                  <v-form @submit.prevent="handleSubmit">
                    <v-text-field
                      v-model="email"
                      label="Email"
                      required
                      :rules="emailRules"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      label="Password"
                      type="password"
                      required
                      :rules="passwordRules"
                    ></v-text-field>
                    <v-btn
                      type="submit"
                      color="primary"
                      block
                      :loading="loading"
                      >Login</v-btn
                    >
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        loading: false,
        emailRules: [
          (v) => !!v || 'Email is required',
          (v) => /.+@.+\..+/.test(v) || 'Email must be valid',
        ],
        passwordRules: [
          (v) => !!v || 'Password is required',
          (v) => v.length >= 8 || 'Password must be at least 8 characters',
        ],
      };
    },
    methods: {
      handleSubmit() {
        this.loading = true;
        // Perform login logic here
        setTimeout(() => {
          this.loading = false;
          console.log('Email:', this.email);
          console.log('Password:', this.password);
        }, 2000);
      },
    },
  };
  </script>