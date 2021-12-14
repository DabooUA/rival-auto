class ComparisonService{
  constructor(endpoint){
    this.endpoint = endpoint

    // Reference to our comparison button
    this.comparisonBtn = document.getElementById( 'btn-create-comparison' );

    this.comparisonBtn.addEventListener( 'click', function() {
      alert( 'got here!' );
    } );

  }
  createComparison(){
    const comparison = {
      category_id: document.getElementById('category_id').value
    }
    const configObj = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      }, body: JSON.stringify(comparison)
    }
    fetch(`${this.endpoint}/comparison`, configObj)
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