import { Component } from 'react'

const msg = "Welcome to my J2EE application : Project Management !"
class Home extends Component { 
    render() { 
        return (
            <div style={{ fontSize: 'xx-large', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <h1>{msg}</h1>
            </div>
        );
    }
}
 
export default Home;