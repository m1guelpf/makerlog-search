<template>
  <ais-results v-if="searchStore.query.length > 0">
    <ProductCard slot-scope="{ result }" :result="result" />
  </ais-results>
</template>

<script>
import ProductCard from "./ProductCard";

export default {
  props: ["searchStore"],
  components: {ProductCard}
};
</script>
