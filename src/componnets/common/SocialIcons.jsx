import React from 'react';
import './common.css';
import { ReactComponent as Fb } from '../../assets/images/social-icons/fb.svg'
import { ReactComponent as In } from '../../assets/images/social-icons/in.svg'
import { ReactComponent as Github } from '../../assets/images/social-icons/github.svg'

const SocialIcons = () => {
    return(
            <div className="socialItems">
                <a href="https://www.facebook.com/ara.matevossian?ref=bookmarks" target="_blank">
                    <Fb title='Facebook' className="socialItem"/>
                </a>
                <a href="https://www.linkedin.com/in/ara-matevosyan777/" target="_blank">
                    <In title='Linkedin' className="socialItem"/>
                </a>
                <a href="https://github.com/AraMatevosyan777" target="_blank">
                    <Github title='Github' className="socialItem"/>
                </a>
            </div>
    )
}

export default SocialIcons;