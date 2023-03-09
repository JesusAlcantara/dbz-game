<template>
    <footer class="text-center text-lg-start bg-light text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom flex-column">
            <div class="me-5 d-none d-lg-block">
                <span class="fw-bold">Conecta conmigo a través de mis redes sociales:&nbsp;</span>
                <a href="https://www.facebook.com/profile.php?id=100004813327393" class="m-2 text-reset">
                    <i class="bi bi-facebook"></i>
                </a>
                <a href="https://twitter.com/JesusAlc11" class="m-2 text-reset">
                    <i class="bi bi-twitter"></i>
                </a>
                <a href="https://www.instagram.com/jesusalcantara11/" class="m-2 text-reset">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/jes%C3%BAs-alc%C3%A1ntara-g%C3%B3mez-b3106423b/" class="m-2 text-reset">
                    <i class="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/JesusAlcantara" class="m-2 text-reset">
                    <i class="bi bi-github"></i>
                </a>
            </div>
            <br>
            <div class="me-5 d-none d-lg-block">
                <span class="fw-bold">Si quieres más información acerca del mundo de Dragon Ball visita la Wiki Hispana 
                    <a 
                        href="https://dragonball.fandom.com/es/wiki/Dragon_Ball_Wiki_Hispano"
                        class="text-decoration-none"
                    >
                        aquí.
                    </a>
                </span>
            </div>
        </section>
        <section class="">
            <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>Agradecimiento
                </h6>
                <p>
                    Gracias por visitar esta página hecha con mucho cariño hacia la franquicia de
                    Dragon Ball.
                </p>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">
                        Series
                    </h6>
                    <p
                        v-for="serie in series"
                        :key="serie.id"
                    >
                        <a :href="`${serie.url}`" class="text-reset">{{ serie.name }}</a>
                    </p>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Mejores Películas</h6>
                    <p
                        v-for="film in films"
                        :key="film.id"
                    >
                        <a :href="`${film.url}`" class="text-reset">{{ film.name }}</a>
                    </p>
                </div>
            </div>
            </div>
        </section>
        <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2023 Copyright
        </div>
    </footer>
</template>

<script>
import series from '~/assets/series.json'
import films from '~/assets/films.json'
export default {
    name: 'Footer',
    data() {
      return {
        series,
        films
      };
    }
}
</script>

<style>

</style>