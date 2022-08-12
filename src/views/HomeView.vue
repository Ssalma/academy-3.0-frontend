<template>
  <main class="home">
    <div class="container">
      <nav>
        <figure><img src="@/assets/logo.svg" alt="" /></figure>
        <div class="links">
          <a href="">Home</a>
          <a href="">Sign in</a>
          <div>
            <a href="">Register Now</a>
          </div>
        </div>
      </nav>

      <section class="middle-section">
        <div class="left">
          <h1>
            Ever had a Dream of Becoming a Software <span>Engineer?</span>
          </h1>
          <p>
            Join enyata academy today and bring your long awaiting dream to
            reality.
          </p>
          <button>Register Now</button>
        </div>
        <div class="right">
          <figure><img src="@/assets/home-image.svg" alt="" /></figure>
          <figure class="layer"><img src="@/assets/layer.svg" alt="" /></figure>
        </div>
      </section>

      <section class="lower-section">
        <div class="title">
          <div></div>
          <h2>Why us?</h2>
        </div>
        <div class="card-container">
          <div class="unique">
            <h4>Learn from the best</h4>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation amet.
            </p>
          </div>
          <div>
            <h4>100% online classes</h4>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation amet.
            </p>
          </div>
          <div class="unique">
            <h4>Get paid while learning</h4>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation amet.
            </p>
          </div>
          <div>
            <h4>Work on real project</h4>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation amet.
            </p>
          </div>
        </div>
      </section>
    </div>
    <footer>
      <p>Copyright © Enyata 2021</p>
    </footer>
  </main>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
main {
  height: 100vh;
}

.container {
  padding: 46px 136px 0 136px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .links {
    display: flex;
    align-items: center;
    gap: 0 40px;

    a {
      display: block;
      text-decoration: none;
      color: rgba(33, 31, 38, 0.71);
    }
    div {
      border: 1px solid rgba(117, 87, 211, 0.4);
      border-radius: 2px;
      padding: 12px 20px;

      a {
        color: var(--primary-color);
      }
    }
  }
}

.middle-section {
  margin-top: 110px;
  display: flex;
  align-items: center;

  .left {
    h1 {
      font-weight: 700;
      font-size: 40.9082px;
      line-height: 57px;
      letter-spacing: 0.035em;
      color: #211f26;

      span {
        color: var(--primary-color);
      }
    }

    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      letter-spacing: 0.02em;
      color: rgba(33, 31, 38, 0.71);
      margin-top: 23px;
      margin-bottom: 32px;
      width: 508px;
    }

    button {
      padding: 12px 24px;
      background: var(--primary-color);
      border-radius: 2px;
      border: none;
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      cursor: pointer;
    }
  }

  .right {
    .layer {
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
    }
  }
}

.lower-section {
  margin-top: 134px;

  .title {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 40px;
    h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
      letter-spacing: 0.01em;
      color: #211f26;
    }
    div {
      background: #fdc840;
      border-radius: 2px;
      width: 34px;
      height: 2px;
    }
  }

  .card-container {
    display: flex;
    div {
      h4 {
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        letter-spacing: 0.01em;
        color: #211f26;
        margin-bottom: 12px;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 156%;
        letter-spacing: 0.01em;
        color: rgba(33, 31, 38, 0.6);
      }
      padding: 24px 26px;
      width: 292px;
      height: 202px;
      &.unique {
        background: rgba(117, 87, 211, 0.1);
      }
    }
  }
}

footer {
  padding-top: 55px;
  padding-bottom: 79px;
  text-align: center;
  background: var(--primary-color);
  color: #fff;
}
</style>
