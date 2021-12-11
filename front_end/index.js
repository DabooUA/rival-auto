import "bootstrap"
import "../stylesheets/application"
import "../stylesheets/style"

const base_url = "http://127.0.0.1:3000"
const vehicleService = new vehicleService(base_url)
const categoryService = new categoryService(base_url)

Vehicle.vehicleForm.addEventListener('submit', handleSubmit)
vehicleService.getVehicles()
Vehicle.renderForm()

Category.categoryForm.addEventListener('submit', handleSubmit)
categoryService.getCategories()
Category.renderForm()



function handleSubmit(){
  event.preventDefault()
  categoryService.createCategory()
  event.target.reset()
}


