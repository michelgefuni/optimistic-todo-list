const saveRequest = name => {
  console.log('saving data: ', name);

  return new Promise((resolve, reject) => {
    const id = parseInt(
      Math.random()
        .toString(8)
        .substr(2, 9),
      10
    );

    const dataWithId = { name, id };

    if (id % 2 === 0) {
      console.log('resolve', id, name);
      setTimeout(() => resolve(dataWithId), 500);
    } else {
      console.log('reject', id, name);
      setTimeout(reject, 500);
    }
  });
};

export default saveRequest;
