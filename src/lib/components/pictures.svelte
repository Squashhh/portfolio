<script>
  import { Carousel } from 'flowbite-svelte'
  export const images = [
  {
    id: 0,
    name: "CAULDRON",
    imgurl: "/images/carousel/one.png",
  },
  {
    id: 1,
    name: "LARGUAGE",
    imgurl: "/images/carousel/two.png",
  },
  {
    id: 2,
    name: "CANNON",
    imgurl: "/images/carousel/three.png",
  }
];
let showThumbs=false
let showCaptions=false
let showIndicators=false
let slideControls=false
</script>

<div class="max-w-4xl" style="display: flex; justify-content: center; align-items: center;">
  <Carousel {images} loop {showCaptions} {showThumbs} {showIndicators} {slideControls}/>
</div>