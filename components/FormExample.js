// components/FormExample.js
export const FormExample = {
  props: ['data'],
  data() {
    return {
      checked: false,
      name: '',
      description: ''
    };
  },
  template: `
    <div>
      <h3>Form Example</h3>
      <input type="text" placeholder="Enter name" v-model="name" />
      <textarea placeholder="Enter description" v-model="description"></textarea>
      <label class="switch">
        <input type="checkbox" v-model="checked">
        <span class="slider"></span>
      </label> Toggle: {{ checked ? 'On' : 'Off' }}<br><br>
      <button @click="alertClicked">Submit</button>
    </div>
  `,
  methods: {
    alertClicked() {
      alert(`Submitted:\nName: ${this.name}\nDescription: ${this.description}\nToggle: ${this.checked ? 'On' : 'Off'}`);
    }
  }
};