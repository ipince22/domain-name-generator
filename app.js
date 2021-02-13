let pronoun = ['the', 'our', "his", "my", "your", "her",]
let adj = ["ugliest", "victorious", "vivacious", "wandering",]
let noun = ["Sandwich","Juice","Caravan","Kangaroo","King","Shampoo",]
let end = [".COM",".cat",".net",".coop",".edu",".gov",".name",".tel",]

const container = document.getElementById('container')

const createUrls = (arr1, arr2, arr3, arr4) => {
	let urlArray = [];
	arr1.forEach((num1) => {
		arr2.forEach((num2) => {
			arr3.forEach((num3) => {
				arr4.forEach((num4) => {
					const str = (num1 + num2 + num3 + num4).toLowerCase()
					urlArray.push(str)
				})
			})
		})
	})
	return urlArray
}

const arrayOfURL = createUrls(pronoun, adj, noun, end)

arrayOfURL.forEach((url) => {
	const p = document.createElement("p")
	p.textContent = url
	container.appendChild(p)
})
