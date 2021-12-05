class VehicleService{
  constructor(endpoint){
    this.endpoint = endpoint;
  }
  getVehicles(){
    fetch(`${this.endpoint}/vehicles`)
    .then(resp => resp.json())
    .then(vehicles => {
      for (const vehicle of vehicles){
        const v = new Vehicle(vehicle)
        v.addOnDom()
      }
    })
  }
}