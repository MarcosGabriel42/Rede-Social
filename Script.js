document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('postForm');
    const postText = document.getElementById('postText');
    const feed = document.getElementById('feed');
    const charCount = document.getElementById('charCount');

    // Atualiza o contador de caracteres ao digitar
    postText.addEventListener('input', () => {
        const currentLength = postText.value.length;
        charCount.textContent = `${currentLength}/280`;
    });

    // Manipula o envio do formulário e exibe a publicação no feed
    postForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const text = postText.value.trim(); // Remove espaços em branco

        // Verifica se o texto não está vazio
        if (text === '') {
            alert('Por favor, insira algum texto para tweetar.');
            return;
        }

        // Cria um novo elemento de postagem
        const post = document.createElement('div');
        post.classList.add('post');

        const postTextElement = document.createElement('p');
        postTextElement.classList.add('post-text');
        postTextElement.textContent = text;
        
        // Adiciona o texto ao post
        post.appendChild(postTextElement);

        // Adiciona a nova postagem ao feed
        feed.prepend(post); // Adiciona no topo do feed

        // Limpa o formulário após enviar
        postForm.reset();
        charCount.textContent = '0/280'; // Reseta o contador de caracteres
    });
});
