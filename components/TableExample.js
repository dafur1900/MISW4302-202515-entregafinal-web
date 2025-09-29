// components/TableExample.js
export const TableExample = {
  props: ['data'],
  template: `
    <div>
      <h3>Sample Table</h3>
      <table>
        <thead>
          <tr><th>Name</th><th>Age</th></tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in data" :key="i">
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
};