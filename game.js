AFRAME.registerComponent("game-play",{
    schema:{
        elementID: {type: "string", default: "#coins"},
    },
    update: function () {
        this.isTouching(this.data.elementID);
    },
    isTouching: function (elementID){
        const element = document.querySelector(elementID);
        element.addEventListener("touch", (e)=> {
            if(elementID.includes("#coins")){
                element.setAttribute("visible", false)
            } else{
                this.game_over()
            }
        })
    },
    game_over: function (){
        var diver = document.querySelector("#diver")
        var element = document.querySelector("#game_over_text")
        element.setAttribute("visible", true)
        plane.setAttribute("dynamic-body", {
          mass: 0
        })
    
    
      },

      isTouching: function(elementID){
          const element = document.querySelector(elementID);
          element.addEventListener("collide", e =>{
              if(elementID.includes("#coinz")){
                  element.setAttribute("visible", false);
                  console.log("coin collision");
              }
          })
      }



})