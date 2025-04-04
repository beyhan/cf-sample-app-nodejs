const xsenv = require('@sap/xsenv');

// app-bound services environment variables
module.exports = {
  get_service_label: function () {
    const services = xsenv.readServices();
    for (const key in services) {
      if (services[key].label) {
        return services[key].label;
      }
    }
  },
  get_service_name: function () {
    const services = xsenv.readServices();
    for (const key in services) {
      if (services[key].name) {
        return services[key].name;
      }
    }
  },
  get_service_plan: function () {
    const services = xsenv.readServices();
    for (const key in services) {
      if (services[key].plan) {
        return services[key].plan;
      }
    }
  }
}
