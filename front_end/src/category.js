class Category{

  static all = []
  static categoryContainer = document.getElementById("categories-container")
  static categoryForm = document.getElementById("form-container")

  constructor({id, name}){
    this.id = id
    this.name = name

    this.element = document.createElement('li')
    this.element.dataset.id = this.id
    this.element.id = `category-${this.id}`
    this.element.addEventListener('click', this.handleClick)

    Category.all.push(this)
  }

  categoryHTML(){
    this.element.innerHTML += `
      <div>
        <h2>${this.name}</h2>
      </div>
      `
    return this.element
  }

  addOnDom(){
    Category.categoryContainer.append(this.categoryHTML())
  }

  static renderForm(){
    Category.categoryContainer.innerHTML += `
    <form id="new-category-form">
    <ul>
      <li>
        Category name: <input type="text" id="name"><br></br>
        <input type="submit" id="create"></input>
      </li>
    </ul>
    </form>
    `
  }
handleClick = () =>{
  if (event.target.innerHTML === 'Delete'){
    this.element.remove()
    categoryService.deleteCategory(this.id)
  }
}
 

}