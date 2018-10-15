import { manejadorEventos } from '../../main.js'
export default {
  name: 'parking',
  mounted () {
  },
  data: function () {
    return {
      startTime: 12,
      endtime: 0,
      nowtime: 0,
      selected: 'corto',
      count: 0,
      rate: 0.0,
      calculatedCost: undefined
    }
  },
  created: function () {
    manejadorEventos.$on('enviar-now-datetime', this.asignarNowDatetime)
    manejadorEventos.$on('enviar-end-datetime', this.asignarEndDatetime)
    manejadorEventos.$on('enviar-start-datetime', this.asignarStartDatetime)
  },
  methods: {
    validar: function (fechaEntrada, fechaActual) {
      if (fechaEntrada < fechaActual) {
        console.log('false')
        return false
      }
      return true
    },
    validarFechaHora: function () {
      var self = this
      var fechaE = self.startTime
      var fechaA = self.nowtime
      console.log('fechaE', fechaE)
      if (!self.validar(fechaE, fechaA)) {
        console.log('la fecha/hora de ingreso debe ser la actual')
        alert('la fecha/hora de ingreso debe ser la actual')
        return false
      }
      return true
    },
    sendSelected: function (selected) {
      var self = this
      console.log('selected')
      console.log(selected)
      switch (selected) {
        case 'short':
          console.log(selected)
          self.rate = 6
          break
        case 'economic':
          console.log(selected)
          self.rate = 2
          break
        case 'standard':
          console.log(selected)
          self.rate = 3
          break
        case 'long':
          console.log(selected)
          if (self.validarFechaHora()) {
            self.rate = 2
          }
          break
        case 'night':
          console.log(selected)
          self.rate = 0.41667
          break
        default:
          console.log('no-selected')
          self.rate = 0
      }
    },
    asignarNowDatetime: function (nowtime) {
      console.log('asignar-nowTime:')
      console.log(nowtime)
      var self = this
      self.nowtime = nowtime
    },
    asignarStartDatetime: function (startTime) {
      console.log('asignar-startTime:')
      console.log(startTime)
      var self = this
      self.startTime = startTime
    },
    asignarEndDatetime: function (endtime) {
      console.log('asignar-endtime:')
      console.log(endtime)
      var self = this
      self.endtime = endtime
    },
    calculateCost: function () {
      var self = this
      var aux = 0
      var tt = self.endtime - self.startTime
      if ((tt / 3600 / 1000) > 4) {
        aux = 'Choose another'
      } else {
        aux = (self.endtime - self.startTime) * self.rate / 3600000
      }
      self.calculatedCost = aux
    }
  },
  computed: {
    dateTime: function () {
      var self = this
      console.log(self.endtime)
      console.log(self.startTime)
      return self.endtime - self.startTime
    },
    costo: function () {
      return (this.endtime - this.startTime) * 4 / 3600000
    },
    costoRate: function () {
      var self = this
      return (self.endtime - self.startTime) * self.rate / 3600000
    }
  },
  watch: {
    startTime: function (value, backValue) {
      console.log('watch-startTime:')
    }
  }

}
