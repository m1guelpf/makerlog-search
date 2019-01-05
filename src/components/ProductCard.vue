<template>
    <span class="container">
        <div class="card">
            <div class="card-content">
                <article class="media">
                    <div class="media-left">
                        <a :href="'https://getmakerlog.com/products/' + result.slug" target="_blank">
                            <figure v-if="result.icon" class="image is-48x48 img-rounded">
                                <img :src="result.icon" :alt="result.name" />
                            </figure>
                        </a>
                    </div>
                    <div class="media-content">
                        <a :href="'https://getmakerlog.com/products/' + result.slug" target="_blank">
                            <h1 class="title is-5">
                                {{ result.name }}
                                <a v-if="result.launched && result.product_hunt != ''" :href="result.product_hunt"
                                    target="_blank" class="tag">
                                    <span class="emoji" role="img">
                                        <img alt="🚀" draggable="false" src="https://twemoji.maxcdn.com/2/72x72/1f680.png" class="emoji" />
                                    </span>
                                    <span>Launched</span>
                                </a>
                                <span v-else-if="result.launched && result.product_hunt == ''" class="tag">
                                    <span class="emoji" role="img">
                                        <img alt="🚀" draggable="false" src="https://twemoji.maxcdn.com/2/72x72/1f680.png" class="emoji" />
                                    </span>
                                    <span>Launched</span>
                                </span>
                            </h1>
                            <h5 class="subtitle is-6">{{ result.description }}</h5>
                        </a>
                    </div>
                </article>
            </div>
            <footer v-if="result.website != ''" class="card-footer">
                <p class="card-footer-item">
                    <a :href="result.website" target="_blank" rel="noopener noreferrer">
                        <button class="button is-small is-text">
                            <span class="icon">
                                <svg aria-hidden="true" data-prefix="fas" data-icon="globe" class="svg-inline--fa fa-globe fa-w-16 "
                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                    <path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                                </svg>
                            </span>
                            <span>{{ result.website }}</span>
                        </button>
                    </a>
                </p>
                <!-- <p class="card-footer-item">
                        <a class="unstyled-link" href="/@kerr">
                            <div class="heading">Made by <u><strong>@kerr</strong></u></div>
                        </a>
                    </p> -->
            </footer>
        </div>
    </span>
</template>

<script>
export default {
    props: ['result']
}
</script>

<style scoped>
.container {
    margin: 10px;
    width: 808px;
    transition: opacity 480ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s, transform 480ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
    transform: translateX(0px) translateY(278px);
}
.emoji {
    height: 1em;
    width: 1em;
    margin: 0px 0.05em 0px 0.1em;
    vertical-align: -0.1em;
}
.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border-radius: 3px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  position: relative;
  vertical-align: top;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.375em - 1px) 0.75em;
  text-align: center;
  white-space: nowrap;
}
.button:active,
.button:focus {
  outline: 0;
}
.button .icon {
  height: 1.5em;
  width: 1.5em;
}
.button .icon:first-child:not(:last-child) {
  margin-left: calc(-0.375em - 1px);
  margin-right: 0.1875em;
}
.button.is-text {
  background-color: initial;
  border-color: transparent;
  color: #4a4a4a;
  text-decoration: underline;
}
.button.is-small {
  border-radius: 2px;
  font-size: 0.75rem;
}
.icon {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
}
.image {
  display: block;
  position: relative;
}
.image img {
  display: block;
  height: auto;
  width: 100%;
}
.image.is-48x48 {
  height: 48px;
  width: 48px;
}
.tag:not(body) {
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 3px;
  color: #4a4a4a;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
}
a.tag:hover {
  text-decoration: none;
}
.subtitle,
.title {
  word-break: break-word;
}
.title:not(:last-child) {
  margin-bottom: 1.5rem;
}
.title span {
  font-weight: inherit;
}
.title .tag {
  vertical-align: middle;
}
.title {
  color: #363636;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
}
.title:not(.is-spaced) + .subtitle {
  margin-top: -1.5rem;
}
.title.is-5 {
  font-size: 1.25rem;
}
.subtitle {
  color: #4a4a4a;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
}
.subtitle.is-6 {
  font-size: 1rem;
}
.card {
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
}
.card-content {
  padding: 1.5rem;
}
.card-footer {
  border-top: 1px solid #dbdbdb;
  align-items: stretch;
  display: flex;
}
.card-footer-item {
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  padding: 0.75rem;
}
.media {
  align-items: flex-start;
  display: flex;
  text-align: left;
}
.media-left {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}
.media-left {
  margin-right: 1rem;
}
.media-content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  text-align: left;
}
.media-content {
  overflow: hidden !important;
}
.card {
  background-color: #fff !important;
  border: 1px solid #fff !important;
  border-radius: 8px !important;
  box-shadow: none !important;
}
.button {
  border-radius: 5px;
}
.img-rounded,
.img-rounded > img {
  border-radius: 5px;
}
.button > .icon {
  margin-right: 3px !important;
}
</style>