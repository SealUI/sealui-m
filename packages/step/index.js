import SealStep from '../steps/src/step';

/* istanbul ignore next */
SealStep.install = function(Vue) {
  Vue.component(SealStep.name, SealStep);
};

export default SealStep;
