import React from 'react'
import InstagramIcon  from '@material-ui/icons/Instagram'
import LinkedInIcon  from '@material-ui/icons/LinkedIn'
import GithubIcon  from '@material-ui/icons/GitHub'
import '../Styles/Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
          <a href="#"><InstagramIcon /></a>
          <a href="https://www.linkedin.com/in/siddiq-barbhuiya-9b3ba022a/" target="_blank"><LinkedInIcon /></a>
          <a href="https://github.com/siddiqbarbhuiya" target="_blank"><GithubIcon /></a>
      </div>
      <p>&copy; 2022 siddiqbarbhuiya</p>
    </div>
  )
}

export default Footer
