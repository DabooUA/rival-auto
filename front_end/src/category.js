class Category{

  static all = []
  static categoryContainer = document.getElementById("categories-container")
  // static categoryForm = document.getElementById("form-container")

  constructor({id, name}){
    this.id = id
    this.name = name

    this.element = document.createElement('ul')
    this.element.dataset.id = this.id
    this.element.id = `category-${this.id}`
    this.element.addEventListener('click', this.handleClick)

    this.carCategory = document.getElementById('car-category')
    this.suvCategory = document.getElementById('suv-category')
    
    // this.newComparisonButton = document.getElementById('new-category-btn')
    // this.newComparisonButton.addEventListener('click', this.renderForm)
    // this.renderForm = document.querySelector('.add-category-container')
    Category.all.push(this)
  }

  categoryHTML(){
    this.element.innerHTML += `
      <div>
        <h2>${this.name}</h2>
      </div>
      `
      debugger
    return this.element
  }

  addOnDom(){
    Category.categoryContainer.append(this.categoryHTML())
  }

  handleClick = () =>{
    if (event.target.innerHTML === 'Delete'){
      this.element.remove()
      categoryService.deleteCategory(this.id)
    }
  }
}