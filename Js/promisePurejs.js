//promise all reace,看之前的代码了了解我之前的思维并修改
const PENDING = "PENDING";
const FULFILLED = "FULFILLED";
const REJECTED = "REJECTED";

class _Promise {
  constructor(fn) {
    this.status = PENDING;
    this.reason = undefined;
    this.value = undefined;
    this.resolveArr = [];
    this.rejectArr = [];
    //resolve function
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILLED;

        setTimeout(() => {
          console.log(this.resolveArr);
          this.resolveArr.forEach((i) => i(this.value));
        });
      }
    };
    //reject function
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;

        setTimeout(() => {
          this.rejectArr.forEach((i) => i(this.reason));
        });
      }
    };
    try {
      fn(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(fnResolve, fnReject) {
    //then值传递
    fnResolve = typeof fnResolve === "function" ? fnResolve : (value) => value;
    //catch链式错误传递
    fnReject =
      typeof fnReject === "function"
        ? fnReject
        : (reason) => {
            throw reason;
          };
    //继续写 pending和reject的改变状态，分为promise和非promise
    return new _Promise((resolve, reject) => {
      //封装函数
      const callback = (fn, status) => {
        try {
          //result is the return value for callback function
          let result = fn(this[status]);
          //promise if then return a promise

          if (result instanceof _Promise) {
            result.then(
              (res) => resolve(res),
              (res) => reject(res)
            );
          } else {
            //change the status to fulfilled of the promise.then
            resolve(result);
          }
        } catch (e) {
          reject(e);
        }
      };
      if (this.status === FULFILLED) {
        setTimeout(() => {
          callback(fnResolve, "value");
        });
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          callback(fnReject, "reason");
        });
      }
      if (this.status === PENDING) {
        setTimeout(() => {
          this.resolveArr.push(() => {
            callback(fnResolve, "value");
          });

          this.rejectArr.push(() => {
            callback(fnResolve, "reason");
          });
        });
      }
    });
  }
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally() {}
  static resolve = (value) => {
    return new _Promise((resolve, reject) => {
      value =
        value instanceof _Promise
          ? value.then(
              (res) => resolve(res),
              (res) => reject(res)
            )
          : value;
      resolve(value);
    });
  };
  static reject = (reason) => {
    return new _Promise((resolve, reject) => {
      reject(reason);
    });
  };
  static all = function (promiseArr) {
    //promise all async questions
    return new _Promise((resolve, reject) => {
      let resolveValue = [];
      let count = 0;
      for (let i = 0; i < promiseArr.length; i++) {
        if (promiseArr[i] instanceof _Promise) {
          promiseArr[i].then(
            (res) => {
              count++;
              resolveValue[i] = res;
            },
            (res) => {
              reject(res);
            }
          );
        } else {
          //if not promise return the
          resolveValue[i] = promiseArr[i];
          count++;
        }
        ß;
        if (count === promiseArr.length - 1) {
          resolve(resolveValue);
        }
      }
    });
  };
  static race = (promiseArr) => {
    return new _Promise((resolve, reject) => {
      for (let i = 0; i < promiseArr.length; i++) {
        //console.log(promiseArr[i]);
        promiseArr[i].then(
          (res) => {
            resolve(res);
          },
          (res) => {
            reject(res);
          }
        );
      }
    });
  };
}
