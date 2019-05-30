export function getUserFromLS() {
  const user = localStorage.getItem('hobbyCraft-user')
  return JSON.parse(user);
}

export function setUserToLS(user) {
  localStorage.setItem('hobbyCraft-user', JSON.stringify(user))
  return;
}

export function changeUserAmountInLS(amount) {
  const user = JSON.parse(localStorage.getItem('hobbyCraft-user'))
  user.budget = user.budget - amount;
  localStorage.setItem('hobbyCraft-user', JSON.stringify(user))
  return;
}

export function removeUserFromLS() {
  localStorage.removeItem('hobbyCraft-user')
  return;
}

export function updateUserAmountInLs(amount) {
  const user = JSON.parse(localStorage.getItem('hobbyCraft-user'))
  user.budget = amount;
  localStorage.setItem('hobbyCraft-user', JSON.stringify(user))
  return;
}
