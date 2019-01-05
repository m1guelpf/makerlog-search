<template>
  <div>
    <Header></Header>
    <ais-index index-name="products" :search-store="searchStore">
      <SearchInput />
      <ais-results v-if="searchStore.query.length > 0">
          <ProductCard slot-scope="{ result }" :result="result" />
      </ais-results>
    </ais-index>
  </div>
</template>

<script>
import { createFromAlgoliaCredentials } from "vue-instantsearch";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import ProductCard from "./components/ProductCard";

const searchStore = createFromAlgoliaCredentials(
  "X2AXEBEN1X",
  "941b400209e4c29d834f6c7793d3d2a5"
);

export default {
  data: () => {
    return {
      searchStore
    };
  },
  components: {
    'Header': Header,
    'SearchInput': SearchInput,
    'ProductCard': ProductCard,
  }
};
</script>

<style>
html {
  background-color: #ecf0f1;
  font-size: 16px;
}

body {
  font-family: sans-serif;
  color: #4a4a4a;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}

a {
  text-decoration: none;
}
</style>
