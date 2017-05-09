import SealCell from './src/main';

/* istanbul ignore next */
SealCell.install = function(Vue) {
    Vue.component(SealCell.name, Cell);
};

export default SealCell;
