import "bootstrap"
import "../stylesheets/application"

const base_url = "http://127.0.0.1:3000"
const vehicleService = new VehicleService(base_url)
const categoryService = new CategoryService(base_url)

// Vehicle.vehicleForm.addEventListener('submit', handleSubmit)
// vehicleService.getVehicles()
Vehicle.renderForm()

Category.categoryForm.addEventListener('submit', handleSubmit)
categoryService.getCategories()
Category.renderForm()

function handleSubmit(){
  event.preventDefault()
  vehicleService.createVehicle()
  event.target.reset()
}


