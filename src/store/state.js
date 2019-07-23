let defautCity = "北京"
try {
  if (localStorage.city) {
    defautCity = localStorage.city
  }
} catch (e) {
}
export  default {
  city:defautCity
}
