class ComparisonService{
  constructor(endpoint){
    this.endpoint = endpoint
  }

  getComparisons(){
    fetch(`${this.endpoint}/comparisons`)
      .then(resp => resp.json())
      .then(comparisons => {
        for (const comparison of comparisons){
          const c = new Comparison(comparison)
          c.addOnDom()
        }
      })
  }
  createComparison(){
    const comparison = {
      name: document.getElementById('comparison-input').value,
      // category_id: document.getElementById('category_id').value,
      // first_vehicle_id: document.getElementById('first_vehicle_id').value,
      // second_vehicle_id: document.getElementById('second_vehicle_id').value
    }
    const configObj = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      }, body: JSON.stringify(comparison)
    }
    fetch(`${this.endpoint}/comparisons`, configObj)
      .then(resp => resp.json())
      .then(comparison => {
        const c = new Comparison(comparison)
        c.addOnDom
      })
  }
  deleteComparison(id){
    fetch(`${this.endpoint}/comparison/${id}`,{
      method: 'DELETE', headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(json => alert(json.message))
  }
}