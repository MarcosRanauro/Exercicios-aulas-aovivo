const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
    { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
  ];
  
  const filterNoDriver = (users) => {
    const drivers = users.filter((user) => user.isDriver === false);
    drivers.forEach((driver) => driver.fullName = `${driver.firstName} ${driver.lastName}`);
    return drivers;
  }
  
  console.log(filterNoDriver(users));
  console.log(users);
  