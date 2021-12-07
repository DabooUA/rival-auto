class Comparison{
  
  static all = []
  static comparisonContainer = document.getElementById("comperisons-contrainer")
  
  constructor({id, category_id, vehicle_id}){
    this.id = id
    this.category_id = category_id
    this.vehicle_id = vehicle_id

    this.element = document.createElement("ul")
    this.element.dataset.id = this.id
    this.element.id = `comparison-${this.id}`
    this.element.addEventListener("click", this.handleClick)

    Comparison.all.push(this)
  }

  comperisonHTML(){
    this.element.innerHTML +=`
    <div>
      <h2>${this.vehicle_id} - ${this.vehilce_id}
      </div>
    `
    return this.element
  }

  addOnDom(){
    Comparison.comparisonContainer.append(this.comperisonHTML())
  }

  handleClick = () =>{
    if (event.target.innerHTML === "Delete"){
      this.element.remove()
      comperisonService.deleteComperison(this.id)
    }
  }
  
}