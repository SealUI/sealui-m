import SealGrid from './src/main';

/* istanbul ignore next */
SealGrid.install = function(Vue) {
    Vue.component(SealGrid.name, SealGrid);
};

export default SealGrid;
