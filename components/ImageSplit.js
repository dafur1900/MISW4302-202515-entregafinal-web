// components/ImageSplit.js
export const ImageSplit = {
  props: ['data'],
  template: `
    <div>
      <img class="full-img" :src="data.src" alt="Split Image" />
      <p>{{ data.caption }}</p>
    </div>
  `
};
