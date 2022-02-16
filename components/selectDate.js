app.component('select-date', {
    props:{
      title: null,
      datetype: null
    },
    template: 
    `
    <div>
    <h3>{{title}}</h3>
    <input type="date" v-model ="sdate"  v-on:change ="$emit('input', sdate, datetype)">
    </div>
    `,
    data(){
        return {
            sdate: null
        }
    },
    emits: ['input']
  })
  
