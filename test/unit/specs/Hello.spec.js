import Vue from 'vue'
import Hello from '@/components/Hello'
import { createRenderer } from 'vue-server-renderer'

const renderer = createRenderer();

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })

  it('renders to a nice snapshot', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Hello),
    });
    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot();
    });
  });
})
