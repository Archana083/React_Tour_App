import React from 'react'

const QualityCard = () => {
  return (
    <div className='container-fluid mb-5'>
        <div className="row">
            <div className="col-md-4 col-12  p-5 border-dark qualit-card border-right shadow">
                <h2 className='fs-5 text-left'>Quality Education</h2>
                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                <button className='common-btn'>
                    <a href="#" className='px-4 text-dark'>Explore <i className="bi bi-arrow-right mx-2"></i></a>
                </button>
            </div>
            <div className="col-md-4 col-12 p-5 border-dark qualit-card border-right shadow">
                <h2 className='fs-5 text-left'>Quality Education</h2>
                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                <button className='common-btn'>
                    <a href="#" className='px-4 text-dark'>Explore <i className="bi bi-arrow-right mx-2"></i></a>
                </button>
            </div>
            <div className="col-md-4 p-5 col-12 border-dark qualit-card  shadow">
                <h2 className='fs-5 text-left'>Quality Education</h2>
                <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                <button className='common-btn'>
                    <a href="#" className='px-4 text-dark'>Explore <i className="bi bi-arrow-right mx-2"></i></a>
                </button>
            </div>
        
        </div>

    </div>
  )
}

export default QualityCard