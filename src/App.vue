<template>
  <div class="background_main">
    <span class="ellipses_glow ellipses_glow_main_big"></span>
    <span class="ellipses_glow ellipses_glow_main_min"></span>
    <div class="wapper">
      <TheHeader />
      <div class="wrapper-content">
        <div class="container">
          <TheHome />
        </div>
        <Crest />
        <div class="container">
        <HomeTwo />
        </div>
      </div>
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheHome from '@/components/page/TheHome.vue';
import Crest from '@/components/page/UI/CrestUI.vue';
import HomeTwo from '@/components/page/HomeTwo.vue';

export default {
  components: {
    TheHeader,
    TheHome,
    TheFooter,
    Crest,
    HomeTwo
  },
};
</script>



