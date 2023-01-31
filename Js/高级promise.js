const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class _Promise {
  constructor(exector) {
    this.status = PENDING;

    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledCallbacks = [];

    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      console.log(value);
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn(this.value));
      }
    };
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn(this.reason));
      }
    };
    try {
      exector(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw new Error(reason instanceof Error ? reason.message : reason);
          };

    const self = this;

    return new Promise((resolve, reject) => {
      if (self.status === PENDING) {
        console.log("pending");
        self.onFulfilledCallbacks.push(() => {
          try {
            setTimeout(() => {
              const result = onFulfilled(self.value);

              result instanceof Promise
                ? result.then(resolve, reject)
                : resolve(result);
            });
          } catch (e) {
            reject(e);
          }
        });
        self.onRejectedCallbacks.push(() => {
          try {
            setTimeout(() => {
              const result = onRejected(self.reason);
              result instanceof Promise
                ? result.then(resolve, reject)
                : resolve(result);
            });
          } catch (e) {
            reject(e);
          }
        });
      } else if (self.status === FULFILLED) {
        console.log("------fulfilled-----");
        try {
          setTimeout(() => {
            //为什么在then里传resolve and reject
            console.log(resolve);
            console.log(reject);
            const result = onFulfilled(self.value);
            result instanceof Promise
              ? //this function is promise
                result.then(resolve, reject)
              : //this function is not a promise
                resolve(result);
          });
        } catch (e) {
          reject(e);
        }
      } else if (self.status === REJECTED) {
        console.log("rejected");
        try {
          setTimeout(() => {
            console.log(self.reason);
            //if the then rejectfn not a function will run here
            const result = onRejected(self.reason);
            if (result instanceof Promise) {
              //promise
              console.log(result);
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          });
        } catch (e) {
          reject(e);
        }
      }
    });
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  static resolve(value) {
    if (value instanceof Promise) {
      return value;
    } else {
      return new Promise((resolve, reject) => resolve(value));
    }
  }
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }
  static all(promiseArr) {
    const len = promiseArr.length;
    const values = new Array(len);

    let count = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < len; i++) {
        Promise.resolve(promiseArr[i]).then(
          (val) => {
            values[i] = val;
            count++;

            if (count === len) resolve(values);
          },
          (err) => reject(err)
        );
      }
    });
  }
  static race(promiseArr) {
    return new Promise((resolve, reject) => {
      promiseArr.forEach((p) => {
        Promise.resolve(p).then(
          (val) => resolve(val),
          (err) => reject(err)
        );
      });
    });
  }
}
