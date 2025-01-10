import fs from 'fs';

fs.readFile('faturamentoMensal.json', (err, data) => {
  if (err) {
    console.log('Erro ao ler arquivo');
    throw err;
  }

  try {
    const earnings = JSON.parse(data);

    const validEarnings = earnings.filter(earning => earning > 0);
    const totalEarnings = validEarnings.reduce((acc, earning) => acc + earning, 0);
    const media = totalEarnings / validEarnings.length;
    console.log(`Média de faturamento: R$ ${media.toFixed(2)}`);
  } catch (error) {
    console.log('Erro ao fazer parse do arquivo');
    throw error;
  }
});