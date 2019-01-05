<template>
  <div>
    <Header></Header>
    <ais-index index-name="products" :search-store="searchStore">
      <SearchInput />
      <Results :searchStore="searchStore" />
    </ais-index>
    <MakerAds />
  </div>
</template>

<script>
import { createFromAlgoliaCredentials } from "vue-instantsearch";
import Header from "./components/Header";
import Results from "./components/Results";
import SearchInput from "./components/SearchInput";
import MakerAds from "./components/MakerAds";

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
    Header: Header,
    SearchInput: SearchInput,
    Results: Results,
    MakerAds: MakerAds
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
