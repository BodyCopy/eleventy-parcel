export class ObserverOptions {
    constructor(root, threshold, rootMargin) {
      this.root = root,
        this.threshold = threshold,
        this.rootMargin = rootMargin
    }
  }
  
  function createObserver(element, run, options) {
    let observer = new IntersectionObserver(run, options);
    observer.observe(element);
  }
  
  export const createObserverWithCallback = (element, callback, options) => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((e) => {
        callback(e, observer);
      })
    }, options);
    observer.observe(element);
  }