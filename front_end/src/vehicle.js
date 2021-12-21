class Vehicle{

  static all = []
  static vehiclesContainer = document.getElementById("vehicles-container")
  static vehicleForm = document.getElementById("form-container")

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

    // Setup <ul></ul> to display vehicles
    this.element = document.createElement('ul')
    this.element.dataset.id = this.id
    this.element.id = `vehicle-${this.id}`
    this.element.addEventListener('click', this.handleDelete)

    // Call renderForm() when new vehicle button is clicked
    // this.newVehicleButton = document.getElementById('new-vehicle-btn')
    // this.newVehicleButton.addEventListener('click', this.renderForm )

    Vehicle.all.push(this)
  }

  vehicleHTML(){
    this.element.innerHTML +=`
      <div>
        <h3>${this.year} - ${this.make} - ${this.model}</h3>
        <p>Engine: ${this.engine}</p>
        <p>Passanger Volume: ${this.passanger_volume}</p>
        <p>Safety Rating: ${this.safety_rating}</p>
        <p>Cargo Volume: ${this.cargo_volume}</p>
        <p>M.S.R.P.: ${this.m_s_r_p}</p>
        <p>Combined MPG: ${this.combined_mpg}</p>
        <p>Quality & Reliability: ${this.quality_reliability}</p>
        <p>Horsepower: ${this.horsepower}</p>
        <p>Resale Value: ${this.resale_value}</p>
        <p>Insurance Cost: ${this.insurance_cost}</p>
        <p>Consumer Rating: ${this.consumer_rating}</p> 
      </div>
      <button id='delete-bttn'>Delete</button>
      <br/><br/>  
    `
    return this.element
  }

  addOnDom(){
    Vehicle.vehiclesContainer.append(this.vehicleHTML())
  }

  static renderForm(){
    Vehicle.vehicleForm.innerHTML += `
    <form id="new-vehicle-form">
      <ul>       
          Year: <input type="text" id="year"><br/>
          Make: <input type="text" id="make"><br>
          Model: <input type="text" id="model"><br>
          Engine: <input type="text" id="engine"><br>
          Passanger Volume: <input type="text" id="passanger_volume"><br>
          Safety Rating: <input type="text" id="safety_rating"><br>
          Cargo Volume: <input type="text" id="cargo_volume"><br>
          M.S.R.P.: <input type="text" id="m_s_r_p"><br>
          Combined MPG: <input type="text" id="combined_mpg"><br>
          Quality & Reliability: <input type="text" id="quality_reliability"><br>
          Horsepower: <input type="text" id="horsepower"><br>
          Resale Value: <input type="text" id="resale_value"><br>
          Insurance Cost: <input type="text" id="insurance_cost"><br>
          Consumer Rating: <input type="text" id="consumer_rating"><br>
          Category: <select id="category_id">
                      <option value="1">Car</option>
                      <option value="2">SUV</option>
                    </select><br/><br/>
           
          <input type="submit" id="create">     
      </ul>
    </form>
    `
  }

  // <button id="create-btn">Create</button>  

  handleDelete = () =>{
    if (event.target.innerHTML === 'Delete'){ 
      this.element.remove()
      vehicleService.deleteVehicle(this.id)
    }   
  }

  // createVehicle = () =>{
  //   vehicleService.createVehicle()
  // }

}