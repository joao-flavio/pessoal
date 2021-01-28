// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const horario = Date.now();
  res.json({
    data: horario
  })
}
