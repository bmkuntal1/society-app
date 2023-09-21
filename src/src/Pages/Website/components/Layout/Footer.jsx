import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-white py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          <div className="col-auto"><div className="small m-0">Copyright &copy; Manglam Tarang Society 2023</div></div>
          <div className="col-auto">
            <Link to="privacy-policy" className="btn btn-pill text-gradient px-4">Privacy</Link>
            <Link to="terms-conditions" className="btn btn-pill text-gradient px-4" >Terms</Link>
            <Link to="contact-us" className="btn btn-pill text-gradient px-4" >Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer