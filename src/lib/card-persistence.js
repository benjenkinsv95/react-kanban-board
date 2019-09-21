export const saveCards = (name, newCards) => {
    localStorage.setItem(name, JSON.stringify({cards: newCards}))
}