import React from 'react'
//gatsby link use to link one page to another
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    //initial state
    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  //set state
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}

export default Header