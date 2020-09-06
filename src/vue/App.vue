<template>
  <article class="text-center space-y-6 py-8">

    <!--Header-->
    <header class="max-w-lg mx-auto space-y-2">

      <!--Image-->
      <figure>
        <img :src="image"
             alt="Webpack logo"
             title="Webpack logo"
             class="mx-auto w-40">
      </figure>

      <!--Title-->
      <h2 class="text-2xl tracking-tight xl:text-4xl font-black leading-none font-headline uppercase">
        {{ txt.title }}
      </h2>

      <!--Description-->
      <p class="text-lg">
        For a guide and recipes on how to configure / customize this project, check out the
        <a
            href="https://github.com/iamfelipe/static-boilerplate"
            target="_blank"
            class="underline text-primary-500 hover:text-primary-600">project documentation</a>.
      </p>
    </header>

    <!--Essential links-->
    <section v-for="topic in txt.topics" class="space-y-2">
      <!--Title-->
      <h3 class="text-lg font-black font-headline uppercase">{{ topic.title }}</h3>
      <!--Topics list-->
      <ul class="c-list">
        <li v-for="reference in topic.list" class="c-list__item">
          <Link :label="reference.name" :href="reference.link"/>
        </li>
      </ul>
    </section>

  </article>
</template>

<script>
// Components
import Link from "@/src/vue/components/atoms/Link.vue";

// Assets
import image from "@/src/img/webpack.png";

export default {
  name: "App",
  components: {
    Link,
  },
  data: () => ({
    txt: {
      title: "Welcome to your Frontend Template",
      topics: [
        {
          title: "Essential Links",
          list: [
            {
              name: "Modular Scale",
              link: "https://github.com/modularscale/modularscale-sass",
            },
            {
              name: "Tailwind CSS",
              link: "https://tailwindcss.com",
            },
            {
              name: "Theming Bootstrap",
              link: "https://getbootstrap.com/docs/4.5/getting-started/theming",
            },
          ],
        },
        {
          title: "Ecosystem",
          list: [
            {
              name: "BEM",
              link: "http://getbem.com",
            },
            {
              name: "SMACSS",
              link: "http://smacss.com",
            },
          ],
        },
        {
          title: "Installed plugins",
          list: [
            {
              name: "Webpack",
              link: "https://webpack.js.org",
            },
            {
              name: "Babel",
              link: "https://babeljs.io",
            },
            {
              name: "Prettier",
              link: "https://prettier.io",
            },
            {
              name: "PostCSS",
              link: "https://postcss.org",
            },
            {
              name: "ESLint",
              link: "https://eslint.org",
            },
          ],
        },
      ],
    },
    image,
  }),
};
</script>

<style lang="scss" scoped>

.c-list {
  @apply flex flex-wrap justify-center -mx-2;

  &__item {
    @apply px-2;
  }
}

</style>

