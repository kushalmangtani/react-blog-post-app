import { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  // Rendered once on mount
  componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json)
.then(json => {
  this.setState({ posts: json})
})
  }

  render(){
    return(
    <div className='container'>
      <div class="jumbotran">
        <h1> Blog Post! </h1>
      </div>
      <div className='card'> 
        <div className='card-header'>
          Featured
        </div>
        <div className='card-body'>
        <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
