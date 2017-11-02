import Vue from 'vue'
import Login from '../../../../src/pages/Login/Login'

const Ctor = Vue.extend(Login)
const vm = new Ctor().$mount()
