/* In this project, all components are organized within each index by the folder to 
which each belongs. Aside from the master index, all indices (or indexes if you prefer; 
both are acceptable plural forms of index) live within one folder penetration of the
src folder. Having only 1 index per folder within ./src, allows file structure to stay
neat and clean, without the redundancy of having an index for each component or 
component type. 

- The only exception to this pattern will be the master folder, which does not contain
an index for obvious reasons... */

// export all from navigaion folder
export { default as Nav } from './navigation/toolbar/toolbar';
export { default as NavItem } from './navigation/navItem/navItem';
export { default as Footer } from './navigation/footer/footer';

// export all from grid 
export { default as Col } from './grid/Col';
export { default as Container } from './grid/Container';
export { default as Row } from './grid/Row';

// export all from structure

// all all from UI folder
export { default as Input } from './UI/input/input';
export { default as Form } from './UI/form/form';
export { default as Modal } from './UI/modal/modal';
export { default as Backdrop } from './UI/backdrop/backdrop';

