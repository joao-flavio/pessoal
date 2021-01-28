// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const tempo = new Date();
  const hora = tempo.getHours();
  const minuto = tempo.getMinutes();
  const segundo = tempo.getSeconds();
  res.json({
    hora: `${hora}:${minuto}:${segundo}`
  });
}
