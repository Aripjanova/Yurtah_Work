import React from 'react';
import '../../assets/css/Home.css'
import '../../assets/css/main.css'
import D1 from '../../assets/image/D1.jpg'
class ChildImg extends React.Component {

    render() {
        return (

            <div className="ChildImg">


                <div className=" subitems">
                    <img src='../../assets/image/bigstock-Kids-Education-Knowledge-Field-186276457-768x555.jpg' alt='sorry '/>
                    <div className="name">Sub-2</div>
                    <div>Sub-2</div>
                </div>

                <div className=" subitems">
                    <img  src={D1} alt="sorry"/>
                    <div className="name">Sub-2</div>
                    <div>Sub-2</div>
                </div>
                <div className=" subitems">
                    <div className="img">img-1</div>
                    <div className="name">Sub-2</div>
                    <div>Sub-2</div>
                </div>
                <div className=" subitems">
                    <div className="img">img-1</div>
                    <div className="name">Sub-2</div>
                    <div>Sub-2</div>
                </div>

            </div>

        )
    }
}
export default ChildImg;