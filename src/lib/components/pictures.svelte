<script>
  import { Carousel } from 'flowbite-svelte'
  export const images = [
  {
    id: 0,
    name: "CAULDRON",
    imgurl: "/images/carousel/one.png",
    attribution: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
  },
  {
    id: 1,
    name: "LARGUAGE",
    imgurl: "/images/carousel/two.png",
    attribution: "cristina-gottardi-CSpjU6hYo_0-unsplash.com",
  },
  {
    id: 2,
    name: "CANNON",
    imgurl: "/images/carousel/three.png",
    attribution: "johannes-plenio-RwHv7LgeC7s-unsplash.com",
  }
];
let showThumbs=false
let showCaptions=false
</script>

<div class="max-w-4xl" style="display: flex; justify-content: center; align-items: center;">
  <Carousel {images} loop {showCaptions} {showThumbs}/>
</div>
