import { Base } from "./base.js"
export { User }

class User extends Base {
  constructor(options = {}) {
    super(options)
    this.group = 'user'
    this.init()
    // this.name = options.name || localStorageUser.name || 'User_'+now
    // this.color = options.color || localStorageUser.color || '#'+Math.floor(Math.random()*16777215).toString(16)
    // this.created = options.created || localStorageUser.created || now
    // this.rooms = options.rooms || localStorageUser.rooms || {}
    this.localStorageSave()

  }

  init(){
    let localStorageUser = JSON.parse(localStorage.getItem('noosphere-user'))
    if (localStorageUser != undefined && localStorageUser != null ){
      Object.assign(this, localStorageUser)
      console.log('from localstorage')
    }else{
      Object.assign(this, this.randomUser())
      console.log('from random')
    }

    this.rooms == undefined ? this.rooms =  {} : ""
    this.channels == undefined ? this.channels = {} : ""

  }

  randomUser(){
    let now = Date.now()
    return {
      name: 'User_'+now,
      color: '#'+Math.floor(Math.random()*16777215).toString(16),
      created: now,
    }
  }

  localStorageSave(){
    localStorage.setItem('noosphere-user', JSON.stringify(this));
  }



}
