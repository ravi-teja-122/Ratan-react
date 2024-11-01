function App(){
  const cities = ['hyderabad','delhi','kolkata','pune']
  const listCity = cities.map((city,index)=>(<li key={index}>{city}</li>))
  return (<>
            <h1>Popular Cities</h1>
            <ul>{listCity}</ul>
            <p>First city... {cities[0]}</p>
            <p>Last city... {cities[cities.length-1]}</p>
            <p>Length of... cities {cities.length}</p>
          </>
  )
}
export default  App;
