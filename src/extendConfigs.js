var country_codes = require('./CountryCodes.json');
import _ from "lodash";

let extended = {
  socketServer : "", 
  navigationLinks : [
    {
      Name : "Dashboard",
      Icon : "fas fa-home",
      Path : ["/dashboard"],
      Role : []
    }
  ],
  currencyCode: 'HK$',
  defaultMobileCode: '+852',
  MOBILE_CODES : country_codes,
}

export default extended