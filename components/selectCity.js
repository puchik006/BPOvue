app.component('select-city', {
  props:{
    title: null,
    citytype: null
  },
  template: 
  `
  <div>
  <h3>{{title}}</h3>
   <select v-model.lazy="selected" v-on:change ="$emit('select', selected, citytype)">
      <option v-for="option in options" v-bind:value="option">
        {{ option }}
      </option>
    </select>
  </div>
  `,
  data() {
    return {
      options: cityList,
      selected: null,
    }
  },
  methods:{

  },
  emits: ['select']
})

let cityList = ["Moscow","Rome","Bagdad"];

{/* <span>Выбрано: {{ selected }}</span> */}