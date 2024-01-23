module.exports = fullName => {
  const [firstName, lastName] = fullName.split(' ');
  if (!firstName || !lastName) return 'Error';

  const nameParts = fullName.split(' ');
  if (nameParts.length !== 2) {
    return 'Error';
  }
  const formattedFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const formattedLastName =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return formattedFirstName + ' ' + formattedLastName;
};
