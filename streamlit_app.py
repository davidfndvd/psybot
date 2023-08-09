from key import API_KEY
import requests
def chat_com_freud():
    headers = {"Authorization": f"Bearer {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}", "Content-Type": "application/json"}
    link = "https://api.openai.com/v1/chat/completions"
    id_modelo = "gpt-3.5-turbo"
    # Prompt inicial de Freud
    freud_prompt = "Olá, sou o Dr. Sigmund Freud. Posso ajudá-lo com suas questões sobre a mente e o comportamento humano."
    print(freud_prompt)
    while True:
        # Obter a pergunta do usuário
        pergunta = input("Você: ")
        # Verificar se o usuário deseja sair do chat
        if pergunta.lower() in ["sair", "adeus", "parar", "tchau"]:
            print("Chat encerrado.")
            break
        # Montar as mensagens para enviar para a API
        body_mensagem = {
            "model": id_modelo,
            "messages": [
                {"role": "user", "content": pergunta},
                {"role": "assistant", "content": freud_prompt}
            ]
        }
        # Enviar a pergunta para a API da OpenAI
        resposta = requests.post(link, headers=headers, json=body_mensagem).json()
        mensagem_resposta = resposta["choices"][0]["message"]["content"]
        # Exibir a resposta de Freud
        print("Freud:", mensagem_resposta)
if _name_ == "_main_":
    chat_com_freud()
