/* GourmetEats - busca de receitas (página receitas.html)
 * Filtra os cards enquanto a pessoa digita, pelo nome ou pela categoria.
 */
(function () {
  var grade = document.querySelector('.grid');
  if (!grade) return;

  // Tira acentos e maiúsculas: "Pão" encontra "pao"
  function limpar(t) {
    return t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  var itens = Array.prototype.map.call(grade.querySelectorAll('.card'), function (card) {
    var nome = card.querySelector('h3');
    var cat = card.querySelector('.cat');
    return {
      el: card,
      texto: limpar((nome ? nome.textContent : '') + ' ' + (cat ? cat.textContent : ''))
    };
  });

  // Monta o campo de busca acima da lista
  var caixa = document.createElement('div');
  caixa.className = 'busca noprint';
  caixa.setAttribute('role', 'search');
  caixa.innerHTML =
    '<label class="sr" for="busca-campo">Buscar receitas</label>' +
    '<input type="search" id="busca-campo" placeholder="Buscar receita ou categoria (ex.: frango, doce)" autocomplete="off">' +
    '<p class="busca-info" role="status"></p>' +
    '<p class="busca-vazio" hidden>Nenhuma receita encontrada. Tente outra palavra, como "frango" ou "doce".</p>';
  grade.parentNode.insertBefore(caixa, grade);

  var campo = caixa.querySelector('input');
  var info = caixa.querySelector('.busca-info');
  var vazio = caixa.querySelector('.busca-vazio');

  function filtrar() {
    var palavras = limpar(campo.value).split(/\s+/).filter(Boolean);
    var visiveis = 0;

    itens.forEach(function (item) {
      var combina = palavras.every(function (p) { return item.texto.indexOf(p) !== -1; });
      item.el.hidden = !combina;
      if (combina) visiveis++;
    });

    var total = itens.length;
    info.textContent = palavras.length
      ? visiveis + ' de ' + total + ' receitas'
      : total + ' receitas';
    vazio.hidden = visiveis !== 0;
  }

  campo.addEventListener('input', filtrar);
  campo.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { campo.value = ''; filtrar(); }
  });
  filtrar();
})();