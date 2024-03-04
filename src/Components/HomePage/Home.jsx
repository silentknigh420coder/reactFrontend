import React from 'react'

function Home() {
  return (
    <div className='container-fluied  mt-5 pt-2 p-1'>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
  <div class="carousel-item active">
    {/* <!-- Image 1 (for medium and large screens) --> */}
    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/037/488/original/FP_Academy.jpeg" class="d-block w-100 d-md-block d-lg-block" alt="Image 1" />
    {/* <!-- Image 2 (for small screens) --> */}
    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/037/489/original/FP_Academy_MB.jpeg?1687337973" class="d-none d-sm-block w-100" alt="Image 2" />
  </div>
</div>



        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Home