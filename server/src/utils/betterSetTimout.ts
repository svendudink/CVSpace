export const betterSetTimeOut = (time: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, time);
  });
};
