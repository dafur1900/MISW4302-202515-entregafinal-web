import { LabeledInput } from './LabeledInput.js';

export const iPodForm = {
  components: { LabeledInput },
  data() {
    return {
      form: {
        first: '',
        last: '',
        email: '',
        phone: '',
        city: ''
      }
    };
  },
  template: `
    <div class="ipod-form">
      <LabeledInput label="First Name" v-model="form.first" />
      <LabeledInput label="Last Name" v-model="form.last" />
      <LabeledInput label="Email" v-model="form.email" />
      <LabeledInput label="Phone" v-model="form.phone" />
      <LabeledInput label="City" v-model="form.city" />
      <button class="btn-rounded-md" @click="submit">Submit</button>
    </div>
  `,
  methods: {
    submit() {
      alert(`Submitted:\n${JSON.stringify(this.form, null, 2)}`);
    }
  }
};
