<template>
  <header class="header" id="header">
    <nav class="nav container">
      <a href="/" class="nav__logo">Mariia</a>
      <div
        :class="`${isCollapsed && 'show-menu'}`"
        class="nav__menu"
        id="nav-menu"
      >
        <ul class="nav__list grid">
          <li
            class="nav__item"
            v-for="el of menu"
            :key="el.id"
            @click="hideMenu()"
          >
            <RouterLink :to="el.path" class="nav__link">
              <i
                :class="el.icon"
                class="uil nav__icon"
             ></i>
              {{ el.name }}
            </RouterLink>
          </li>
        </ul>
        <i
          class="uil uil-times nav__close"
          id="nav-close"
          @click="ToggleMenu()"
       ></i>
      </div>
      <div :class="isDark ? 'dark' : 'light-theme'" class="nav__btns">
        <i
          :class="isDark ? 'uil-sun' : 'uil-moon'"
          class="uil change-theme"
          id="theme-button"
          @click="toggleDark()"
       ></i>
        <div
          v-if="isCollapsed"
          class="nav__toggle"
          id="nav-toggle"
          @click="ToggleMenu()"
        >
          <i class="uil uil-apps"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useDark, useToggle } from '@vueuse/core';
  
  const menu = ref([
    {
      id: 1,
      name: 'Home',
      path: '/',
      icon: 'uil-home',

    },
    {
      id: 2,
      name: 'About',
      path: '/about',
      icon: 'uil-user-exclamation',
    },
    {
      id: 3,
      name: 'Portolio',
      path: '/portfolio',
      icon: 'uil-scenery',
    },
    {
      id: 4,
      name: 'Contact',
      path: '/contact',
      icon: 'uil-message',
    },
  ]) ;

  const isCollapsed = ref(true);
  const ToggleMenu = () => {
    isCollapsed.value = !isCollapsed.value;
  };

  const hideMenu = function() {
    return isCollapsed.value = true;

  }
  const isDark = useDark({
  onChanged(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
})

const toggleDark = useToggle(isDark);
</script>
