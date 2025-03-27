function connectToDB() {
    return new Promise((resolve, reject) => {
      const dbUp = true;
      setTimeout(() => {
        if(dbUp) resolve('DB connection is successful...');
        else reject('ERROR: DB is down...')
      }, 3000);
    });
  }
  function getData() {
    return new Promise((resolve, reject) => {
      const dataAvailable = true;
      setTimeout(() => {
        if(dataAvailable) resolve('DB data is here...');
        else reject('ERROR: DB data not found...');
      }, 1500);
    });
  }
  function useData() {
    return new Promise((resolve, reject) => {
      const usingData = true;
      setTimeout(() => {
        if(usingData) resolve('Data is used...');
        else reject('ERROR: Data is not used...');
      }, 500);
    });
  }


console . log('eh')


async function test3() {
    await connectToDB();
    await getData();
    await useData();
}

test3()