import React from 'react';
import Header from './Header'
import '../assets/css/main.css'
class HomePage extends React.Component {

    render() {
        return (
            <div className="section1">
                <Header/>
               <div className="best_camp">
                 <p>  Best ever camp for
                   your child
                 </p>
               </div>
            </div>


        )
    }
}
export default HomePage;