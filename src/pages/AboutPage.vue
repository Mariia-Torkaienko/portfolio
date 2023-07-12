<template>
  <section class="about section" id="about">
    <h2 class="section__title">About me</h2>
    <div class="about__container container grid">
      <div class="about__description">
        <span class="about__text">
          Collaborate with team members and UX/UI designers to provide and support new features/existing features optimization to our Web applications.
        </span>
        <ul class="about__text">I have experience working with the following technologies:
          <li>
            •	Testing: I use <strong>Jest</strong> for unit testing.
          </li>
          <li>
            •	System version control: <strong>GIT</strong>.
          </li>
          <li>
            •	Command line tools such as<strong> NPM, NVM and SSH</strong>.
          </li>
          <li>
            •	Styling: <strong>SCSS</strong>with <strong>BEM</strong> methodology, <strong>Vuetify</strong> and <strong>TailwindCSS</strong>.
          </li>
          <li>
            •	Design: I am familiar with <strong>Figma</strong> for designing WEB assets and interface prototypes.
          </li>
        </ul>
        <div class="about__buttons">
          <a download="" href="" class="button button--flex">
            My resume
            <i class="uil uil-file-download button__icon"></i>
          </a>
        </div>
      </div>
      
      <div class="skills__container">
        <h2 class="section__subtitle">Tools I have worked with:</h2>
        <div class="about__tools">
        <img alt="HTML logo" class="logo" src="@/assets/icons/html.svg" height="48" width="48" />
        <img alt="css logo" class="logo" src="@/assets/icons/css.svg" height="48" width="48" />
        <img alt="JS logo" class="logo" src="@/assets/icons/javascript.svg" height="48" width="48" />
        <img alt="nodejs logo" class="logo" src="@/assets/icons/nodejs.svg" height="48" width="48" />
        <img alt="sass logo" class="logo" src="@/assets/icons/sass.svg" height="48" width="48" />
        <img alt="TS logo" class="logo" src="@/assets/icons/typescript.svg" height="48" width="48" />
        <img alt="vue logo" class="logo" src="@/assets/icons/vue.svg" height="48" width="48" />
        <img alt="react logo" class="logo" src="@/assets/icons/react.svg" height="48" width="48" />
      </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
<style scoped>
.section__title {
  margin-bottom: 1rem;
}
.section__subtitle {
  margin-bottom: 3rem;
  font-size: var(--medium-font-size);
}

.skills__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about__tools {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-self: center;
  justify-content: center;
  gap: 2rem;

  max-height: 4rem;
  justify-content: space-around;

}

.about__buttons {
  margin-top: 2rem;
}
.about__text {
  font-size: 12px;
  line-height: 2.25;
}
.about__description {
  margin-top: 1.75rem;
}
</style>
