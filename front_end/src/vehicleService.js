class VehicleService{
  constructor(endpoint){
    this.endpoint = endpoint
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

  createVehicle(){
    const vehicle = {
      year: document.getElementById('year').value,
      make: document.getElementById('make').value,
      model: document.getElementById('model').value,
      engine: document.getElementById('engine').value,
      passanger_volume: document.getElementById('passanger_volume').value,
      safety_rating: document.getElementById('safety_rating').value,
      cargo_volume: document.getElementById('cargo_volume').value,
      m_s_r_p: document.getElementById('m_s_r_p').value,
      combined_mpg: document.getElementById('combined_mpg').value,
      quality_reliability: document.getElementById('quality_reliability').value,
      horspower: document.getElementById('horsepower').value,
      resale_value: document.getElementById('resale_value').value,
      insurance_cost: document.getElementById('insurance_cost').value,
      consumer_rating: document.getElementById('consumer_rating').value,
      category_name: document.getElementById('category_name').value
    }
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(vehicle)
    }
    fetch(`${this.endpoint}/vehicles`, configObj)
    .then(resp => resp.json())
    .then(vehicle => {
      const v = new Vehicle(vehicle)
      v.addOnDom() 
    })
  }
  deleteVehicle(id){
    fetch(`${this.endpoint}/vehicles/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(json => alert(json.message))
  }
}

