// v-if="!person.isActiv && index <= 4" v-if="personValid(person, index)"
<template>
  <div class="home__content">
    <div>
      <div class="home__title">
        <p>МЕЖДУНАРОДНЫЙ БИЗНЕС-ФОРУМ</p>
        <p>КОД ЛИДЕРА</p>
        <p>Пробей свой стеклянный потолок</p>
        <p>
          Только действующие бизнес практики делятся актуальными инструментами
          бизнес-развития
        </p>
      </div>
      <div class="home__title__btns">
        <button class="btn btnPrimary">Стать участником</button>
        <button class="btn btnOpran">Стать экспертом</button>
      </div>
    </div>
    <div class="home_ul_scrol">
      <ul>
         
        <template v-for="(person, index) in persons" :key="index">
          
          <li @click="personActiv(person, index)" v-if="(index < 4)">
            <div>
              <p>{{ person.title }}</p>
              <p>{{ person.description }}</p>
            </div>
            <img :src="person.img" :alt="person.title" />
          </li>
          
        </template>
        
      </ul>
      <div class="ul__scroll">
        <div class="home_arrow_top" @click="scrollUlApp"></div>
        <div class="home_arrow_botton" @click="scrollUlDown"></div>
      </div>
    </div>
  </div>
  <div class="home_main_img_wrapper">
    <div class="home_main_img">
      <img :src="personAcc.img" :alt="personAcc.title" />
      <div class="home_main_text">
        <p>{{ personAcc.title }}</p>
        <p>{{ personAcc.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      persons: [
        {
          id: 1,
          title: 'СЕРГЕЙ КИМ',
          description:
            'Прошел путь от гастарбайтера до владельца миллиардной группы компаний TIKSAN GROUP',
          img: './src/assets/img/i_SK.png',
          isActiv: true,
        },
        {
          id: 2,
          title: 'АЛЕКСАНДР ДОЛГОВ',
          description: 'Не берет на работу идиотов',
          img: './src/assets/img/i_AD.png',
          isActiv: false,
        },
        {
          id: 3,
          title: 'ШОЛПАН ТУСИПБЕКОВА',
          description:
            'Закрыла кредит $500 000 за 2,5 года и вышла в плюс $1,5 миллиона',
          img: './src/assets/img/i_SHT.png',
          isActiv: false,
        },
        {
          id: 4,
          title: 'САИДМУРОД ДАВЛАТОВ',
          description: 'Бизнес-наставник с Востока',
          img: './src/assets/img/i_SD.png',
          isActiv: false,
        },
        {
          id: 5,
          title: 'ВЛАДИМИР МАРИНОВИЧ',
          description:
            'Знает как создать успешную команду и опередить конкурентов',
          img: './src/assets/img/i_VM.png',
          isActiv: false,
        },
        {
          id: 6,
          title: 'АЛЕКСАНДР ДОЛГОВ',
          description: 'Не берет на работу идиотов',
          img: './src/assets/img/i_AD.png',
          isActiv: false,
        },
        {
          id: 7,
          title: 'САИДМУРОД ДАВЛАТОВ',
          description: 'Бизнес-наставник с Востока',
          img: './src/assets/img/i_SD.png',
          isActiv: false,
        },
      ],
      personAcc: {},
    };
  },
  mounted() {
    this.personAcc = this.getPersonAcc();
  },
  computed: {},
  methods: {
    getPersonAcc() {
      this.personAcc = this.persons[0];
      this.persons.shift();
      return this.personAcc;
    },
    personActiv(person, index) {
      let acc = person;
      this.persons.splice(index, 1);
      this.persons.push(this.personAcc);
      return (this.personAcc = acc);
    },
    scrollUlApp() {
      let acc = this.persons[0];
      this.persons.push(acc);
      this.persons.shift();
    },
    scrollUlDown() {
      let acc = this.persons[this.persons.length - 1];
      this.persons.unshift(acc)
      this.persons.pop()
    },
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.home_main_img_wrapper {
  width: 1230px;
  height: 140px;
}

.home_ul_scrol {
  display: flex;
  justify-content: space-between;
  min-width: 642px;
}

.home_arrow_top {
  height: 36px;
  width: 36px;
  cursor: pointer;
  background-image: url('@/assets/img/arr_top.svg');
  &:hover {
    background-image: url('@/assets/img/arr_top_hover.svg');
  }
}
.home_arrow_botton {
  height: 36px;
  width: 36px;
  cursor: pointer;
  background-image: url('@/assets/img/arr_botton.svg');
  &:hover {
    background-image: url('@/assets/img/arr_botton_hover.svg');
  }
}

.ul__scroll {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 19px;
  width: 36px;
  height: 550px;
}
.home__content {
  display: flex;
  justify-content: space-between;
  width: 1400px;
  // height: 787px;
  // background-color: rgba(32, 14, 1, 0.9);
  // ul {
  //   height: 589px;
  //   overflow: hidden;
  // }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 566px;
    height: 155px;
    padding: 20px;
    margin-bottom: -10px;
    border-radius: 21px;
    cursor: pointer;
    color: #c29969;
    background: linear-gradient(165deg, #9a705c33 -10.33%, #2e1c1221 88.72%);
    backdrop-filter: blur(50px);
    // background: #842b03;
    // border: 1px solid black;
    transition: all 0.5s;
    p:first-child {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    p:nth-child(2) {
      margin-top: 10px;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.04em;
    }
    img {
      width: 180px;
      position: relative;
      bottom: 20px;
    }
    &:hover {
      color: #ffff;
      box-shadow: 0 -6px 40px #892d03;
      background: linear-gradient(165deg, #9a705c4d -10.33%, #2e1c1221 88.72%);
      transform: translateY(-20px);
      transition: all 0.5s;
    }
  }
  @media screen and (max-width: 1580px) {
    width: 1270px;
  }
}

.home__title__btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  width: 586px;
}

.home__title {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 700px;
  :first-child {
    font-weight: 600;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.04em;
  }
  :nth-child(2) {
    font-weight: 600;
    font-size: 96px;
    line-height: 115px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    background: linear-gradient(180deg, #fd7f43 0%, #842b03 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  :nth-child(3) {
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  :nth-child(4) {
    width: 696px;
    font-weight: 300;
    font-size: 26px;
    line-height: 100%;
    letter-spacing: 0.04em;
  }
}
.home_main_img {
  position: relative;
  bottom: 430px;
  left: 580px;
  // height: 200px;
  // margin-left: 580px;
  // margin-top: -300px;
  width: 390px;
}
.home_main_text {
  position: relative;
  bottom: 240px;
  right: 280px;
  width: 566px;
  height: 155px;
  padding: 20px;
  border-radius: 21px;
  color: #ffff;
  backdrop-filter: blur(5px);
  background: linear-gradient(165deg, #9a705c33 -10.33%, #2e1c1221 88.72%);
  p:first-child {
    font-weight: 600;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  p:nth-child(2) {
    font-weight: 300;
    font-size: 22px;
    line-height: 31px;
    letter-spacing: 0.04em;
  }
}
</style>
