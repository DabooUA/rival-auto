class Vehicle{

  static all = []
  static vehiclesContainer = document.getElementById("vehicles-container")

  constructor({id, category_id, year, make, model, engine, passanger_volume, safety_rating, cargo_volume, m_s_r_p, combined_mpg, quality_reliability, horsepower, resale_value, insurance_cost, consumer_rating}){
    this.id = id
    this.category_id = category_id
    this.year = year
    this.make = make
    this.model = model
    this.engine = engine
    this.passanger_volume = passanger_volume
    this.safety_rating = safety_rating
    this.cargo_volume = cargo_volume
    this.m_s_r_p = m_s_r_p
    this.combined_mpg = combined_mpg
    this.quality_reliability = quality_reliability
    this.horsepower = horsepower
    this.resale_value = resale_value
    this.insurance_cost = insurance_cost
    this.consumer_rating = consumer_rating

    this.element = document.createElement('li')
    this.element.dataset.id = this.id
    this.element.id = `vehicle-${this.id}`

    Vehicle.all.push(this)
  }

  vehicleHTML(){
    this.element.innerHTML +=`
      <div>
      
        <h3>${this.year} - ${this.make} - ${this.model}</h3>
        <p>${this.engine}</p>
        <p>${this.passanger_volume}</p>
        <p>${this.safety_rating}</p>
        <p>${this.cargo_volume}</p>
        <p>${this.m_s_r_p}</p>
        <p>${this.combined_mpg}</p>
        <p>${this.quality_reliability}</p>
        <p>${this.horsepower}</p>
        <p>${this.resale_value}</p>
        <p>${this.insurance_cost}</p>
        <p>${this.consumer_rating}</p>
      </div>
    `
    return this.element
  }

  addOnDom(){
    Vehicle.vehiclesContainer.append(this.vehicleHTML())
  }

}