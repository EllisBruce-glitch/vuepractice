import { translation } from '@/utils/translation.js'
import { store } from '@/store'
import { notify } from "@kyvg/vue3-notification";
import dayjs from 'dayjs'
import { extendedConfigs } from '@/utils/configs'

const helpers = {
  validateEmail(email){
    let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
  },
  required(fields, Bale){
    let valid = true
    for (let i = 0; i < fields.length; i++) {
      let item = fields[i]
      if (helpers.isBlank(Bale[item])) {
          valid = false
      }
    }
    return valid
  },
  isNumber(val) {
    var regex = /^[0-9]+$/
    if (val.match(regex)) {
      return true
    }
    return false
  },
  isAplhaNumeric(val) {
    var regex = /^[0-9a-zA-Z]+$/
    var ret = false
    if (val.match(regex)) {
      ret = true
    } else {
      ret = false
    }
    return ret
  },
  cutText(text, length) {
    if (text.split(' ').length > 1) {
      const string = text.substring(0, length)
      const splitText = string.split(' ')
      splitText.pop()
      return splitText.join(' ') + '...'
    } else {
      return text
    }
  },
  capitalizeFirstLetter(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    } else {
      return ''
    }
  },
  isMobile() {
    let ret = false
    // device detection
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substr(0, 4)
      )
    ) {
      ret = true
    }
    return ret
  },
  padStart(value, numberOfPad, padChar) {
    let pattern = ''
    for (let i = 0; i < numberOfPad; i++) {
      pattern += padChar
    }
    return (pattern + value).slice(-numberOfPad)
  },
  formatMobile({ MobileCode = '+852', MobileNumber }) {
    return `${MobileCode}-${MobileNumber}`
  },
  formatDate(date) {
    let isValidDate = dayjs(date).isValid()
    if (isValidDate) {
      if (translation.getLanguage() == 'EN') {
        return dayjs(date).format('MMM D, YYYY')
      } else {
        return dayjs(date).format('YYYY[年]M[月]D[日]')
      }
    } else {
      return '--'
    }
  },
  formatNumber(total) {
    return parseFloat(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace('.00', '');
  },
  formatPrice(price, currencyCode) {
    if (price && parseFloat(price) > 0) {
      return (
        (currencyCode ? currencyCode : '') +
        ' ' +
        (price
          ? parseFloat(price)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, '$&,')
          : '0')
      )
    } else {
      return '0'
    }
  },
  isBlank: (value) => {
    if (value === null || value === undefined || value === '' || value.length === 0) {
      return true
    } else {
      return false
    }
  },
  isValidTableId: (val) => {
    return val && parseInt(val) > 0
  },
  isUndefined: (val) => {
    return typeof val === 'undefined'
  },
  isInteger: (val) => {
    return helpers.isUndefined(val) ? false : Number.isInteger(!isNaN(val) ? Number(val) : null)
  },
  isNumeric: (num) => {
    return (typeof num === 'number' || (typeof num === 'string' && num.trim() !== '')) && !isNaN(num)
  },
  isString: (val) => {
    return typeof val === 'string' || val instanceof String
  },
  isObject: (val) => {
    return !helpers.isUndefined(val) && val.toString() === '[object Object]'
  },
  isArray: (val) => {
    return val instanceof Array
  },
  isEmpty: (val) => {
    return helpers.isBlank(val) || val.length <= 0 || Object.keys(val).length <= 0
  },
  isJSON: function(str) {
    try {
      JSON.parse(str)
    } catch (e) {
      return false
    }

    return true
  },
  toRaw(obj) {
    return JSON.parse(JSON.stringify(obj))
  },
  objToQueryString(obj) {
    const keyValuePairs = []
    for (let i = 0; i < Object.keys(obj).length; i += 1) {
      if (typeof Object.values(obj)[i] === 'undefined') continue
      keyValuePairs.push(`${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(Object.values(obj)[i])}`)
    }

    if (keyValuePairs.length == 0) return ''
    return '?' + keyValuePairs.join('&')
  },
  isSubmitting(){
    return store.getters["page/getData"]?.isSubmitting;
  },
  isFetching(){
    return store.getters["page/getData"]?.isFetching;
  },
  isSuperAdmin(){
    return store.getters["user/getData"]?.UserData?.IsSuperAdmin;
  },
  showMessage({ Code, Message }){ //success message
    let text = translation.translate(Code, Message);
    notify({ text, title : "Success", type : "success" })
  },
  showWarning({ Code, Message }){ //warning message
    let text = translation.translate(Code, Message);
    notify({ text, title : "Warning", type : "warn" })
  },
  catchError(err, showNotifications = false) {
    let Code = err?.Code || err?.response?.data?.Code;
    let Message = err?.Message || err?.response?.data?.Message;

    if(Code || Message){
      let text = translation.translate(Code, Message);
      notify({ text, title : "Error", type : "error" })
    }else{
      console.log(err);
    };
  },
  isFilled(field) {
    if (field==null || field=='' || field.length==0) return false;
    return true
  },
}

const install = (app) => {
  app.config.globalProperties.$h = helpers
}

export { install as default, helpers }
