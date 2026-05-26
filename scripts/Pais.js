function mostrarAba(aba, botao) {

    [ 'copa', 'cultura'].forEach(id => {
        const el = document.getElementById(id);
        el.classList.add('esconder');
        el.style.display = 'none';
    });

    const alvo = document.getElementById(aba);
    alvo.classList.remove('esconder');
    alvo.style.display = 'block';

    document.querySelectorAll('.menuP button').forEach(btn => {
        btn.classList.remove('ativo');
    });

    botao.classList.add('ativo');
}
