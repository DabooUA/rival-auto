class Comparison{
  
  static all = []
  static comparisonContainer = document.getElementById("vehicles-container")
  static comparisonForm = document.getElementById("comparison-form-container")

  constructor({id, name, category_id, first_vehicle_id, second_vehicle_id}){
    this.id = id
    this.name = name
    this.category_id = category_id
    this.first_vehicle_id = first_vehicle_id
    this.second_vehicle_id = second_vehicle_id

    this.comparisonTypeSelect = document.getElementById("compair-type-select")
    this.selectComparison = document.getElementById("select-comparison")

    this.element = document.createElement('p')
    this.element.dataset.id = this.id
    this.element.id = `comparison-${this.id}`

    this.element.addEventListener("click", this.handleClick)
    // this.comparisonTypeSelect.addEventListener("click", this.handleComparison)

    // Reference to comparison button
    this.comparisonBtn = document.getElementById( 'btn-create-comparison' );
    this.comparisonBtn.addEventListener( 'click', this.createComparison, function(){
      alert("got here!");
    });

    Comparison.all.push(this)
  }


  comperisonHTML(){
    this.element.innerHTML +=`
    <div >
      <h2 >${this.name} </h2>
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