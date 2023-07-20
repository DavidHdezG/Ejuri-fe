<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
let s = ref(150);
let g = ref(10);
let f = ref(1.5);
let gallery = ref(null);
let images = ref(null);
let whoxd = ref(null);
const who = (nombre)=>{
    whoxd.value = nombre;
}
</script>

<template>
  <MainLayout page-title="Histórico">
    {{ whoxd }}
    <div class="flex flex-col items-center justify-center p-7">
      <h1 class="text-4xl font-bold text-gray-700">
        Lista de documentos escaneados
      </h1>
    </div>
    <div class="gallery grid gap-2.5 aspect-video">
      <div>
        <img @mouseenter="who('hola')"
          src="https://picsum.photos/id/1028/300/300"
          alt="a forest after an apocalypse"
        />
      </div>
      <div>
        <img
            @mouseenter="who('hola2')"
          src="https://picsum.photos/id/15/300/300"
          alt="a waterfall and many rocks"
        />
      </div>
      <div>
        <img
        @mouseenter="who('hola3')"
          src="https://picsum.photos/id/1040/300/300"
          alt="a house on a mountain"
        />
      </div>
      <div>
        <img
        @mouseenter="who('hola4')"
          src="https://picsum.photos/id/106/300/300"
          alt="sime pink flowers"
        />
      </div>
      <div>
        <img
        @mouseenter="who('hola5')"
          src="https://picsum.photos/id/136/300/300"
          alt="big rocks with some trees"
        />
      </div>
      <div>
        <img
        @mouseenter="who('hola6')"
          src="https://picsum.photos/id/1039/300/300"
          alt="a waterfall, a lot of tree and a great view from the sky"
        />
      </div>
      <div>
        <img
        @mouseenter="who('hola7')"
          src="https://picsum.photos/id/110/300/300"
          alt="a cool landscape"
        />
      </div>
      <div>
        <img
        @mouseenter="who('hola8')"
          src="https://picsum.photos/id/1047/300/300"
          alt="inside a town between two big buildings"
        />
        <span class="txt">hola</span>
      </div>
      <!-- <img
        src="https://picsum.photos/id/1057/300/300"
        alt="a great view of the sea above the mountain"
      /> -->
    </div>
  </MainLayout>
</template>

<style lang="css" scoped>
.gallery {
  --s: 300px; /* control the size */
  --g: 10px; /* control the gap */
  --f: 1.5; /* control the scale factor */

  width: calc(3 * var(--s) + 2 * var(--g));
  /* aspect-ratio: 1; */
  grid-template-columns: repeat(4, auto);
}

.gallery > div img {
  width: 0;
  height: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  cursor: pointer;
  filter: grayscale(80%);
  transition: 0.35s linear;
}

.gallery img:hover {
  filter: grayscale(0);
  width: calc(var(--s) * var(--f));
  height: calc(var(--s) * var(--f));
}

.gallery > div {

  overflow: hidden;
}

.txt{
    display: hidden;
}
.txt:hover{
    display: block;
}

</style>
