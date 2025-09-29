// components/LabeledInput.js
export const LabeledInput = {
  props: ['label', 'modelValue'],
  emits: ['update:modelValue'],
  template: `
    <div class="labeled-input">
      <label>{{ label }}</label>
      <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    </div>
  `
};
