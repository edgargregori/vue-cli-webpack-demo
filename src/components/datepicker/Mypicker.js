// import myDatepicker from 'vue-datepicker'
import myDatepicker from 'vue-datepicker/vue-datepicker-es6.vue'
import moment from 'moment'
import { manejadorEventos } from '../../main.js'
var startDatetime = require('./time-picker/enviarStartTime.js')
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
        time: moment().format('YYYY-MMM-DD HH:mm')
      },
      endtime: {
        time: moment().format('YYYY-MMM-DD HH:mm')
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
        from: startDatetime.fromBeforeDay(),
        to: startDatetime.toAfterWeek()
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
    enviarNowDatetime: function () {
      var self = this
      var now = moment().format('YYYY-MMM-DD HH:mm')
      console.log('now:')
      console.log(now)
      manejadorEventos.$emit('enviar-now-datetime', self.parseTimestamp(now))
    },
    enviarEndDatetime: function (endtime) {
      console.log('endtime:')
      console.log(endtime)
      var self = this
      manejadorEventos.$emit('enviar-end-datetime', self.parseTimestamp(endtime.time))
    },
    sendStartDatetime: function (startTime) {
      startDatetime.sendDatetime(startTime, manejadorEventos)
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
