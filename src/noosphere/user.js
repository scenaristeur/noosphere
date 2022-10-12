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
    this.save()


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

  lite(){
    let room_id = this.store.state.noosphere.room ? this.store.state.noosphere.room.id : null
    let channel_id = this.store.state.noosphere.channel ? this.store.state.noosphere.channel.id : null

    return {
      name: this.name,
      color: this.color,
      clientID: this.clientID,
      channels: this.channels,
      channelID: channel_id,
      rooms: this.rooms,
      roomID: room_id,
    }
  }

  save(){
    let lite = this.lite()
    localStorage.setItem('noosphere-user', JSON.stringify(lite))
    this.store.commit('noosphere/setLocalUser',lite)
    console.log('save', this)
    if (this.channel != null) this.channel.awareness.setLocalStateField('user', lite)
    this.d()
  }

  addChannel(c){
    this.channel = c
    delete this.channels[c.id]
    this.channels[c.id] = {id: c.id, date: Date.now()}
    this.clientID = this.channel.awareness.clientID
    this.store.commit('noosphere/setChannel',c)
    this.save()
  }

  addRoom(r){
    this.room = r
    delete this.rooms[r.id]
    this.rooms[r.id] = {id: r.id, date: Date.now()}
    this.store.commit('noosphere/setRoom',r)
    this.save()
  }

  updateProfile(u){
    Object.assign(this,u)
    this.save()
  }



}
