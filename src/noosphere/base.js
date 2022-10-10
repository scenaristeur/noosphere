// import { v4 as uuidv4 } from 'uuid';

let debug = true


export { Base }

class Base {
  constructor(options = {}) {
    // this["created"] = Date.now()
    // updating with options
    Object.assign(this, options);
  }
  d(){
    if (debug == true) {
      console.log('[debug]',this.group, this)
    }
    // else{
    //   console.log('[debug]', 'no debug')
    // }
  }
}
