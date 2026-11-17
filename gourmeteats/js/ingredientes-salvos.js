/* GourmetEats - ingredientes salvos
 * Lembra quais ingredientes foram marcados em cada receita (localStorage)
 * e cria um botão "Limpar marcações".
 */
(function () {
  var lista = document.querySelector('.ing');
  if (!lista) return;

  var KEY = 'gourmeteats-ingredientes:' + location.pathname;
  var caixas = lista.querySelectorAll('input[type="checkbox"]');

  function ler() {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; }
  }

  function gravar() {
    var marcados = [];
    caixas.forEach(function (c, i) { if (c.checked) marcados.push(i); });
    try {
      if (marcados.length) localStorage.setItem(KEY, JSON.stringify(marcados));
      else localStorage.removeItem(KEY);
    } catch (e) { /* sem localStorage: segue sem salvar */ }
  }

  // Restaura o que estava marcado
  ler().forEach(function (i) { if (caixas[i]) caixas[i].checked = true; });
  caixas.forEach(function (c) { c.addEventListener('change', gravar); });

  // Barra de botões acima da lista (compartilhada com o botão de copiar)
  var barra = document.querySelector('.ing-acoes');
  if (!barra) {
    barra = document.createElement('div');
    barra.className = 'ing-acoes noprint';
    lista.parentNode.insertBefore(barra, lista);
  }

  var limpar = document.createElement('button');
  limpar.type = 'button';
  limpar.className = 'btn-sec';
  limpar.textContent = 'Limpar marcações';
  limpar.addEventListener('click', function () {
    caixas.forEach(function (c) { c.checked = false; });
    gravar();
  });
  // fica antes do aviso "Lista copiada!", se ele existir
  barra.insertBefore(limpar, barra.querySelector('.ing-aviso'));
})();