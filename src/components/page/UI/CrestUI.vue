<template>
  <div class="crest_wrapper">
    <div class="crest_main crest_polosa_citys">
      <Vue3Marquee
        :clone="true"
        :pause="false"
        :animateOnOverflow="true"
        :duration="30"
        :direction="'reverse'"
      >
        <span class="crest_polosa_city">Санкт Петербург</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_city">НИЖНИЙ НОВГОРОД</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_city">КАЗАНЬ</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_city">УФА</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_city">ЕКАТЕРИНБУРГ</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_city">САМАРА</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_city">ВОЛГОГРАД</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_city">Челябинск</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_city">Омск</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_city">Томск</span>
        <span class="crest_polosa_dot">&#8226;</span>
      </Vue3Marquee>
    </div>
    <div class="crest_main crest_polosa_names">
      <Vue3Marquee
        :clone="true"
        :pause="false"
        :animateOnOverflow="true"
        :duration="30"
        :direction="'reverse'"
      >
        <span class="crest_polosa_name">САИДМУРОД ДАВЛАТОВ</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_name">АЛЕКСАНДР ДОЛГОВ</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_name">САИДМУРОД ДАВЛАТОВ</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_name">АЛЕКСАНДР ДОЛГОВ</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_name">САИДМУРОД ДАВЛАТОВ</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_name">АЛЕКСАНДР ДОЛГОВ</span>
        <span class="crest_polosa_dot">&#8226;</span>
        <span class="crest_polosa_name">САИДМУРОД ДАВЛАТОВ</span>
        <span class="crest_polosa_dot">&#8226;</span>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee';

export default {
  props: {
    
  },
  components: {
    Vue3Marquee,
  },
};
</script>

<style lang="scss">
.crest_wrapper {
  width: 100%;
  height: 132px;
  margin-top: -50px;
}
.crest_main {
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 66px;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.04em;
  overflow: hidden;
  backdrop-filter: blur(5px);
  background: linear-gradient(165deg, #9a705c33 -10.33%, #2e1c1221 88.72%);
}
.crest_polosa_citys {
  transform: rotate(-3.27deg);
}
.crest_polosa_names {
  transform: rotate(6.47deg);
  margin-top: -58px;
}

.crest_polosa_name {
  height: 40px;
  width: 450px;
  text-align: center;
}
.crest_polosa_city {
  height: 40px;
  width: 350px;
  text-align: center;
}
.crest_polosa_dot {
  height: 40px;
  width: 36px;
  font-size: 36px;
  text-align: center;
}
</style>
