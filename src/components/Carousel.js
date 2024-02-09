import React from 'react'

function Carousel() {
  return (
    <div>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active"style={{ zIndex: "10" }}>
            <img src="https://source.unsplash.com/random/300×300?pizza" className="d-block w-100" alt="..." />
          </div>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300×300?burger" className="d-block w-100" alt="..." />
          </div>

          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300×300?momos" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel