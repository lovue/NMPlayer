function __$styleInject(css) {
    if (!css) return;

    if (typeof window == 'undefined') return;
    var style = document.createElement('style');
    style.setAttribute('media', 'screen');

    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

const fillDateNumber = value => {
  return value < 10 ? `0${value}` : value
};

/*
 * getype returns a string which represents the type of value.
 *
 * @access public
 * @function getype
 * @param {*} value - A thing we want to check the type of
 * @returns {string}
 * */

const getype = value => {
  let type = Object.prototype.toString.call(value);

  if (type === '[object Undefined]') {
    return 'undefined'
  }

  if (type === '[object Null]') {
    return 'null'
  }

  if (type === '[object Number]') {
    return 'number'
  }

  if (type === '[object String]') {
    return 'string'
  }

  if (type === '[object Array]') {
    return 'array'
  }

  if (type === '[object Object]') {
    return 'object'
  }

  if (type === '[object Function]') {
    return 'function'
  }

  if (type === '[object Boolean]') {
    return 'boolean'
  }

  if (type === '[object Date]') {
    return 'date'
  }

  if (type === '[object Error]') {
    return 'error'
  }

  if (type === '[object RegExp]') {
    return 'regexp'
  }
};

const isEmptyObject = obj => {
  if (getype(obj) !== 'object') {
    throw new TypeError(`${obj} 不是对象字面量`)
  }

  return !Object.keys(obj).length
};

!function(s){var c,e='<svg><symbol id="nmp-icon-spinner" viewBox="0 0 1024 1024"><path d="M512 62c-244.996875 0-444.2625 195.778125-449.859375 439.425 5.203125-212.56875 166.8375-383.175 365.484375-383.175 201.9375 0 365.625 176.2875 365.625 393.75 0 46.603125 37.771875 84.375 84.375 84.375s84.375-37.771875 84.375-84.375c0-248.540625-201.459375-450-450-450zM512 962c244.996875 0 444.2625-195.778125 449.859375-439.425-5.203125 212.56875-166.8375 383.175-365.484375 383.175-201.9375 0-365.625-176.2875-365.625-393.75 0-46.603125-37.771875-84.375-84.375-84.375s-84.375 37.771875-84.375 84.375c0 248.540625 201.459375 450 450 450z"  ></path></symbol><symbol id="nmp-icon-play" viewBox="0 0 1024 1024"><path d="M838.22364445 467.98569836L237.55788683 95.15867614c-33.65799466-20.71261275-77.6722963 5.17815349-77.6722963 44.01430164v745.65404444c0 38.83614815 44.01430164 64.72691317 77.6722963 44.01430164l598.07668148-372.82702222c36.24707201-18.12353539 36.24707201-69.90506667 2.58907614-88.02860328z"  ></path></symbol><symbol id="nmp-icon-jingyin" viewBox="0 0 1024 1024"><path d="M958.708971 630.01995L840.671625 511.997953l118.021997-118.0353-36.420491-36.419467-118.020974 118.036323-118.036323-118.018927-36.419468 36.419468 118.037347 118.020973-118.020974 118.0353 36.420491 36.420491 118.018927-118.037346 118.039393 118.018927 36.417421-36.418445zM552.664142 118.689193c-18.745946-7.91425-41.48074-4.417613-56.591903 8.658193L267.476891 324.980559h-129.60173c-40.022529 0-72.585155 31.089066-72.585156 69.300343v235.329726c0 38.210253 32.562627 69.292156 72.585156 69.292156H267.475867l228.595349 197.624986c9.677407 8.370645 22.183232 12.979616 35.262108 12.979616a54.481845 54.481845 0 0 0 21.328771-4.313236c19.014052-8.032954 31.290657-26.046213 31.290657-45.88505V164.574243c0.002047-19.821441-12.274558-37.826514-31.28861-45.88505zM531.790742 860.132862l-0.454348 0.207731-244.004293-210.604602H137.876184c-11.618619 0-21.074991-9.026584-21.074991-20.126386v-235.329727c0-11.099802 9.457396-20.133549 21.074991-20.133549h149.455917L530.649755 163.789367l1.793856 0.783852-0.652869 695.559643z" fill="" ></path></symbol><symbol id="nmp-icon-expand" viewBox="0 0 1024 1024"><path d="M548.9 472.1c13.6 13.6 35.9 13.6 49.6 0l290.4-289v220.1c0 19.2 15.8 34.9 35.1 34.9s35.1-15.7 35.1-34.9V99.4c0-9.7-4.1-18.6-10.6-24.9-6.3-6.5-15.3-10.5-25-10.5H617.9c-19.3 0-35.1 15.7-35.1 34.9s15.8 34.9 35.1 34.9H839l-290.2 289c-13.6 13.6-13.6 35.7 0.1 49.3zM76.6 945.5c6.3 6.5 15.3 10.5 25 10.5h305.5c19.3 0 35.1-15.7 35.1-34.9s-15.8-34.9-35.1-34.9H185.9l290.4-288.6c13.6-13.6 13.6-35.7 0-49.3-13.6-13.6-35.9-13.6-49.6 0L136.2 837.1V616.8c0-19.2-15.8-34.9-35.1-34.9S66 597.6 66 616.8v303.8c0.2 9.7 4.1 18.6 10.6 24.9z"  ></path></symbol><symbol id="nmp-icon-close" viewBox="0 0 1024 1024"><path d="M573.02251141 510.54364445l358.01709984-356.1590329c16.93013333-16.842752 17.01508741-44.13606875 0.17233542-61.06620207-16.88644267-16.97261037-44.13606875-17.01508741-61.06620208-0.1723354L512.04247703 449.34879763 157.04852859 93.27593245c-16.79906133-16.842752-44.13606875-16.93013333-61.06620207-0.08738134-16.88644267 16.84396563-16.9289197 44.18097303-0.08738134 61.10989274l354.910208 355.98791112L92.95796148 866.23057541c-16.93013333 16.842752-17.01508741 44.13606875-0.1723354 61.06620207a43.09962903 43.09962903 0 0 0 30.61987555 12.73947022c11.01126163 0 22.02495052-4.18944948 30.44632652-12.56713481l357.93093215-356.03038814L870.01709985 930.75076741c8.421376 8.46506667 19.4763283 12.69820682 30.57497126 12.69820681a43.10812445 43.10812445 0 0 0 30.49123081-12.60961185c16.88644267-16.84396563 16.93013333-44.13728237 0.08616771-61.0674157L573.02251141 510.54485808z" fill="" ></path></symbol><symbol id="nmp-icon-delete" viewBox="0 0 1024 1024"><path d="M910.52612247 216.25754873a25.71673536 25.71673536 0 1 0-1e-8-51.43346982H113.43592373a25.71673536 25.71673536 0 1 0 0 51.43346982H910.52612247zM653.40163497 113.43346982a25.71673536 25.71673536 0 1 0-1e-8-51.43346982H370.56041123a25.71673536 25.71673536 0 1 0 0 51.43346982h282.84122373zM396.27714658 781.93999443a25.71673536 25.71673536 0 1 0 51.43346983 0V344.84122286a25.71673536 25.71673536 0 1 0-51.43346983 0V781.93999443z m179.97428321 0a25.71673536 25.71673536 0 1 0 51.43346982 0V344.84122286a25.71673536 25.71673536 0 1 0-51.43346982 0V781.93999443zM216.30286338 293.40775302a25.71673536 25.71673536 0 0 0-25.71673536 25.71673536V884.80693408a77.15020518 77.15020518 0 0 0 77.15020518 77.1502043H756.26857461a77.15020518 77.15020518 0 0 0 77.1502043-77.1502043V319.08162676a25.71673536 25.71673536 0 1 0-51.43346983 0V859.04733799c0 28.37413125-23.05933857 51.43346982-51.43346982 51.43346982H293.45306768c-28.37413125 0-51.43346982-23.05933857-51.43346983-51.43346982V319.12448838a25.71673536 25.71673536 0 0 0-25.71673447-25.71673535z m0 0" fill="" ></path></symbol><symbol id="nmp-icon-heart-o" viewBox="0 0 1025 1024"><path d="M940.99414063 279.88085937c-13.62304688-32.78320313-33.046875-62.05078125-57.74414063-86.92382812-47.8125-48.1640625-110.56640625-74.70703125-176.66015625-74.70703125-75.32226563 0-145.8984375 34.27734375-194.58984375 94.39453125C463.30859375 152.52734375 392.73242187 118.25 317.41015625 118.25c-66.00585938 0-128.75976563 26.71875-176.74804688 75.234375-24.78515625 25.04882813-44.296875 54.40429688-57.83203124 87.27539063-14.0625 34.1015625-21.09375 70.22460938-20.7421875 107.40234374 0.61523438 80.59570313 35.24414063 155.7421875 95.00976562 206.36718751 2.72460938 2.28515625 5.2734375 4.48242188 7.82226563 6.85546874 13.09570313 11.77734375 50.9765625 46.40625 98.96484374 90.26367188 82.17773438 75.14648438 184.48242188 168.66210938 226.31835938 205.83984375 6.15234375 5.36132813 13.88671875 8.34960938 21.88476563 8.34960938 8.0859375 0 15.90820313-2.98828125 21.88476562-8.34960938 30.32226563-26.98242188 92.98828125-84.28710938 159.43359375-145.01953125 65.21484375-59.58984375 132.62695313-121.2890625 172.08984375-156.62109375 61.08398438-50.88867188 96.328125-126.9140625 96.59179688-208.56445313 0.08789063-37.35351563-7.03125-73.4765625-21.09375001-107.40234374z m-379.95117188-20.65429687c35.94726563-46.7578125 88.9453125-73.56445313 145.546875-73.56445313 48.1640625 0 93.95507813 19.51171875 129.0234375 54.84375001 18.36914063 18.45703125 32.95898438 40.34179688 43.2421875 65.12695312 10.546875 25.57617188 15.90820313 52.91015625 15.90820313 81.12304688-0.08789063 31.20117188-6.76757813 61.171875-19.95117188 89.03320312-12.56835938 26.27929688-30.67382813 49.83398438-52.47070313 68.11523438l-1.58203125 1.40624999c-34.18945313 30.67382813-92.63671875 83.84765625-173.58398437 158.02734376-63.28125 57.91992188-106.43554688 97.29492188-135.08789063 123.22265624-43.68164063-39.46289063-114.87304688-104.4140625-177.80273437-161.89453124l-41.57226563-37.96875001c-39.7265625-36.38671875-71.10351563-65.0390625-82.79296874-75.49804687-0.703125-0.61523438-1.40625-1.23046875-2.109375-1.93359375-2.28515625-2.02148438-4.65820313-4.13085938-7.20703125-6.24023438-44.82421875-38.05664063-70.75195313-94.65820313-71.19140625-155.30273437-0.17578125-28.125 5.09765625-55.37109375 15.64453125-81.03515625 10.37109375-24.9609375 24.9609375-47.02148438 43.41796875-65.56640625 35.33203125-35.68359375 81.2109375-55.28320313 129.02343749-55.28320313 56.51367188 0 109.59960938 26.71875 145.54687501 73.38867188 11.68945313 15.1171875 29.97070313 24.08203125 49.04296874 24.08203125 18.984375 0.08789063 37.35351563-8.96484375 48.95507813-24.08203125z"  ></path></symbol><symbol id="nmp-icon-menu-fold" viewBox="0 0 1024 1024"><path d="M112 224h800c26.5 0 48-21.5 48-48s-21.5-48-48-48H112c-26.5 0-48 21.5-48 48s21.5 48 48 48z m0 336h480c26.5 0 48-21.5 48-48s-21.5-48-48-48H112c-26.5 0-48 21.5-48 48s21.5 48 48 48z m669.3-204.4c-1.5-1.3-3.3-2-5.3-2-4.4 0-8 3.6-8 8v300.3c0 1.9 0.7 3.8 2 5.3 2.9 3.3 8 3.7 11.3 0.8l165.1-144c0.5-0.5 1.1-1 1.5-1.5 5.8-6.7 5.1-16.8-1.5-22.6L781.3 355.6zM912 800H112c-26.5 0-48 21.5-48 48s21.5 48 48 48h800c26.5 0 48-21.5 48-48s-21.5-48-48-48z"  ></path></symbol><symbol id="nmp-icon-plus" viewBox="0 0 1024 1024"><path d="M915.34222222 471.04H552.96V117.76c0-22.64177778-18.31822222-40.96-40.96-40.96s-40.96 18.31822222-40.96 40.96V471.04H116.62222222c-22.64177778 0-40.96 18.31822222-40.96 40.96s18.31822222 40.96 40.96 40.96H471.04v354.41777778c0 22.64177778 18.31822222 40.96 40.96 40.96s40.96-18.31822222 40.96-40.96V552.96h362.38222222c22.64177778 0 40.96-18.31822222 40.96-40.96s-18.31822222-40.96-40.96-40.96z"  ></path></symbol><symbol id="nmp-icon-more-h" viewBox="0 0 1024 1024"><path d="M265.1 509.8c-0.1 45.5-36.8 82.2-82.4 82.1-45.4-0.1-82.3-37-82.2-82.5 0-45.3 37.1-82.2 82.6-82.1 45.4 0.1 82 36.9 82 82.5zM842.1 427.4c45.5 0 82.5 36.8 82.5 82.2 0.1 45.4-36.8 82.4-82.3 82.4-45.6 0-82.4-36.6-82.4-82.2s36.6-82.4 82.2-82.4zM512.4 592c-45.4 0-82.6-37.3-82.4-82.4 0.3-45.5 37.1-82.2 82.6-82.2 45.4 0 82.5 37.1 82.3 82.4-0.1 45.4-37 82.2-82.5 82.2z"  ></path></symbol><symbol id="nmp-icon-pause" viewBox="0 0 1024 1024"><path d="M298.666667 131.413333c0-34.986667 28.16-63.573333 62.72-63.573333S424.106667 96 424.106667 131.413333v760.746667c0 34.986667-28.16 63.573333-62.72 63.573333S298.666667 927.146667 298.666667 892.16V131.413333z m301.226666 760.746667c0 34.986667 28.16 63.573333 62.72 63.573333s62.72-28.16 62.72-63.573333V131.413333c0-34.986667-28.16-63.573333-62.72-63.573333S599.893333 96 599.893333 131.413333v760.746667z" fill="" ></path></symbol><symbol id="nmp-icon-download" viewBox="0 0 1024 1024"><path d="M752 319.33333334a210 210 0 0 1 0 420h-30a30 30 0 0 1 0-60h30a150 150 0 0 0 0-300 138 138 0 0 0-26.1 2.4 30 30 0 0 1-35.7-25.8 180 180 0 0 0-356.4 0 30 30 0 0 1-35.7 25.8A138 138 0 0 0 272 379.33333334a150 150 0 0 0 0 300h30a30 30 0 0 1 0 60h-30a210 210 0 0 1 0-420h7.8a240 240 0 0 1 464.4 0z"  ></path><path d="M482 559.33333334a30 30 0 0 1 60 0v270a30 30 0 0 1-60 0z"  ></path><path d="M594.5 689.53333334a30 30 0 0 1 45 39.6l-105 120a30 30 0 0 1-45 0l-105-120a30 30 0 1 1 45-39.6l82.5 94.2z"  ></path></symbol><symbol id="nmp-icon-shrink" viewBox="0 0 1024 1024"><path d="M73.2 949.8c13.6 13.6 35.8 13.6 49.5 0l289.7-290v220.9c0 19.3 15.7 35 35 35s35-15.7 35-35V575.8c0-9.7-4.1-18.6-10.5-25-6.3-6.5-15.2-10.5-25-10.5H142.1c-19.3 0-35 15.7-35 35s15.7 35 35 35h220.7l-289.6 290c-13.6 13.6-13.6 35.9 0 49.5z m476.7-477c6.3 6.5 15.2 10.5 25 10.5h304.8c19.3 0 35-15.7 35-35s-15.7-35-35-35H659l289.7-289.6c13.6-13.6 13.6-35.8 0-49.5-13.6-13.6-35.8-13.6-49.5 0L609.4 364V143c0-19.3-15.7-35-35-35s-35 15.7-35 35v304.9c0.1 9.7 4 18.6 10.5 24.9z"  ></path></symbol><symbol id="nmp-icon-play-next" viewBox="0 0 1024 1024"><path d="M805.323 166.36c27.65 0 50.274 22.624 50.274 50.275v590.73c0 27.651-22.623 50.275-50.274 50.275s-50.275-22.624-50.275-50.275v-590.73c0-27.651 22.623-50.275 50.275-50.275zM668.638 476.65L236.43 174.06c-13.197-9.27-30.48-10.37-44.776-2.986-14.297 7.542-23.252 22.153-23.252 38.335V814.75c0 16.182 8.955 30.95 23.252 38.335 14.297 7.227 31.579 6.284 44.776-2.985l432.364-302.592c11.469-8.17 18.382-21.367 18.382-35.507 0-14.14-6.913-27.337-18.54-35.35z"  ></path></symbol><symbol id="nmp-icon-play-random" viewBox="0 0 1024 1024"><path d="M814.072 318.062h103.766c27.185 0 41.263-32.525 22.573-52.307L853.03 172.79c-11.772-12.5-31.433-13.108-43.933-1.335-12.5 11.772-13.108 31.433-1.335 43.933l38.108 40.535H813.95c-110.198 0-181.923 61.167-328.65 238.478l-10.68 12.865c-123.791 149.398-187.628 203.04-265.543 203.04H105.92c-17.113 0-31.07 13.957-31.07 31.069s13.957 31.069 31.07 31.069h103.158c104.615 0 176.705-60.682 313.48-225.614l10.68-12.864c133.621-161.292 197.58-215.905 280.834-215.905z"  ></path><path d="M917.96 707.88H814.193c-64.565 0-127.067-40.778-205.346-126.582-10.802-11.772-29.127-12.621-41.021-1.82-11.772 10.801-12.622 29.127-1.82 41.02 88.352 96.727 162.99 145.515 248.187 145.515h37.865l-42.841 46.724c-10.801 11.773-10.073 30.098 1.699 41.021 11.772 10.801 30.098 10.073 41.02-1.699l87.503-95.27c16.87-18.933 3.763-48.91-21.48-48.91zM106.04 313.572H209.2c62.501 0 123.668 41.384 203.04 129.737 11.408 12.743 31.069 13.835 43.812 2.427s13.835-31.07 2.427-43.812c-90.173-100.489-163.961-150.369-249.28-150.369H106.041c-17.112 0-31.069 13.957-31.069 31.069s13.835 30.948 31.069 30.948z"  ></path></symbol><symbol id="nmp-icon-play-circle-single" viewBox="0 0 1024 1024"><path d="M953.536 334.336C902.72 241.6 805.568 184 699.904 184H355.456c-77.184 0-149.76 30.08-204.352 84.608C96.512 323.2 66.496 395.776 66.496 472.96s30.08 149.696 84.608 204.352c54.592 54.592 127.168 84.608 204.352 84.608h333.376v57.984c0 18.56 12.736 25.472 28.288 15.424l139.648-90.176c15.552-9.984 15.36-26.24-0.32-36.032L717.44 623.104c-15.744-9.792-28.608-2.624-28.608 15.936v57.728H355.456c-123.392 0-223.808-100.416-223.808-223.872 0-123.456 100.416-223.808 223.808-223.808h344.512c81.792 0 157.12 44.608 196.416 116.416 8.704 15.808 28.416 21.568 44.224 12.992 15.808-8.576 21.568-28.352 12.928-44.16zM507.328 649.792c15.296 0 22.912-6.336 22.912-19.008V314.496c0-8.896-4.48-12.736-13.376-11.456 0 0-64.64 21.568-75.2 24.448-10.56 2.944-20.352 9.728-20.352 22.08s7.488 17.856 19.392 14.464c13.696-3.904 45.76-12.48 45.76-12.48v279.232c0 12.736 6.912 19.008 20.864 19.008z"  ></path></symbol><symbol id="nmp-icon-play-circle-list" viewBox="0 0 1024 1024"><path d="M953.536 334.336C902.72 241.6 805.568 184 699.904 184H355.456c-77.184 0-149.76 30.08-204.352 84.608C96.512 323.2 66.496 395.776 66.496 472.96s30.08 149.696 84.608 204.352c54.592 54.592 127.168 84.608 204.352 84.608h333.376v57.984c0 18.56 12.736 25.472 28.288 15.424l139.648-90.176c15.552-9.984 15.36-26.24-0.32-36.032L717.44 623.104c-15.744-9.792-28.608-2.624-28.608 15.936v57.728H355.456c-123.392 0-223.808-100.416-223.808-223.872 0-123.456 100.416-223.808 223.808-223.808h344.512c81.792 0 157.12 44.608 196.416 116.416 8.704 15.808 28.416 21.568 44.224 12.992 15.808-8.576 21.568-28.352 12.928-44.16z"  ></path></symbol><symbol id="nmp-icon-speaker-mute" viewBox="0 0 1103 1024"><path d="M568.027 81.886c-11.205-6.034-24.997-4.31-35.34 4.31-0.862 0-49.131 40.511-103.434 81.023-94.815 70.68-122.398 82.747-127.57 84.471H106.02c-15.515 0-27.582 12.93-27.582 28.445v447.353c0 15.515 12.067 28.445 27.582 28.445h217.212c5.172 1.724 31.03 14.653 114.64 83.61 48.27 40.51 92.229 80.16 92.229 80.16 6.034 6.034 13.791 8.62 22.41 8.62 4.31 0 9.482-0.862 13.792-2.586 12.067-5.171 19.825-18.1 19.825-31.03V112.916c0-12.93-6.896-24.997-18.101-31.03z m-36.202 757.656c-14.653-12.93-31.03-26.72-48.27-40.512-111.191-92.229-138.774-99.986-157.737-99.986H156.876c-18.964 0-23.273-5.172-23.273-24.997v-343.92c0-13.79 1.724-21.548 17.239-21.548h151.703c18.101 0 46.546-7.757 168.081-99.124a67857.38 67857.38 0 0 0 61.199-46.546v676.633zM1024 621.468L905.912 503.38 1024 385.293c10.343-11.205 10.343-28.445 0-38.788s-28.444-10.343-38.788 0L867.125 464.593 749.037 346.505c-10.343-10.343-28.444-10.343-38.788 0-10.343 11.205-10.343 28.444 0 38.788L827.475 503.38 710.249 621.468c-10.343 11.205-10.343 28.444 0 38.788 10.344 10.343 28.445 10.343 38.788 0l118.088-118.088 118.087 118.088c11.206 10.343 28.445 10.343 38.788 0 10.343-10.344 10.343-28.445 0-38.788z"  ></path></symbol><symbol id="nmp-icon-speaker" viewBox="0 0 1103 1024"><path d="M567.443 82.155c-11.553-5.682-25.262-4.13-35.334 4.031-0.471 0.396-49.446 40.14-103.508 80.776-94.043 70.733-121.427 82.527-126.985 84.41h-133.25c-0.674 0-1.313 0.1-1.987 0.1H106.22c-15.157 0-27.452 12.553-27.452 28.048v447.654c0 15.494 12.295 28.048 27.452 28.048h217.188c5.457 2.015 31.326 14.24 114.758 83.716 48.538 40.405 92.124 79.884 92.561 80.28 6.232 5.65 14.181 8.624 22.198 8.624a32.75 32.75 0 0 0 13.675-3.007c11.991-5.517 19.705-17.675 19.705-31.12V112.88c0.033-13.116-7.31-25.042-18.863-30.725z m-35.67 757.18c-14.787-12.752-31.292-26.793-48.2-40.735-111.424-92.14-138.977-99.871-157.671-99.871-0.37 0-0.708 0.099-1.078 0.099-0.37 0-0.707-0.1-1.078-0.1H157.015c-19.233 0-23.68-5.55-23.68-25.273V329.901c0-13.38 1.55-21.771 17.348-21.771h151.775c18.19 0 46.146-7.632 168.011-98.781 21.726-16.255 42.946-32.575 61.304-46.913v676.899z m328.275-336.22c0-86.954-46.18-162.807-114.826-203.608-3.099-1.685-10.475-4.922-15.595-4.922-15.225 0-27.586 12.62-27.586 28.18 0 10.44 5.456 19.757 13.709 24.613 53.05 30.79 88.89 88.97 88.89 155.737 0 67.958-37.052 127.028-91.686 157.39-7.95 4.955-13.204 13.941-13.204 24.15 0 15.56 12.362 28.18 27.586 28.18 6.468 0.067 14.147-3.832 14.147-3.832 70.735-40.272 118.565-117.348 118.565-205.888z m-31.83-346.89c-5.12-3.139-10.24-5.683-16.438-5.683-15.157 0-27.452 12.555-27.452 28.049 0 11.167 6.501 20.12 15.663 25.24 100.813 60.062 168.617 171.563 168.617 299.35 0 127.69-67.703 239.124-168.415 299.218-8.825 4.89-16.437 14.173-16.437 25.637 0 15.495 12.294 28.049 27.451 28.049 6.097 0 10.947-2.379 16.236-5.517 116.98-69.709 195.664-199.116 195.664-347.387 0-148.006-78.346-277.149-194.89-346.956z"  ></path></symbol></svg>',t=(c=document.getElementsByTagName("script"))[c.length-1].getAttribute("data-injectcss");if(t&&!s.__iconfont__svg__cssinject__){s.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");}catch(c){console&&console.log(c);}}!function(c){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(c,0);else{var t=function(){document.removeEventListener("DOMContentLoaded",t,!1),c();};document.addEventListener("DOMContentLoaded",t,!1);}else document.attachEvent&&(e=c,o=s.document,l=!1,a=function(){l||(l=!0,e());},(i=function(){try{o.documentElement.doScroll("left");}catch(c){return void setTimeout(i,50)}a();})(),o.onreadystatechange=function(){"complete"==o.readyState&&(o.onreadystatechange=null,a());});var e,o,l,a,i;}(function(){var c,t;(c=document.createElement("div")).innerHTML=e,e=null,(t=c.getElementsByTagName("svg")[0])&&(t.setAttribute("aria-hidden","true"),t.style.position="absolute",t.style.width=0,t.style.height=0,t.style.overflow="hidden",function(c,t){t.firstChild?function(c,t){t.parentNode.insertBefore(c,t);}(c,t.firstChild):t.appendChild(c);}(t,document.body));});}(window);

__$styleInject("svg {\n  color: inherit;\n  vertical-align: middle;\n  /* 通过设置 color 来改变 SVG 的颜色/fill */\n  fill: currentColor;\n  /* path 和 stroke 溢出 viewBox 部分在 IE 下会显示\n     normalize.css 中也包含这行 */\n  overflow: hidden;\n}\n.v-nm-player {\n  --main-color: #222;\n  --theme-color: #DF3B3B;\n  --second-color: #919191;\n  --bg-color: #f5f5f5;\n  --border-color: #e9e9e9;\n  --border-radius: 4px;\n  --white: #fff;\n  --unit: 8px;\n  --2unit: 16px;\n  --3unit: 24px;\n  --4unit: 32px;\n  --5unit: 40px;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  border-top: 1px solid var(--border-color);\n}\n.v-nm-player .nm-cover {\n  position: relative;\n  width: 60px;\n  height: 100%;\n  background-color: var(--bg-color);\n  background-size: cover;\n  margin-right: var(--3unit);\n}\n.v-nm-player .nm-cover .icon-wrap {\n  display: none;\n  width: 60px;\n  height: 60px;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 12px;\n}\n.v-nm-player .nm-cover .icon-wrap .icon-fangda {\n  color: var(--white);\n}\n.v-nm-player .nm-cover:hover .icon-wrap {\n  display: block;\n  position: absolute;\n}\n.v-nm-player .nm-act {\n  display: flex;\n  align-items: center;\n  margin-right: var(--3unit);\n}\n.v-nm-player .nm-act .icon {\n  color: var(--white);\n}\n.v-nm-player .nm-act .a-prev,\n.v-nm-player .nm-act .a-play,\n.v-nm-player .nm-act .a-next {\n  background-color: var(--theme-color);\n  border-radius: 50%;\n  padding: 6px;\n}\n.v-nm-player .nm-act .a-prev .icon-play-next {\n  transform: rotateY(180deg);\n}\n.v-nm-player .nm-act .a-play {\n  padding: 8px;\n  margin: 0 var(--3unit);\n}\n.v-nm-player .nm-act .p-play {\n  padding-left: 9px;\n  padding-right: 7px;\n}\n.v-nm-player .nm-content {\n  flex: 1;\n  margin-right: var(--3unit);\n}\n.v-nm-player .nm-content .nm-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--unit);\n  font-size: 1.2rem;\n}\n.v-nm-player .nm-content .nm-info .i-author {\n  color: var(--second-color);\n}\n.v-nm-player .nm-content .nm-progress {\n  padding: 4px 0;\n}\n.v-nm-player .nm-tools {\n  display: flex;\n  align-items: center;\n  padding-right: var(--3unit);\n}\n.v-nm-player .nm-tools .t-volume {\n  position: relative;\n  margin-left: var(--3unit);\n}\n.v-nm-player .nm-tools .t-volume .volume-wrap {\n  position: absolute;\n  top: -70px;\n  right: 0;\n  user-select: none;\n  display: flex;\n  align-items: center;\n  padding: var(--2unit);\n  background-color: var(--white);\n  border: 1px solid var(--border-color);\n}\n.v-nm-player .nm-tools .t-volume .volume-wrap .nm-progress {\n  width: 200px;\n  padding: 4px 0;\n  margin-left: var(--unit);\n}\n.v-nm-player .nm-tools .t-sheet {\n  margin-left: var(--3unit);\n  display: flex;\n  align-items: center;\n  cursor: default;\n}\n.v-nm-player .nm-tools .t-sheet .t-count {\n  padding: 2px 6px;\n  background-color: var(--second-color);\n  color: var(--white);\n  font-size: 1.2rem;\n  margin-left: 4px;\n  border-radius: 8px;\n}\n.v-nm-player .icon-refresh.loading {\n  animation: rotate-reverse 2s linear infinite;\n}\n.v-nm-player .nm-progress .p-line {\n  position: relative;\n  height: 2px;\n  border-radius: var(--border-radius);\n}\n.v-nm-player .nm-progress .layer-1 {\n  background-color: var(--bg-color);\n  width: 100%;\n  height: 100%;\n}\n.v-nm-player .nm-progress .layer-2,\n.v-nm-player .nm-progress .layer-3 {\n  transition: width 0.2s;\n  position: absolute;\n  top: 0;\n  width: 0;\n  height: 100%;\n  border-radius: var(--border-radius) 0 0 var(--border-radius);\n}\n.v-nm-player .nm-progress .layer-2 {\n  background-color: #d9d9d9;\n}\n.v-nm-player .nm-progress .layer-3 {\n  background-color: var(--theme-color);\n}\n.v-nm-player .nm-progress .p-ring {\n  position: absolute;\n  left: -8px;\n  top: -7px;\n  width: 16px;\n  height: 16px;\n  background-color: var(--white);\n  border-radius: 50%;\n  border: 1px solid var(--border-color);\n  display: flex;\n}\n.v-nm-player .nm-progress .p-ring .r-center {\n  width: 4px;\n  height: 4px;\n  background-color: var(--theme-color);\n  border-radius: 50%;\n  margin: auto;\n}\n.v-nm-player .nm-sheet {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  background-color: var(--white);\n  border: 1px solid var(--border-color);\n  border-right: none;\n}\n.v-nm-player .nm-sheet .s-head {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.4rem;\n  border-bottom: 1px solid var(--border-color);\n  padding: 0 var(--2unit) 0 calc(var(--unit) + 24px);\n}\n.v-nm-player .nm-sheet .s-head .h-act {\n  display: flex;\n  align-items: center;\n}\n.v-nm-player .nm-sheet .s-head .h-act .icon-delete {\n  margin-right: 16px;\n}\n.v-nm-player .nm-sheet .s-body {\n  overflow-y: auto;\n}\n.v-nm-player .nm-sheet .s-body .s-row {\n  height: 40px;\n  display: flex;\n  align-items: center;\n  padding: 0 var(--2unit) 0 var(--unit);\n}\n.v-nm-player .nm-sheet .s-body .s-row.focus {\n  color: var(--theme-color);\n}\n.v-nm-player .nm-sheet .s-body .s-row:nth-child(even) {\n  background-color: var(--bg-color);\n}\n.v-nm-player .nm-sheet .s-body .s-row:hover .cell-delete .icon-delete {\n  display: inline;\n}\n.v-nm-player .nm-sheet .s-body .s-cell {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.v-nm-player .nm-sheet .s-body .s-cell:nth-child(1) {\n  width: 24px;\n}\n.v-nm-player .nm-sheet .s-body .s-cell:nth-child(2) {\n  width: 200px;\n}\n.v-nm-player .nm-sheet .s-body .s-cell:nth-child(3) {\n  width: 100px;\n}\n.v-nm-player .nm-sheet .s-body .s-cell.cell-name {\n  padding-right: 8px;\n  font-size: 1.4rem;\n}\n.v-nm-player .nm-sheet .s-body .s-cell.cell-author {\n  font-size: 1.2rem;\n}\n.v-nm-player .nm-sheet .s-body .s-cell.cell-delete {\n  width: 14px;\n}\n.v-nm-player .nm-sheet .s-body .s-cell.cell-delete .icon-delete {\n  display: none;\n}\n.v-nm-player.pos-top {\n  top: 0;\n  bottom: unset;\n  border-top: none;\n  border-bottom: 1px solid var(--border-color);\n}\n.v-nm-player.pos-top .nm-tools .t-volume .volume-wrap {\n  top: 18px;\n}\n.v-nm-player.pos-top .nm-sheet {\n  bottom: unset;\n  top: 40px;\n}\n");

//
//
//
//
//

const script = {
  name: 'nmp-icon',
  props: {
    icon: String,
    size: String
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{class:("icon icon-" + _vm.icon),attrs:{"width":_vm.size || 20,"height":_vm.size || 20},on:{"click":function($event){return _vm.$emit('click')}}},[_c('use',{attrs:{"xlink:href":("#nmp-icon-" + _vm.icon)}})])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  const Icon = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//

const script$1 = {
  name: 'nmp-progress',
  data() {
    return {
      fullWidth: 0,
      startX: 0,
      dragFlag: false
    }
  },
  props: {
    played: Number,
    loaded: Number,
    decimal: Boolean,
    type: String,
    transition: Boolean,
    draggable: Boolean,
    width: Number
  },
  computed: {
    playedPercentage() {
      if (this.decimal) {
        return Math.trunc(this.played * 10000) / 100
      } else {
        return this.played * 100 | 0
      }
    },
    loadedPercentage() {
      if (this.decimal) {
        return Math.trunc(this.loaded * 10000) / 100
      } else {
        return this.loaded * 100 | 0
      }
    },
    offsetX() {
      return this.played * this.fullWidth
    }
  },
  methods: {
    clickBar(ev) {
      this.$emit('click-bar', ev.offsetX / this.fullWidth);
    },
    dragStart(ev) {
      this.startX = ev.pageX;
      this.dragFlag = true;
    },
    dragging(ev) {
      if (!this.dragFlag) return

      const deltaX = ev.pageX - this.startX;
      this.startX = ev.pageX;

      let newOffsetX = this.offsetX + deltaX;
      if (newOffsetX < 0) newOffsetX = 0;
      if (newOffsetX > this.fullWidth) newOffsetX = this.fullWidth;
      this.$emit('drag-bar', newOffsetX / this.fullWidth);
    }
  },
  mounted() {
    this.fullWidth = this.$el.offsetWidth;
    if (this.width) this.fullWidth = this.width;

    if (!this.transition) {
      this.$el.querySelector('.layer-3').style.transition = 'none';
    }

    window.addEventListener('mousemove', this.dragging);
    window.addEventListener('mouseup', ev => this.dragFlag = false);
  }
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nm-progress",on:{"click":_vm.clickBar}},[_c('div',{staticClass:"p-line"},[_c('div',{staticClass:"layer-1"}),_vm._v(" "),_c('div',{staticClass:"layer-2",style:(("width:" + _vm.loadedPercentage + "%;"))}),_vm._v(" "),_c('div',{staticClass:"layer-3",style:(("width:" + _vm.playedPercentage + "%;"))}),_vm._v(" "),(_vm.draggable)?_c('div',{staticClass:"p-ring",style:(("transform: translateX(" + _vm.offsetX + "px)")),on:{"click":function($event){$event.stopPropagation();},"mousedown":_vm.dragStart}},[_c('div',{staticClass:"r-center"})]):_vm._e()])])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  const Progress = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

function secondsToReadable(seconds) {
  seconds = Math.trunc(seconds);
  let hours = Math.trunc(seconds / 3600);
  seconds = seconds % 3600;
  let minutes = Math.trunc(seconds / 60);
  seconds = seconds % 60;

  return (hours > 0 ? [hours, minutes, seconds] : [minutes, seconds]).map(fillDateNumber).join(':')
}

//

const script$2 = {
  name: 'v-nm-player',
  data() {
    return {
      audioElem: {},
      currentAudio: {},
      currentIndex: 0,
      paused: true,
      duration: '00:00',
      playedTime: '00:00',
      playedRatio: 0,
      loadedRatio: 0,
      volume: 0,
      playModes: ['play-circle-list', 'play-circle-single', 'play-random'],
      playMode: 0,
      speakerIcon: 'speaker',
      isShowVolumeSlider: false,
      isShowSheet: false,
      canPlay: !this.audios.length
    }
  },
  props: {
    preload: Boolean,
    audios: Array,
    asyncPlay: Function,
    defaultCover: String,
    pos: String,
    unique: {
      type: String,
      'default': 'id'
    },
    sheetHeight: Number,
    defaultPlayMode: Number,
    defaultVolume: Number
  },
  computed: {
    playModeIcon() {
      return this.playModes[this.playMode]
    }
  },
  watch: {
    currentIndex: 'updateCurrentAudio'
  },
  components: {
    [Icon.name]: Icon,
    [Progress.name]: Progress
  },
  methods: {
    init() {
      const audio = this.$el.querySelector('audio');
      this.defaultVolume && (audio.volume = this.defaultVolume);

      this.audioElem = audio;
      this.volume = audio.volume;

      /* Bind audio events */
      audio.addEventListener('canplay', this.play);
      audio.addEventListener('canplaythrough', () => {
        this.loadedRatio = 1;
      });
      audio.addEventListener('durationchange', () => {
        this.duration = secondsToReadable(audio.duration);
      });
      audio.addEventListener('pause', () => this.paused = true);
      audio.addEventListener('play', () => this.paused = false);
      audio.addEventListener('ended', this.playEndHandler);
      audio.addEventListener('timeupdate', () => {
        this.playedTime = secondsToReadable(audio.currentTime);
        this.playedRatio = audio.currentTime / audio.duration;
      });
      audio.addEventListener('progress', () => {
        this.loadedRatio = audio.buffered.length ? audio.buffered.end(audio.buffered.length - 1) / audio.duration : 0;
      });
      audio.addEventListener('volumechange', () => {
        this.volume = audio.volume;
      });
    },
    async updateCurrentAudio(index) {
      const audio = this.audios[index];

      if (audio === undefined) return this.paused = true
      if (audio.url) {
        this.currentAudio = audio;
        return
      }

      if (this.asyncPlay) await this.asyncPlay(index);

      this.currentAudio = audio;
    },
    addAudio(audio) {
      const { unique } = this;
      if (audio[unique] === undefined) return

      if (this.audios.length === 0) {
        this.audios.push(Object.assign({}, audio));
        this.canPlay = false;
        this.updateCurrentAudio(0);
      }

      const index = this.audios.findIndex($audio => $audio[unique] === audio[unique]);
      if (index > -1) return

      this.audios.push(Object.assign({}, audio));
    },
    async playNewAudio(audio) {
      const {unique} = this;
      if (audio[unique] === undefined) return

      const index = this.audios.findIndex($audio => $audio[unique] === audio[unique]);
      if (index === -1) {
        this.audios.unshift(Object.assign({}, audio));
        this.playIndex(0);
        return
      }

      this.playIndex(index);
    },
    async playIndex(index) {
      if (this.currentIndex === index) {
        this.updateCurrentAudio(index);
      } else {
        this.currentIndex = index;
      }
    },
    play() {
      if (!this.canPlay) return this.canPlay = true
      if (isEmptyObject(this.currentAudio)) return

      const promise = this.audioElem.play();
      if (promise) {
        promise.catch(e => {
          if (e.name === 'NotAllowedError') this.pause();
        });
      }
    },
    pause() {
      this.audioElem.pause();
    },
    prev() {
      if (this.currentIndex === 0) {
        this.currentIndex = this.audios.length - 1;
      } else {
        this.currentIndex--;
      }
    },
    next() {
      if (this.currentIndex === this.audios.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    },
    clickAudioBar(ratio) {
      this.audioElem.currentTime = this.audioElem.duration * ratio;
    },
    clickVolumeBar(ratio) {
      this.audioElem.volume = ratio;
    },
    changePlayMode() {
      if (this.playMode === 2) return this.playMode = 0
      this.playMode++;
    },
    playEndHandler() {
      const { playMode } = this;
      if (playMode === 0) this.next();
      if (playMode === 1) this.audioElem.load();
      if (playMode === 2) {
        const random = Math.floor(Math.random() * this.audios.length);
        if (random === this.currentIndex) {
          this.next();
        } else {
          this.currentIndex = random;
        }
      }
    },
    toggleMute() {
      this.audioElem.muted = !this.audioElem.muted;
      this.speakerIcon = this.audioElem.muted ? 'speaker-mute' : 'speaker';
    },
    toggleShowVolume() {
      this.isShowSheet = false;
      this.isShowVolumeSlider = !this.isShowVolumeSlider;
    },
    toggleShowSheet() {
      this.isShowSheet = !this.isShowSheet;
      this.isShowVolumeSlider = false;
    },
    remove(i) {
      if (this.currentIndex === i) this.next();
      this.audios.splice(i, 1);
      if (this.audios.length <= 1) this.isShowSheet = false;
    },
    clearSheet() {
      this.audios.splice(0, this.audios.length);
      this.currentAudio = {};
      this.paused = true;
      this.duration = '00:00';
      this.playedTime = '00:00';
      this.playedRatio = 0;
      this.audioElem.load();
      this.isShowSheet = false;
    }
  },
  created() {
    this.defaultPlayMode && (this.playMode = this.defaultPlayMode);
  },
  mounted() {
    this.init();

    this.updateCurrentAudio(this.currentIndex);
    window.addEventListener('click', () => {
      this.isShowSheet = false;
      this.isShowVolumeSlider = false;
    });
  }
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"v-nm-player",class:("pos-" + _vm.pos)},[_c('div',{staticClass:"nm-cover",style:(("background-image: url(" + (_vm.currentAudio.cover || _vm.defaultCover) + ")"))}),_vm._v(" "),_c('div',{staticClass:"nm-act"},[_c('div',{staticClass:"a-prev",on:{"click":_vm.prev}},[_c('nmp-icon',{attrs:{"icon":"play-next","size":"16"}})],1),_vm._v(" "),(_vm.paused)?_c('div',{staticClass:"a-play p-play",on:{"click":_vm.play}},[_c('nmp-icon',{attrs:{"icon":"play","size":"16"}})],1):_c('div',{staticClass:"a-play",on:{"click":_vm.pause}},[_c('nmp-icon',{attrs:{"icon":"pause","size":"16"}})],1),_vm._v(" "),_c('div',{staticClass:"a-next",on:{"click":_vm.next}},[_c('nmp-icon',{attrs:{"icon":"play-next","size":"16"}})],1)]),_vm._v(" "),_c('div',{staticClass:"nm-content"},[_c('div',{staticClass:"nm-info"},[_c('div',{staticClass:"i-l"},[(_vm.currentAudio.name)?[_c('span',{staticClass:"i-name"},[_vm._v(_vm._s(_vm.currentAudio.name))]),_vm._v(" - "),_c('span',{staticClass:"i-author"},[_vm._v(_vm._s(_vm.currentAudio.author))])]:_vm._e()],2),_vm._v(" "),_c('div',{staticClass:"i-r"},[_c('span',{staticClass:"i-played"},[_vm._v(_vm._s(_vm.playedTime))]),_vm._v(" / "),_c('span',{staticClass:"i-length"},[_vm._v(_vm._s(_vm.duration))])])]),_vm._v(" "),_c('div',{staticClass:"nm-audio"},[_c('audio',{attrs:{"src":_vm.currentAudio.url,"preload":_vm.preload}}),_vm._v(" "),_c('nmp-progress',{attrs:{"played":_vm.playedRatio,"loaded":_vm.loadedRatio,"decimal":"","transition":""},on:{"click-bar":_vm.clickAudioBar}})],1)]),_vm._v(" "),_c('div',{staticClass:"nm-tools"},[_c('div',{staticClass:"t-play-mode"},[_c('nmp-icon',{attrs:{"icon":_vm.playModeIcon,"size":"16"},on:{"click":_vm.changePlayMode}})],1),_vm._v(" "),_c('div',{staticClass:"t-volume"},[_c('nmp-icon',{attrs:{"icon":"speaker","size":"16"},nativeOn:{"click":function($event){$event.stopPropagation();return _vm.toggleShowVolume($event)}}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowVolumeSlider),expression:"isShowVolumeSlider"}],staticClass:"volume-wrap",on:{"click":function($event){$event.stopPropagation();}}},[_c('nmp-icon',{attrs:{"icon":_vm.speakerIcon,"size":"16"},on:{"click":_vm.toggleMute}}),_vm._v(" "),_c('nmp-progress',{attrs:{"played":_vm.volume,"loaded":0,"width":200,"decimal":"","draggable":""},on:{"click-bar":_vm.clickVolumeBar,"drag-bar":_vm.clickVolumeBar}})],1)],1),_vm._v(" "),(_vm.audios.length > 1)?_c('div',{staticClass:"t-sheet",on:{"click":function($event){$event.stopPropagation();return _vm.toggleShowSheet($event)}}},[_c('nmp-icon',{attrs:{"icon":"menu-fold","size":"16"}}),_vm._v(" "),_c('span',{staticClass:"t-count"},[_vm._v(_vm._s(_vm.audios.length))])],1):_vm._e()]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowSheet),expression:"isShowSheet"}],staticClass:"nm-sheet",on:{"click":function($event){$event.stopPropagation();}}},[_c('div',{staticClass:"s-head"},[_c('span',[_vm._v("播放列表")]),_vm._v(" "),_c('div',{staticClass:"h-act"},[_c('nmp-icon',{attrs:{"icon":"delete","size":"14"},on:{"click":_vm.clearSheet}}),_vm._v(" "),_c('nmp-icon',{attrs:{"icon":"close","size":"14"},on:{"click":function($event){_vm.isShowSheet = false;}}})],1)]),_vm._v(" "),_c('div',{staticClass:"s-body",style:(("max-height: " + _vm.sheetHeight + "px"))},_vm._l((_vm.audios),function(audio,i){return _c('div',{staticClass:"s-row",class:{focus: _vm.currentIndex === i},on:{"dblclick":function($event){_vm.currentIndex = i;}}},[_c('div',{staticClass:"s-cell"},[(_vm.currentIndex === i)?_c('nmp-icon',{attrs:{"icon":"play","size":"14"}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"s-cell cell-name"},[_c('span',[_vm._v(_vm._s(audio.name))])]),_vm._v(" "),_c('div',{staticClass:"s-cell cell-author"},[_vm._v(_vm._s(audio.author))]),_vm._v(" "),_c('div',{staticClass:"s-cell cell-delete"},[_c('nmp-icon',{attrs:{"icon":"delete","size":"14"},on:{"click":function($event){return _vm.remove(i)}}})],1)])}),0)])])};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  const App = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

const install = function (Vue) {
  if (!Vue || install.installed) return

  Vue.component(App.name, App);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const index = { install };

export default index;
