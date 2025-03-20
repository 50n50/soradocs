document.addEventListener("DOMContentLoaded", function() {
    // Get all code blocks
    const codeBlocks = document.querySelectorAll('div.highlight pre');

    codeBlocks.forEach((block) => {
        const button = document.createElement('button');
        button.innerText = 'Copy';
        button.classList.add('copy-button');
        block.parentNode.insertBefore(button, block);

        button.addEventListener('click', () => {
            const text = block.innerText;
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            button.innerText = 'Copied!';
            setTimeout(() => button.innerText = 'Copy', 1000);
        });
    });
});
