export const isServer = !process.browser;

export const isObject = <T>(obj: T): boolean =>
  obj && typeof obj === 'object' && !Array.isArray(obj);

export const ensureArray = <T>(data: T): T | [] =>
  Array.isArray(data) ? data : [];

export const ensureObject = <T, P>(
  obj: T,
  defaultValue?: P,
): { [X in keyof T]?: any } | undefined =>
  isObject(obj) ? obj : isObject(defaultValue) ? defaultValue : {};

export const ensureObject2 = <T, P>(
  obj: T,
  defaultValue?: P,
): { [P in keyof T]?: any } | undefined =>
  isObject(obj) ? obj : isObject(defaultValue) ? defaultValue : {};

function toVal(mix: any) {
  let k;
  let y;
  let str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          y = toVal(mix[k]);
          if (y) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

export const clsx = (...args: any[]): string => {
  let i = 0;
  let tmp;
  let x;
  let str = '';

  while (i < args.length) {
    tmp = args[i++];
    if (tmp) {
      x = toVal(tmp);
      if (x) {
        str && (str += ' ');
        str += x;
      }
    }
  }

  return str;
};
