<template>
  <q-page padding>
      <div class="q-pa-md">
        <q-table :data="data" :columns="columns" row-key="name" :pagination.sync="pagination"/>
      </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      pagination: {
        rowsPerPage: 15 // current rows per page being displayed
      },
      columns: [
        {
          name: 'ssid',
          required: true,
          label: 'SSID',
          align: 'left',
          field: 'ssid',
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px',
          headerClasses: 'bg-primary text-white'
        },
        { 
          label: 'Mac', 
          align: 'center', 
          field: 'mac', 
          sortable: true, 
          headerClasses: 'bg-primary text-white' 
        },
        { 
          label: 'Quality', 
          align: 'center', 
          field: 'quality', 
          sortable: true, 
          //classes: 'badge badge-success', 
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10), 
          headerClasses: 'bg-primary text-white'
        },
        { 
          label: 'Channel', 
          field: 'channel', 
          sortable: true, 
          headerClasses: 'bg-primary text-white'
        },
        { 
          label: 'Security', 
          field: 'security', 
          headerClasses: 'bg-primary text-white' 
        }
      ],
      data: [],
      interval: ''
    }
  },

  created(){
    this.init();
    this.interval = setInterval(this.init, 5000);
  },

  destroyed() {
    clearInterval(this.interval)
  },

  methods: {
    init(){
      axios.get('http://localhost:3000/wireless/scan').then(response => {
        console.log('Response: ', response)
        this.data = response.data;
      })
    }
  }
}
</script>

<style>

</style>