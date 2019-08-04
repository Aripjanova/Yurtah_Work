import React from 'react';
import '../../assets/css/Home.css'
import '../../assets/css/main.css'
class Submit extends React.Component {

    render() {
        return (
            <div>
                <div className="listing">
                    <input className="list_num" type="text" placeholder="Set number of listing" name="listing" required></input>

                    <button type="submit" className="submit">Submit</button>
                </div>
            </div>


        )
    }
}
export default Submit;