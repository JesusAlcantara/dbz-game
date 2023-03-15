<template>
    <div
        id="carouselIndex"
        class="carousel slide"
        data-bs-ride="carousel"
    >
        <div class="carousel-indicators">
            <button
                type="button"
                data-bs-target="#carouselIndex"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
            ></button>
            <button
                type="button"
                data-bs-target="#carouselIndex"
                data-bs-slide-to="1"
                aria-label="Slide 2"
            ></button>
            <button
                type="button"
                data-bs-target="#carouselIndex"
                data-bs-slide-to="2"
                aria-label="Slide 3"
            ></button>
        </div>
        <div class="carousel-inner">
            <div
                class="carousel-item active"
                data-bs-interval="4000"
            >
                <img
                    src="@/public/images/carousel/mobile/budokai.jpg"
                    class="img-carousel"
                    alt="budokai"
                >
            </div>
            <div
                class="carousel-item"
                data-bs-interval="4000"
            >
                <img
                    src="@/public/images/carousel/mobile/db-legends.png"
                    class="img-carousel"
                    alt="dbLegends"
                >
            </div>
            <div
                class="carousel-item"
                data-bs-interval="4000"
            >
                <img
                    src="@/public/images/carousel/mobile/saga-superheroes.jpeg"
                    class="img-carousel"
                    alt="newSaga"
                >
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselIndex"
            data-bs-slide="prev"
        >
            <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselIndex"
            data-bs-slide="next"
        >
            <span
                class="carousel-control-next-icon"
                aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
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
        width: 100%;
        height: 75%;
        margin: auto;
    }
</style>