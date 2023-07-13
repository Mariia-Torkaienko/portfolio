<template>
  <section class="section portfolio" id="portfolio">
    <h2 class="section__title">Portfolio</h2>
    <span class="section__subtitle">My projects</span>

    <div class="portfolio__container container swiper-container">

      <!-- ======  Portfolio block  ====== -->
      <div class="portfolio__content grid" v-for="item of portfolio" :key="item.id">
        <img
          :src="typeImageSource(item.filename)"
          :alt="item.iconname"
          class="portfolio__img"
        >
        <div class="portfolio__data">
          <h3 class="portfolio__title">
            {{ item.title }}
          </h3>
          <p class="portfolio__description">
            {{ item.description }}
            <a
              :href="item.link"
              class="portfolio__button"
              target="_blank"
            >
              <i class="uil uil-arrow-up-right"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref} from "vue";

  const portfolio = ref([
      {
        id: 1,
        title: 'BOSE Sound Store',
        description: 'Website adaptable to all devices, with ui components and animated interactions.',
        filename: "bose.png",
        iconname: "bose",
        link: "https://mariia-torkaienko.github.io/SoundStore/"
      },
      {
        id: 2,
        title: 'Creative Backery',
        description: 'Website with UI elements and animated interactions that adapts to all devices.',
        filename: "cb.png",
        iconname: "creative-bakery",
        link: "https://mariia-torkaienko.github.io/Creative_Bakery/"
      },
      {
        id: 3,
        title: 'Countdown Calendar',
        description: 'Countdown to 2024 New Year',
        filename: "countdown.png",
        iconname: "countdown",
        link: "https://mariia-torkaienko.github.io/Countdown_calendar/"
      },
      {
        id: 4,
        title: 'Miami Realestate',
        description: 'All-device responsive website with UI elements and animation interactions.',
        filename: "miami.png",
        iconname: "miami",
        link: "https://mariia-torkaienko.github.io/Miami/"
      },
    ])
    const typeImageSource = function (type: string) {
    let src = ''
    try {
      src = new URL(`../assets/projects/${type}`, import.meta.url).href;
    } catch (error) {
      console.warn(`Image for type ${type} could not be found! Please add "${type}" to the folder.\n\n`, error)
      return;
    }
    return src
  }
</script>

<style scoped>
.portfolio__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 2.5rem;
  margin-top: 1.5px;
  justify-content: space-around;
}
.portfolio__content {
  border-radius: .75rem;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
}
.portfolio__img {
  width: 100%;
  display: block;
}
.portfolio__content:hover img {
  filter: blur(.5rem);
}
.portfolio__data {
  width: 100%;
  height: 0;
  background: var(--background-color);
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2.5rem;
  transition: height 0.5s;
}
.portfolio__content:hover .portfolio__data {
  height: 100%;
}
.portfolio__title {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-1);
  color: var(--container-color);
}
.portfolio__description {
  margin-bottom: var(--mb-0-75);
  color: var(--container-color);
}
.portfolio__button {
  display: block;
  margin: 2rem auto 0;
  padding: 0;
  font-size: var(--h2-font-size);
  line-height: 2.5rem;
  color: var(--first-color);
  background: var(--container-color);
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  text-align: center;
  align-items: center;
  text-decoration: none;
}
</style>