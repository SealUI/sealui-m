import SealVideo from './src/main';

/* istanbul ignore next */
SealVideo.install = function(Vue) {
    Vue.component(SealVideo.name, SealVideo);
};

export default SealVideo;
