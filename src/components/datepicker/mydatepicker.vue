<script>
import myDatepicker from 'vue-datepicker'
import moment from 'moment'
import { manejadorEventos } from '../../main.js'
export default {
  data () {
    return {
      startTimestamp: '',
      cost: '',
      datetimestamp: 0,
      date: {
        time: moment().format('YYYY-MMM-DD HH:mm')
      },
      startTime: {
        time: ''
      },
      endtime: {
        time: ''
      },
      option: {
        type: 'day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MMM-DD',
        placeholder: 'when?',
        inputStyle: {
          'display': 'inline-block',
          'padding': '1px',
          'line-height': '22px',
          'font-size': '12px',
          'border': '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#5F5F5F'
        },
        color: {
          header: '#ccc',
          headerText: '#f00'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      timeoption: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MMM-DD HH:mm',
        placeholder: 'Date-time?',
        inputStyle: {
          'display': 'inline-block',
          'padding': '1px',
          'line-height': '22px',
          'font-size': '12px',
          'border': '2px solid #fff',
          'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          'border-radius': '2px',
          'color': '#5F5F5F'
        },
        color: {
          header: '#ccc',
          headerText: '#f00'
        }
      },
      multiOption: {
        type: 'multi-day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm'
      },
      limit: [{
        type: 'weekday',
        available: [0, 1, 2, 3, 4, 5, 6]
      },
      {
        type: 'fromto',
        from: '2017-12-17',
        to: '2018-01-01'
      }]
    }
  },
  mounted () {
    this.toTimestamp()
  },
  components: {
    'date-picker': myDatepicker
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss')
    }
  },
  methods: {
    enviarEndDatetime: function (endtime) {
      console.log('endtime:')
      console.log(endtime)
      var self = this
      manejadorEventos.$emit('enviar-end-datetime', self.parseTimestamp(endtime.time))
    },
    enviarStartDatetime: function (startTime) {
      console.log('startTime:')
      console.log(startTime)
      var dateStartTime = new Date(startTime.time)
      manejadorEventos.$emit('enviar-start-datetime', dateStartTime.getTime())
    },
    toTimestamp: function () {
      var self = this
      var date = new Date(self.date.time)
      self.datetimestamp = date.getTime()
    },
    parseTimestamp: function (datetime) {
      var date = new Date(datetime)
      return date.getTime()
    }
  }}
</script>
<template>
  <div>
    <p>
      <div class="card">
        <!-- for Vue 2.0 -->
        <div class="row">
          <span>Now：</span>
          <date-picker :date="date" :option="timeoption" :limit="limit"></date-picker>
        </div>
      </div>
    </p>
    <p>
      <div class="card">
        <div class="row">
          <span>Entry：</span>
          <date-picker :date="startTime" :option="timeoption" :limit="limit"  v-on:change="enviarStartDatetime(startTime)">
          {{ date.time }}
          {{ datetimestamp }}
          {{ startTimestamp }}
          </date-picker>
        </div>
      </div>
    </p>
    <p>
      <div class="card">
        <div class="row">
          <span>Leaving：</span>
            <date-picker :date="endtime" :option="timeoption" :limit="limit" v-on:change="enviarEndDatetime(endtime)"></date-picker>
        </div>
      </div>
    </p>
    <p>
      <div class="card">
        <div class="row">
          <span>
          COST $:
          </span>
          <span>
          {{ cost }}
          </span>
        </div>
      </div>
    </p>
    <p>
      <div class="card">
        <div class="row">
          <span>
           Tiempo:
          </span>
          <span>
          {{ date.time }}
          <br/>
          {{ startTime.time }}
          <br/>
          {{ endtime.time }}
          </span>
        </div>
      </div>
    </p>
  </div>
</template>
