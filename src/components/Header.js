import React from 'react'
import PropTypes from 'prop-types'
import peaceIcon from '../images/wocPeaceSign.svg'

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="brand image">
            <span className="icon woc-peace-fingers"></span>
            <img
                src={peaceIcon}
                alt="tanned hand with red nail polish has two fingers up as peace symbol" />
            {/* Peace sign image is from Canva. */}
        </div>
        <div className="content">
            <div className="inner">
                <h1>Tabitha Sin</h1>
                <p>Full stack web developer. Storyteller. Advocate.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('intro') }}>Who</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('work') }}>What</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>How</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Where</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
