<template>
    <div class="container">
        <MakerlogSearchLogo />
        <h1>Makerlog Search</h1>
    </div>
</template>

<script>
import MakerlogSearchLogo from "./MakerlogSearchLogo";

export default {
    components: {
        'MakerlogSearchLogo': MakerlogSearchLogo,
    }
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
}

svg {
    width: 100px;
}

h1 {
    margin-left: 10px;
}
</style>