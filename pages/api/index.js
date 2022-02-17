module.exports = (req, res) => {
  console.log(
    "nextjs will never log this line with OPTIONS and an Origin header"
  )
  res.end("hit")
}
