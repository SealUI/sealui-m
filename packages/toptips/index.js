import Vue from 'vue';

const ToptipsConstructor = Vue.extend(require('./src/main'));

let toptipstPool = [];

let getAnInstance = () => {
  if (toptipstPool.length > 0) {
    let instance = toptipstPool[0];
    toptipstPool.splice(0, 1);
    return instance;
  }
  return new ToptipsConstructor({
    el: document.createElement('div')
  });
};

let returnAnInstance = instance => {
  if (instance) {
    toptipstPool.push(instance);
  }
};

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

ToptipsConstructor.prototype.close = function(userOnClose) {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
  if (typeof userOnClose === 'function') {
    userOnClose();
  }
  this.closed = true;
  returnAnInstance(this);
};

let Toptips = (options = {}) => {
    let duration = options.duration || 3000;
    let instance = getAnInstance();
    instance.closed = false;
    clearTimeout(instance.timer);
    instance.message = typeof options === 'string' ? options : options.message;
    instance.position = options.position || 'middle';
    instance.className = options.className || '';
    instance.type = options.type || '';
    instance.onClose = options.onClose || '';
    document.body.appendChild(instance.$el);
    Vue.nextTick(function() {
        instance.visible = true;
        instance.$el.removeEventListener('transitionend', removeDom);
        ~duration && (instance.timer = setTimeout(function() {
            if (instance.closed) return;
                instance.close(instance.onClose);
            }, duration));
        });
        return instance;
    };

export default Toptips;
