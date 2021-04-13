class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    
      this.items.push(item)
      return this.items.sort(function(a,b){
        return a - b
      })
      this.length = this.items.length     
    
  }

  get(pos) {

    if(pos !== this.items[pos]){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos]
    }
    
    
    // for(let i = 0; i < this.items.length; i++){
    //   if(this.items[i] === pos){
    //     return this.items[i]
    //   }else {
    //     throw new Error('OutOfBounds');
    //   }
    // }
    
  }

  max() {
    if(this.items){
      return this.items.reduce((a,b) => {
        return Math.max(a, b)
      })
    }else {
      throw new Error('EmptySortedList');
    }    
  }

  min() {
    if(this.items){
      return this.items.reduce((a,b) => {
        return Math.min(a, b)
      })
    }else {
      throw new Error('EmptySortedList');
    }  
  }

  sum() {
    for(let i=0; i < this.items.length; i++){
      this.items += this.items[i]
    }
  }

  avg() {
   
     if(this.items){
       this.items = this.items + this.items
       return this.items / this.items.length
     } else {
       return false
     }

  }
}

module.exports = SortedList;
