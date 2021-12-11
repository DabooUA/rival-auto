class Comparison{
  
  static all = []
  static comparisonContainer = document.getElementById("comperisons-contrainer")
  
  constructor({id, category_id, vehicle_id}){
    this.id = id
    this.category_id = category_id
    this.vehicle_id = vehicle_id
    this.comparisonTypeSelect = document.getElementById("compair-type-select")
    this.selectComparison = document.getElementById("select-comparison")

    this.element = document.createElement("ul")
    this.element.dataset.id = this.id
    this.element.id = `comparison-${this.id}`

    this.element.addEventListener("click", this.handleClick)
    this.comparisonTypeSelect.addEventListener("click", this.handleComparison)

    Comparison.all.push(this)
  }

  handleComparison = (event) => {
    this.selectComparison.style.display = 'none'
    this.selectComparison.innerHTML = ``
    let selection = event.target.value
      if (selection === "car"){
        this.carComparison.style.display = 'block'
        this.suvComparison.style.display = 'none'
      }else if (selection == "suv"){
        this.suvComparison.style.display = 'block'
        this.carComparison.style.display = 'none'
      }
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