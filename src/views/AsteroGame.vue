<template>
  <div id="gameContainer">
    <div class="score-container">
      <p>
        Score : <span id="score">{{ score }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "AsteroGame",
  data() {
    return {
      PLAYERSPEED: 2,
      LOCAL_STORAGE: "test",
      URL: "http://localhost:5000/asteroid-scores",
      speed: 3,

      score: 0,
      minTop: 0,
      width: 0,
      height: 0,
      intervalPlayer: null,
      intervalObstacles: null,

      isUp: false,
      isDown: false,
      isLeft: false,
      isRight: false,

      start: false,
      pseudo: "",

      container: null,
      player: null,
    };
  },
  mounted() {
    this.initGame();
  },
  methods: {
    initGame() {
      this.pseudo = prompt("Please enter your pseudo", "Jhon Doe");

      this.container = document.getElementById("gameContainer");
      this.onResize();
      window.onresize = function() {
        this.onResize();
      };
      this.createPlayer();

      this.intervalObstacles = setInterval(
        this.handleAdvance,
        this.speedObstacles
      );

      console.log("c : ", this.container.getBoundingClientRect().top);

      this.intervalPlayer = setInterval(this.movePlayer, 1);
      this.initControls();
      this.generateObstacle();
    },

    createPlayer() {
      if (this.player) {
        this.container.removeChild(this.player);
      }

      this.isUp = false;
      this.isDown = false;
      this.isLeft = false;
      this.isRight = false;

      this.player = document.createElement("div");
      this.player.className = "player";
      let t = this.widthheight / 2;
      this.player.style.top = `${t}px`;
      this.player.style.left = "100px";

      this.player.style.height = "20px";
      this.player.style.width = "20px";
      this.container.appendChild(this.player);
    },

    initControls() {
      window.addEventListener("keydown", (evt) => {
        this.start = true;

        if (evt.code === "ArrowUp") {
          this.isUp = true;
        }
        if (evt.code === "ArrowDown") {
          this.isDown = true;
        }
        if (evt.code === "ArrowLeft") {
          this.isLeft = true;
        }
        if (evt.code === "ArrowRight") {
          this.isRight = true;
        }
      });
      window.addEventListener("keyup", (evt) => {
        if (evt.code === "ArrowUp") {
          this.isUp = false;
        }
        if (evt.code === "ArrowDown") {
          this.isDown = false;
        }
        if (evt.code === "ArrowLeft") {
          this.isLeft = false;
        }
        if (evt.code === "ArrowRight") {
          this.isRight = false;
        }
      });
    },

    movePlayer() {
      let maxTop = this.container.getBoundingClientRect().top;

      if (this.isUp) {
        let p = parseInt(this.getPx(this.player.style.top)) - this.PLAYERSPEED;
        this.player.style.top = `${
          p >= maxTop && p <= this.height ? p : this.height - 5
        }px`;
      }
      if (this.isDown) {
        let p = parseInt(this.getPx(this.player.style.top)) + this.PLAYERSPEED;
        this.player.style.top = `${
          p >= maxTop && p <= this.height ? p : maxTop
        }px`;
      }
      if (this.isLeft) {
        let p = parseInt(this.getPx(this.player.style.left)) - this.PLAYERSPEED;
        this.player.style.left = `${p >= 0 && p <= this.width ? p : 0}px`;
      }
      if (this.isRight) {
        let p = parseInt(this.getPx(this.player.style.left)) + this.PLAYERSPEED;
        this.player.style.left = `${p >= 0 && p <= this.width ? p : 0}px`;
      }
    },

    generateObstacle() {
      if (this.start) {
        let obs = document.createElement("div");
        obs.className = "obstacle";
        let l = this.width;
        obs.style.left = `${l}px`;

        let t = Math.random() * (this.height - this.minTop) + this.minTop;
        let h = Math.random() * (100 - 20) + 20;
        let w = Math.random() * (100 - 20) + 20;

        obs.style.top = `${t}px`;
        obs.style.height = `${h}px`;
        obs.style.width = `${w}px`;

        this.container.appendChild(obs);
      }
      let x = Math.random() * (200 - 50) + 50;
      setTimeout(this.generateObstacle, x);
    },

    onResize() {
      this.minTop = this.container.getBoundingClientRect().top;
      this.width = this.container.clientWidth;
      this.height = this.container.clientHeight + this.container.getBoundingClientRect().top;
    },

    handleAdvance() {
      let obstacles = document.getElementsByClassName("obstacle");

      for (const obs of obstacles) {
        let l = parseInt(this.getPx(obs.style.left) - this.speed);
        if (l < 0) {
          // destroy obstacle
          this.container.removeChild(obs);
          this.scorePlus();
        } else {
          obs.style.left = `${l}px`;
        }

        if (this.detectCollision(this.player, obs)) this.endGame();
      }
    },

    detectCollision(a, b) {
      return !(
        parseInt(this.getPx(a.style.top)) +
          parseInt(this.getPx(a.style.height)) <
          parseInt(this.getPx(b.style.top)) ||
        parseInt(this.getPx(b.style.top)) +
          parseInt(this.getPx(b.style.height)) <
          parseInt(this.getPx(a.style.top)) ||
        parseInt(this.getPx(a.style.left)) +
          parseInt(this.getPx(a.style.width)) <
          parseInt(this.getPx(b.style.left)) ||
        parseInt(this.getPx(b.style.left)) +
          parseInt(this.getPx(b.style.width)) <
          parseInt(this.getPx(a.style.left))
      );
    },

    getPx(value) {
      return value.slice(value.length * -1, -2);
    },

    endGame() {
      this.start = false;
      clearInterval(this.intervalObstacles);
      clearInterval(this.intervalPlayer);
      this.container.removeChild(this.player);
      alert("You Lost");
      this.saveScore();
    },

    displayScores() {
      // GET scores
      // axios
      //   .get(URL)
      //   .then(function (response) {
      //     // handle success
      //     let scores = response.data;
      //     scores.sort((a, b) => {
      //       if (a.score > b.score) {
      //         return -1;
      //       } else if (a.score < b.score) {
      //         return 1;
      //       } else {
      //         return 0;
      //       }
      //     });
      //     let scText = "Top Scores : ";
      //     scores.forEach((element) => {
      //       scText += "\n";
      //       scText += element.pseudo + " : " + element.score;
      //     });
      //     alert(scText);
      //     window.location.reload(true);
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log("RESPONSE", error);
      //   });

      let scores = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE)) || [];
      scores.sort((a, b) => {
        if (a.score > b.score) {
          return -1;
        } else if (a.score < b.score) {
          return 1;
        } else {
          return 0;
        }
      });
      let scText = "Top Scores : ";
      scores.forEach((element) => {
        scText += "\n";
        scText += element.pseudo + " : " + element.score;
      });
      alert(scText);
      window.location.reload(true);
    },

    saveScore() {
      // POST score
      let scores = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE)) || [];
      scores.push({
        pseudo: this.pseudo,
        score: this.score,
      });

      localStorage.setItem(this.LOCAL_STORAGE, JSON.stringify(scores));
      this.displayScores();

      // axios
      //   .post(URL, {
      //     pseudo: pseudo,
      //     score: score,
      //   })
      //   .then(function (response) {
      //     console.log("RESPONSE", response);
      //     // handle success
      //     let scores = response.data;
      //     scores.sort((a, b) => {
      //       if (a.score > b.score) {
      //         return -1;
      //       } else if (a.score < b.score) {
      //         return 1;
      //       } else {
      //         return 0;
      //       }
      //     });
      //     let scText = "Top Scores : ";
      //     scores.forEach((element) => {
      //       scText += "\n";
      //       scText += element.pseudo + " : " + element.score;
      //     });
      //     alert(scText);
      //     window.location.reload(true);
      //   })
      //   .catch(function (error) {
      //     // handle error
      //     console.log("RESPONSE", error);
      //   });
    },

    scorePlus() {
      this.score += 1;
    },
  },
};
</script>

<style>

#gameContainer {
  position: absolute;
  width: 100%;
  height: calc(100vh - 2.5em);
  background-color: rgba(0, 0, 0, 0.582);
  background-image: radial-gradient(
      white,
      rgba(255, 255, 255, 0.2) 2px,
      transparent 40px
    ),
    radial-gradient(white, rgba(255, 255, 255, 0.15) 1px, transparent 30px),
    radial-gradient(white, rgba(255, 255, 255, 0.1) 2px, transparent 40px),
    radial-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.1) 2px,
      transparent 30px
    );
  background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
  background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
  overflow: hidden;
}

.player {
  position: absolute;
  /* background-color: red; */
  background-image: url("/games/astero/player.svg");
  background-size: 100% 100%;
  -o-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: cover;
  border: 1px solid rgb(105, 105, 255);
  border-radius: 20px;
  transform: rotate(90deg);
}

.obstacle {
  position: absolute;
  /* background-color: green; */
  background-image: url("/games/astero/asteroidTexture.jpg");
  background-size: 100% 100%;
  -o-background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  background-size: cover;
  border-radius: 15px;
}

.score-container {
  color: red;
}
</style>
