<template>
  <div>
    <ais-input class="bg-white" placeholder="Search products..."></ais-input>
  </div>
</template>

<style scoped>
div {
  margin: 10px;
}

.bg-white {
  background: white;
}
input {
  width: 100%;
  background-color: #f1f2f6;
  border: none;
  outline: 0;
  border-radius: 6px;
  font-weight: 500;
  box-shadow: none;
  font-size: 2em;
  padding: 10px;
}
input::-webkit-input-placeholder {
  color: #d3d3d3;
}
input::-ms-input-placeholder {
  color: #d3d3d3;
}
</style>
