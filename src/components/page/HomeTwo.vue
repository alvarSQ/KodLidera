<template>
  <div class="homeTwo_main">
    <p class="homeTwo_title">
      ВЫБЕРИ СВОЙ ГОРОД И <orange-text>ПРИМИ УЧАСТИЕ В ФОРУМЕ</orange-text>
    </p>
    <ul class="homeTwo_block-cards">
      <li class="homeTwo_card">
        <p>НИЖНИЙ НОВГОРОД</p>
        <span>Подробнее</span>
      </li>
      <li class="homeTwo_card">
        <p>КАЗАНЬ</p>
        <span>Подробнее</span>
      </li>
      <li class="homeTwo_card">
        <p>НИЖНИЙ НОВГОРОД</p>
        <span>Подробнее</span>
      </li>
      <li class="homeTwo_card">
        <p>КАЗАНЬ</p>
        <span>Подробнее</span>
      </li>
    </ul>
    <div class="homeTwo_block-cards_scroll">
      <div class="homeTwo_block-cards_arrow_top"></div>
      <div class="homeTwo_block-cards_arrow_botton"></div>
    </div>
    <p class="homeTwo_title homeTwo_title2">
      ДЛЯ КОГО ЭТОТ <orange-text>ФОРУМ</orange-text>
    </p>
  </div>
</template>

<style lang="scss">
.homeTwo_title2 {
  position: absolute;
  bottom: 0px;
  left: 751px;
}

.homeTwo_block-cards_scroll {
  display: flex;
  justify-content: space-between;
  width: 1400px;
  margin-left: -85px;
  margin-top: -265px;
}

.homeTwo_block-cards_arrow_top {
  height: 62px;
  width: 62px;
  cursor: pointer;
  transform: rotate(-90deg);
  background-size: cover;
  background-image: url('@/assets/img/arr_top.svg');
  &:hover {
    background-image: url('@/assets/img/arr_top_hover.svg');
  }
}
.homeTwo_block-cards_arrow_botton {
  height: 62px;
  width: 62px;
  cursor: pointer;
  transform: rotate(-90deg);
  background-size: cover;
  background-image: url('@/assets/img/arr_botton.svg');
  &:hover {
    background-image: url('@/assets/img/arr_botton_hover.svg');
  }
}
.homeTwo_main {
  position: relative;
  margin-top: 120px;
  width: 100%;
  height: 846px;
//   background: #f15d00;
  // filter: blur(70px);
  //   background: radial-gradient(
  //     circle,
  //     rgba(0, 0, 0, 1) 0%,
  //     rgba(0, 0, 0, 0.8491771708683473) 40%,
  //     rgba(0, 0, 0, 0) 100%
  //   );
}

.homeTwo_title {
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.04em;
}

.homeTwo_block-cards {
  display: flex;
  justify-content: space-between;
  margin-top: 65px;
  width: 100%;
  height: 471px;
}

.homeTwo_card {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  height: 470px;
  width: 280px;
  border: 1px solid transparent;
  border-radius: 16px;
  background-image: url('@/assets/img/card_city.png');
  transition: 0.5s;
  &:hover {
    border: 1px solid #f15d00;
    transition: 0.3s;
  }
  p {
    font-weight: 600;
    font-size: 32px;
    line-height: 104.4%;
    text-align: center;
    letter-spacing: 0.04em;
  }
  span {
    border: 1px solid #be3900;
    border-radius: 9px;
    bottom: 28px;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.64px;
    padding: 12px 26px;
    position: absolute;
    background: transparent;
  }
}
// .homeTwo_card
</style>
