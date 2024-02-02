<template>
  <header>
    <div class="dummy"></div>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="navbar-logo">
            <img src="../assets/img/logo__TG.svg" alt="" />
            <img src="../assets/img/logo__line.svg" alt="" />
            <img src="../assets/img/logo__BG.svg" alt="" />
          </div>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.alias">
              <div class="navbar-link" :to="link.url">
                {{ link.title }}
              </div>
            </li>
          </ul>
          <img src="../assets/img/logo__KL.svg" alt="Код Лидера" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { app, links } from '@/_config';
export default {
  data() {
    return {
      title: app.title,
      links: links,
    };
  },
};
</script>
