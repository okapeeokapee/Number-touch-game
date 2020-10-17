'use strict';{
  class Board{
    constructor(){
      this.panels = [];
      for(let i = 0; i<4; i++){
        this.panels.push(new this.panels());
      }
    }
  }

  const board = new Board();
}