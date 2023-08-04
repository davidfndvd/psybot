const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { OpenAIApi } = require('openai');

// Set your OpenAI API key
const openai = new OpenAIApi({
  key: 'YOUR_OPENAI_API_KEY'
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/get-response', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await openai.complete({
      prompt: `Paciente: ${userMessage}\nTerapeuta:`,
      max_tokens: 50
    });

    const therapistResponse = response.choices[0].text.trim();
    res.json({ response: therapistResponse });
  } catch (error) {
    console.error('Erro ao gerar resposta:', error);
    res.status(500).json({ error: 'Erro ao gerar resposta' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
