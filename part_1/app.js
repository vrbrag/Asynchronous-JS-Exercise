let base_url = "http://numbersapi.com"
let favNum = 12

// 1.
async function favoriteNumber() {
   let res = await axios.get(`${base_url}/${favNum}?json`)
   console.log(res)
}

// 2.
const nums = [1, 2, 3, 4]
async function multNums() {
   let res = await axios.get(`${base_url}/${nums}?json`)
   console.log(res)
}
multNums(nums)

// 3.
async function fourNumbers() {
   let facts = await Promise.all(
      Array.from({ length: 4 }, () => axios.get(`${base_url}/${favNum}?json`))
   )
   facts.forEach(data => {
      console.log(data.data.text)
   })
}

