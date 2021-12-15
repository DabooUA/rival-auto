// import "bootstrap"
// import "../stylesheets/application"
// import "../stylesheets/style"

const base_url = "http://127.0.0.1:3000"


const vehicleService = new VehicleService(base_url)
const comparisonService = new ComparisonService(base_url)

// Vehicle.vehicleForm.addEventListener('submit', handleSubmit)
// vehicleService.getVehicles()
// Vehicle.renderForm()

function handleSubmit(){
  event.preventDefault()
  categoryService.createCategory()
  event.target.reset()
}


