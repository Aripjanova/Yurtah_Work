import React from 'react';

import '../../assets/css/main.css'
import Submit from './submit'
import ChildImg from './childrens_img'
import Section from '../section'


class HomePage extends React.Component {

    render() {
        return (
            <div className="content">

                < Section >
                </Section>
                <Submit/>

                <ChildImg/>

            </div>


        )
    }
}
export default HomePage;