import Ember from 'ember';

const Tile = Ember.Object.extend({

});

export default Ember.Component.extend({
  score: 0,
  horizontal: false,
  firstColor: "empty",
  secondColor: "empty",
  thirdColor: "empty",

  boardstate: [Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"}), Tile.create({state: "empty"})],

  actions: {
    selectTile(params) {
      this.set("horizontal", params.horizontal);
      this.set("firstColor", params.firstColor);
      this.set("secondColor", params.secondColor);
      this.set("thirdColor", params.thirdColor);
    },
    placeTile(location) {
      if(this.get("secondColor")==="empty") {
        alert("You forgot to set your tile");
      } else if (this.get("horizontal")) {
        if(location%8!==0 && location%8 !== 7) {
          if(this.get("boardstate")[location-1].state==="empty" && this.get("boardstate")[location+1].state==="empty") {
            //Valid horizontal row placement
            this.get("boardstate").splice(location-1, 1, Tile.create({state: this.get("firstColor")}));
            this.get("boardstate").splice(location, 1, Tile.create({state: this.get("secondColor")}));
            this.get("boardstate").splice(location+1, 1, Tile.create({state: this.get("thirdColor")}));
            //checks if center completed a vertical
            var checkSquare=location;
            if(this.get("boardstate")[checkSquare-8].state===this.get("boardstate")[checkSquare].state && this.get("boardstate")[checkSquare+8].state===this.get("boardstate")[checkSquare].state) {
              this.set("score", this.get("score")+3);
              this.get("boardstate").splice(location-8, 1, Tile.create({state: this.get("firstColor")}));
              this.get("boardstate").splice(location, 1, Tile.create({state: this.get("secondColor")}));
              this.get("boardstate").splice(location+8, 1, Tile.create({state: this.get("thirdColor")}));
            }
            //checks if lefthand side completed vertical then horizontal
            checkSquare=location-1;
            if(this.get("boardstate")[checkSquare-8].state===this.get("boardstate")[checkSquare].state && this.get("boardstate")[checkSquare+8].state===this.get("boardstate")[checkSquare].state) {
              this.set("score", this.get("score")+3);
              this.get("boardstate").splice(checkSquare-8, 1, Tile.create({state: this.get("firstColor")}));
              this.get("boardstate").splice(checkSquare, 1, Tile.create({state: this.get("secondColor")}));
              this.get("boardstate").splice(checkSquare+8, 1, Tile.create({state: this.get("thirdColor")}));
            }
            if(this.get("boardstate")[checkSquare-1].state===this.get("boardstate")[checkSquare].state && this.get("boardstate")[checkSquare+1].state===this.get("boardstate")[checkSquare].state) {
              this.set("score", this.get("score")+3);
              this.get("boardstate").splice(checkSquare-1, 1, Tile.create({state: this.get("firstColor")}));
              this.get("boardstate").splice(checkSquare, 1, Tile.create({state: this.get("secondColor")}));
              this.get("boardstate").splice(checkSquare+1, 1, Tile.create({state: this.get("thirdColor")}));
            }
            //checks if righthand side completed vertical then horizontal
            checkSquare=location+1;
            if(this.get("boardstate")[checkSquare-8].state===this.get("boardstate")[checkSquare].state && this.get("boardstate")[checkSquare+8].state===this.get("boardstate")[checkSquare].state) {
              this.set("score", this.get("score")+3);
              this.get("boardstate").splice(checkSquare-8, 1, Tile.create({state: this.get("firstColor")}));
              this.get("boardstate").splice(checkSquare, 1, Tile.create({state: this.get("secondColor")}));
              this.get("boardstate").splice(checkSquare+8, 1, Tile.create({state: this.get("thirdColor")}));
            }
            if(this.get("boardstate")[checkSquare-1].state===this.get("boardstate")[checkSquare].state && this.get("boardstate")[checkSquare+1].state===this.get("boardstate")[checkSquare].state) {
              this.set("score", this.get("score")+3);
              this.get("boardstate").splice(checkSquare-1, 1, Tile.create({state: this.get("firstColor")}));
              this.get("boardstate").splice(checkSquare, 1, Tile.create({state: this.get("secondColor")}));
              this.get("boardstate").splice(checkSquare+1, 1, Tile.create({state: this.get("thirdColor")}));
            }
            this.sendAction('processMove');
          } else {
            alert("Not a valid space (overlaps an existing color)");
          }
        } else {
          alert("Not a valid space (on the edge)");
        }
      } else {
        if(location>7 && location<56) {
          if(this.get("boardstate")[location-8].state==="empty" && this.get("boardstate")[location+8].state==="empty") {
            //valid vertical row placement
            this.get("boardstate").splice(location-8, 1, Tile.create({state: this.get("firstColor")}));
            this.get("boardstate").splice(location, 1, Tile.create({state: this.get("secondColor")}));
            this.get("boardstate").splice(location+8, 1, Tile.create({state: this.get("thirdColor")}));
            //checks if center completed a horizontal
            var checkSquare=location;
            if(this.get("boardstate")[checkSquare-1].state===this.get("boardstate")[checkSquare].state && this.get("boardstate")[checkSquare+1].state===this.get("boardstate")[checkSquare].state) {
              this.set("score", this.get("score")+3);
              this.get("boardstate").splice(location-1, 1, Tile.create({state: this.get("firstColor")}));
              this.get("boardstate").splice(location, 1, Tile.create({state: this.get("secondColor")}));
              this.get("boardstate").splice(location+1, 1, Tile.create({state: this.get("thirdColor")}));
            }
            //checks if upper side completed vertical then horizontal
            checkSquare=location-8;
            if(this.get("boardstate")[checkSquare-8].state===this.get("boardstate")[checkSquare].state && this.get("boardstate")[checkSquare+8].state===this.get("boardstate")[checkSquare].state) {
              this.set("score", this.get("score")+3);
              this.get("boardstate").splice(checkSquare-8, 1, Tile.create({state: this.get("firstColor")}));
              this.get("boardstate").splice(checkSquare, 1, Tile.create({state: this.get("secondColor")}));
              this.get("boardstate").splice(checkSquare+8, 1, Tile.create({state: this.get("thirdColor")}));
            }
            if(this.get("boardstate")[checkSquare-1].state===this.get("boardstate")[checkSquare].state && this.get("boardstate")[checkSquare+1].state===this.get("boardstate")[checkSquare].state) {
              this.set("score", this.get("score")+3);
              this.get("boardstate").splice(checkSquare-1, 1, Tile.create({state: this.get("firstColor")}));
              this.get("boardstate").splice(checkSquare, 1, Tile.create({state: this.get("secondColor")}));
              this.get("boardstate").splice(checkSquare+1, 1, Tile.create({state: this.get("thirdColor")}));
            }
            //checks if lower side completed vertical then horizontal
            checkSquare=location+8;
            if(this.get("boardstate")[checkSquare-8].state===this.get("boardstate")[checkSquare].state && this.get("boardstate")[checkSquare+8].state===this.get("boardstate")[checkSquare].state) {
              this.set("score", this.get("score")+3);
              this.get("boardstate").splice(checkSquare-8, 1, Tile.create({state: this.get("firstColor")}));
              this.get("boardstate").splice(checkSquare, 1, Tile.create({state: this.get("secondColor")}));
              this.get("boardstate").splice(checkSquare+8, 1, Tile.create({state: this.get("thirdColor")}));
            }
            if(this.get("boardstate")[checkSquare-1].state===this.get("boardstate")[checkSquare].state && this.get("boardstate")[checkSquare+1].state===this.get("boardstate")[checkSquare].state) {
              this.set("score", this.get("score")+3);
              this.get("boardstate").splice(checkSquare-1, 1, Tile.create({state: this.get("firstColor")}));
              this.get("boardstate").splice(checkSquare, 1, Tile.create({state: this.get("secondColor")}));
              this.get("boardstate").splice(checkSquare+1, 1, Tile.create({state: this.get("thirdColor")}));
            }
            this.sendAction('processMove');
          } else {
            alert("Not a valid space (overlaps an existing color)");
          }
        } else {
          alert("Not a valid space (on the edge)");
        }

      }

    }
  }
});