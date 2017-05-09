import SealTimeline from './src/main';

/* istanbul ignore next */
SealTimeline.install = function(Vue) {
    Vue.component(SealTimeline.name, SealTimeline);
};

export default SealTimeline;
