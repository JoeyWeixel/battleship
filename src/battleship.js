class Ship{
  constructor(){
    this.$hitCount = 0;
  }

  hit(){
    this.hitCount++;
  }

  get hitCount(){
    return this.$hitCount;
  }
  set hitCount(count){
    this.$hitCount = count;
  }
}

module.exports = {Ship};