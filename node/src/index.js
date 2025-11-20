import modeling from '@jscad/modeling';
 

//const modeling =await import('./lib/modeling.esm.js') ;
export const main= (opt={test:1}) => {
    opt.test++;
 
    return [opt,modeling.primitives.circle({
        center: [0, 0],
        radius: 2,
    })];
};