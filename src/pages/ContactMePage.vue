<template>
  <section class="section contact" id="contact">
    <h2 class="section__title">Contact Me</h2>
    <span class="section__subtitle">Get in touch</span>
    <div class="contact__container container grid">
      <div>
        <div class="contact__information">
          <i class="uil uil-phone contact__icon"></i>
          <div>
            <h3 class="contact__title">Call Me</h3>
            <a href="tel:+1 431 275 8536" class="contact__subtitle">
              +1 431 275 8536
            </a>
          </div>
        </div>
        <div class="contact__information">
          <i class="uil uil-envelope-alt contact__icon"></i>
          <div>
            <h3 class="contact__title">Email</h3>
            <a href="mailto:mariia.torkaienko@gmail.com" class="contact__subtitle">
              mariia.torkaienko@gmail.com
            </a>
          </div>
        </div>
        <div class="contact__information">
          <i class="uil uil-map-marker contact__icon"></i>
          <div>
            <h3 class="contact__title">Address</h3>
            <a href="https://goo.gl/maps/wue3UJtEopgrXJw57" class="contact__subtitle" target="_blank">
              Winnipeg - Manitoba - Canada
            </a>
          </div>
        </div>
      </div>
      <form
        action="https://formsubmit.co/3e41ed7792bad0f4f44c394730c4005e"
        method="POST"
        class="contact__form grid"
      >
        <div class="contact__inputs grid">
          <div class="contact__content">
            <label for="" class="contact__label">Your Full Name</label>
            <input
              type="text"
              name="name"
              id=""
              class="contact__input"
              required
            >
          </div>
        </div>
        <div class="contact__inputs grid">
          <div class="contact__content">
            <label for="email" class="contact__label">Your Email</label>
            <input
              type="email"
              name="email"
              class="contact__input"
              required
            >
          </div>
        </div>
        <div class="contact__inputs grid">
          <div class="contact__content">
            <label for="" class="contact__label">Leave your message here</label>
            <textarea
              name="Message"
              rows="5"
              class="contact__input"
              required
           ></textarea>
          </div>
          <div>
            <button
              href="#"
              type="submit"
              class="button button--flex btn"
            >
              Send Message
              <i class="uil uil-message button__icon"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.btn {
  border: none;
}
</style>