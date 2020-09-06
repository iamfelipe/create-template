<template>
  <a
      :href="href"
      target="_blank"
      rel="noopener">{{ label }}</a>
</template>

<script>
export default {
  name: "Link",
  props: {
    label: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      default: "#",
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  @apply underline text-primary-500;

  &:hover {
    @apply text-primary-700;
  }
}
</style>