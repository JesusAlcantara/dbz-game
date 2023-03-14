<template>
    <div id="carouselIndex" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselIndex" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselIndex" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselIndex" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../public/images/news/budokai4.webp" class="img-carousel" alt="budokai">
            </div>
            <div class="carousel-item">
                <img src="../public/images/news/db-legends.jpg" class="img-carousel" alt="dbLegends">
            </div>
            <div class="carousel-item">
                <img src="../public/images/news/saga-superheroes.webp" class="img-carousel" alt="newSaga">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndex" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselIndex" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <!-- <div class="container">
        <div class="row align-items-start">
            <div class="col">
                Una de tres columnas
            </div>
            <div class="col">
                Una de tres columnas
            </div>
            <div class="col">
                Una de tres columnas
            </div>
        </div>
    </div> -->
</template>

<script>
export default {

}
</script>

<style scoped>
    .carousel-control-next,
    .carousel-control-prev {
        filter: invert(100%);
    }
    .img-carousel {
        display: block;
        width: 75%;
        height: 650px;
        margin: 10px auto 5px;
    }
</style>