/* eslint-disable no-tabs */
/* eslint-disable no-tabs */
<template>
    <div>
      <div v-if="loading"></div>
      <div v-else class="podcastPlayer">
        <div>
          <h3>{{this.title}}</h3>
          <span class="level">{{this.level}}</span>
        </div>
        <div class="albumCover">
          <img :src="this.thumbnail">
        </div>
        <div class="buttons">
            <v-icon x-large class="button">skip_previous</v-icon>
            <v-icon x-large class="button" @click.native="skipSeconds(-10)">replay_10</v-icon>
            <a class="button play" v-on:click="playAudio()" title="Play/Pause Song">
                <transition name="slide-fade" mode="out-in">
                    <v-icon class="button" v-if="paused || firstPlay" size="55" key="play">play_circle_filled</v-icon>
                    <v-icon class="button" v-else size="55" key="pause">pause_circle_filled</v-icon>
                </transition>
            </a>
            <v-icon x-large class="button" @click.native="skipSeconds(10)">forward_10</v-icon>
            <v-icon x-large class="button">skip_next</v-icon>
            <!-- <v-btn outlined icon class="ma-2" color="teal" @click.native="playing ? pause() : play()" :disabled="!loaded">
                <v-icon v-if="!playing || paused">play_arrow</v-icon>
                <v-icon v-else>pause</v-icon>
            </v-btn>
            <v-btn outlined icon class="ma-2" color="teal" @click.native="stop()" :disabled="!loaded">
                <v-icon>stop</v-icon>
            </v-btn>
            <v-btn outlined icon class="ma-2" color="teal" @click.native="mute()" :disabled="!loaded">
                <v-icon v-if="!isMuted">volume_up</v-icon>
                <v-icon v-else>volume_off</v-icon>
            </v-btn>
            <v-btn outlined icon class="ma-2" color="teal" @click.native="loaded ? download() : reload()">
                <v-icon v-if="!loaded">refresh</v-icon>
                <v-icon v-else>get_app</v-icon>
            </v-btn> -->
            <!-- <v-slider v-model="percentage" height="5" style="margin-top: 15px; margin-bottom: 15px; height=8px" @click.native="setPosition()" color="teal" :disabled="!loaded"></v-slider> -->
            <!-- <v-slider track-color="grey"></v-slider> -->
            <!-- <div class="slider" ref="slider"></div>
                <div class="progressInfo"></div>
                <div class="process" :style="{width: pWidth}"></div>
                <div class="thunk" ref="trunk" :style="{left}">
                <div class="block"></div>
            </div> -->
        </div>
        {{sliderValue}}
        <v-slider
          track-color="white"
          v-model="sliderValue"
          @click="setTrackTime(sliderValue)"
          @mousedown="pauseTrackTime"
          @mouseup="setTrackTime(sliderValue)"
          :max="trackDuration">
          </v-slider>
        </div>
    </div>
</template>

<script>
const formatTime = second => new Date(second * 1000).toISOString().substr(11, 8);
const timeOffset = 100000;

export default {
  name: 'podcast-player',
  props: {
    file: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    level: {
      type: String,
      default: null
    },
    thumbnail: {
      type: String,
      default: null
    }
  },
  computed: {
    duration: function() {
      return this.audio ? formatTime(this.totalDuration) : '';
    },
    pWidth() {
    //   if(this.slider){
    //     return this.slider.offsetWidth * this.scale + 'px';
    //   }else{
    //     return 0 + 'px'
    //   }
      return 50 + 'px';
    },
    left() {
      return 20 + 'px';
    }
  },
  data() {
    return {
      test: 140,
      firstPlay: true,
      isMuted: false,
      loading: true,
      playing: false,
      paused: false,
      percentage: 20,
      currentTime: '00:00:00',
      audio: undefined,
      totalDuration: 0,
      currentValue: 0,
      sliderValue: 0,
      trackDuration: 0
    };
  },

  methods: {
    setTrackTime(val) {
      this.audio.currentTime = val / timeOffset;
    },
    pauseTrackTime() {
      console.log('pause audio');
    },
    skipSeconds(seconds) {
      this.audio.currentTime = (this.audio.currentTime * timeOffset + (seconds * timeOffset)) / timeOffset;
    },
    setPosition() {
      this.audio.currentTime = parseInt(this.audio.duration / 100 * this.percentage);
    },
    stop() {
      this.paused = this.playing = false;
      this.audio.pause();
      this.audio.currentTime = 0;
    },
    playAudio() {
      this.firstPlay = false;
      if (this.playing) {
        this.pauseAudio();
      } else {
        this.paused = false;
        this.audio.play();
        this.playing = true;
      }
    },
    pauseAudio() {
      this.paused = true;
      this.playing = false;
      this.audio.pause();
    },
    download() {
      this.audio.pause();
      window.open(this.file, 'download');
    },
    mute() {
      this.isMuted = !this.isMuted;
      this.audio.muted = this.isMuted;
      this.volumeValue = this.isMuted ? 0 : 75;
    },
    reload() {
      this.audio.load();
    },
    _handleLoaded: function() {
      if (this.audio.readyState >= 2) {
        if (this.audio.duration === Infinity) {
          // Fix duration for streamed audio source or blob based
          // https://stackoverflow.com/questions/38443084/how-can-i-add-predefined-length-to-audio-recorded-from-mediarecorder-in-chrome/39971175#39971175
          this.audio.currentTime = 1e101;
          this.audio.ontimeupdate = () => {
            this.audio.ontimeupdate = () => {};
            this.audio.currentTime = 0;
            this.totalDuration = parseInt(this.audio.duration);
            this.loaded = true;
          };
        } else {
          this.totalDuration = parseInt(this.audio.duration);
          this.loaded = true;
        }

        if (this.autoPlay) this.audio.play();
      } else {
        throw new Error('Failed to load sound file');
      }
    },
    _handlePlayingUI: function(e) {
      this.percentage = this.audio.currentTime / this.audio.duration * 100;
      this.currentTime = formatTime(this.audio.currentTime);
    },
    _handlePlayPause: function(e) {
      if (e.type === 'play' && this.firstPlay) {
        // in some situations, audio.currentTime is the end one on chrome
        this.audio.currentTime = 0;
        if (this.firstPlay) {
          this.firstPlay = false;
        }
      }
      if (e.type === 'pause' && this.paused === false && this.playing === false) {
        this.currentTime = '00:00:00';
      }
    },
    _handleEnded() {
      this.paused = this.playing = false;
    },
    init: function() {
      this.audio.addEventListener('timeupdate', this._handlePlayingUI);
      this.audio.addEventListener('loadeddata', this._handleLoaded);
      this.audio.addEventListener('pause', this._handlePlayPause);
      this.audio.addEventListener('play', this._handlePlayPause);
      this.audio.addEventListener('ended', this._handleEnded);
    },
    loadData() {
      this.trackDuration = this.audio.duration * timeOffset;
      this.loading = false;
    },
    updateSlider() {
      this.sliderValue = this.audio.currentTime * timeOffset;
    },
    myInit() {
      this.audio.addEventListener('loadeddata', this.loadData);
      this.audio.addEventListener('timeupdate', this.updateSlider);
    }
  },
  mounted() {
    this.audio = new Audio('http://popupchinese.com/data/26/audio.mp3');
    this.myInit();
  },
  beforeDestroy() {
    this.audio.removeEventListener('timeupdate', this._handlePlayingUI);
    this.audio.removeEventListener('loadeddata', this._handleLoaded);
    this.audio.removeEventListener('pause', this._handlePlayPause);
    this.audio.removeEventListener('play', this._handlePlayPause);
    this.audio.removeEventListener('ended', this._handleEnded);
  }
};

</script>

<style scoped>

.podcastPlayer{
    background-color: rgb(243, 242, 189);
    background-image: linear-gradient(to right, #9ca5f5, #7ff5ae);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 5px 5px 10px -4px #63645e;
    padding: 20px;
    margin: -12px -12px 0px -12px;
    overflow: hidden;
}

.podcastPlayer .buttons{
    text-align: center;
    margin: 20px auto;
}

.vueAudioBetter .slider {
  position: relative;
  margin: 26px auto;
  width: 80%;
  height: 10px;
  background: rgb(248, 247, 247);
  border-radius: 5px;
  cursor: pointer;
}

.slidecontainer {
    width: 100%;
}

.slider {
    -webkit-appearance: none;
    margin: 20px auto;
    width: 90%;
    height: 10px;
    background: white;
    outline: none;
    border-radius: 5px;
}

.slider::-webkit-slider-thumb {
-webkit-appearance: none;
appearance: none;
width: 20px;
height: 20px;
border-radius: 50%;
background: #4CAF50;
cursor: pointer;
opacity: 80%;
}

.slider::-moz-range-thumb {
width: 25px;
height: 25px;
border-radius: 50%;
background: #4CAF50;
cursor: pointer;
}

.playerButtons {
position: relative;
margin: 0 auto;
margin-bottom: 1.5rem;
text-align: center;
}

.button {
    color: rgba(0, 0, 0, 0.75);
    border-radius: 50%;

    outline: 0;
    text-decoration: none;
    cursor: pointer;
    transition: 0.5s;
}

.button.play{
    margin: 0 1.5rem;
}

.button:active{
    opacity: 0.75;
    transform: scale(0.75);
}

.button.isDisabled{
color: rgba(0, 0, 0, 0.2);
cursor: initial;
}

.button.isDisabled:active{
    transform: none;
}

.level{
  color: white;
}

.albumCover{
  width: 100%;
  overflow: hidden;
  padding: 20px;
}

.albumCover img{
  width: 100%;
  border-radius: 0.5em;
  object-position: 50% 50%;
  object-fit: cover;
  z-index: 10;
}

</style>
