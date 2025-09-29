// components/CardWrapper.js
export const CardWrapper = {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  template: `
    <div v-if="card && card.component" class="card">
      <div class="card-header">
        <div class="title">{{ card.title }}</div>
        <div class="options">{{ card.options }}</div>
      </div>

      <div class="card-content">
        <!-- Full Layout -->
        <div v-if="card.layout === 'full'" class="content-full">
          <component :is="card.component" :data="card.data"></component>
        </div>

        <!-- Split Layout -->
        <div v-else-if="card.layout === 'split'" class="content-split">
          <div class="left-pane">
            <component :is="card.component.left" :data="card.data.left"></component>
          </div>
          <div class="right-pane">
            <component :is="card.component.right" :data="card.data.right"></component>
          </div>
        </div>
      </div>
    </div>
  `
};
