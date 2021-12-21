const base_url = "http://127.0.0.1:3000"
const vehicleService = new VehicleService(base_url)


Vehicle.vehicleForm.addEventListener('submit', handleSubmit)
vehicleService.getVehicles()
Vehicle.renderForm()

function handleSubmit(){
  event.preventDefault()
  vehicleService.createVehicle()
  event.target.reset()
}


