


export const slugify = slug => {
  // params.slug >> ring-of-power
  // show.name >> Ring Of Power
  const slugArray = slug.split(" ") // [Ring, of, Power]
  const newSlugArray = slugArray.map(word => word[0].toLowerCase() + word.split("").slice(1, word.length).join("")); // [ring, of, power]
  return newSlugArray.join("-") // "ring-of-power"
}