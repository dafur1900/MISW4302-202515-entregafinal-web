// components/ImageFull.js
export const ImageFull = {
  props: ['data'],
  template: `
    <img class="full-img" :src="data.src" alt="Full Image" />
  `
};