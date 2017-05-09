import SealSteps from './src/steps';

/* istanbul ignore next */
SealSteps.install = function(Vue) {
    Vue.component(SealSteps.name, SealSteps);
};

export default SealSteps;
