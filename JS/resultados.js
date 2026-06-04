/* ============================================================
   resultados.js — Lógica da página de resultados de busca
   Resolve Aí
   ============================================================ */

// ── Base de dados de prestadores ──────────────────────────────────────────
const allProfessionals = [
  { photo: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=200&h=200&fit=crop&crop=faces', name: 'Carlos Silva',      role: 'Eletricista',           rating: 4.9, reviews: 128, hires: 94,  location: 'São Paulo, SP',       city: 'são paulo',      state: 'sp', tags: ['Residencial','Comercial','CREA'],          priceBase: 180 },
  { photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&h=200&fit=crop&crop=faces', name: 'Roberto Alves',     role: 'Encanador',             rating: 4.8, reviews:  95, hires: 72,  location: 'Rio de Janeiro, RJ', city: 'rio de janeiro', state: 'rj', tags: ['Hidráulica','Reformas'],                   priceBase: 160 },
  { photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=faces', name: 'Fernanda Costa',    role: 'Personal Trainer',      rating: 5.0, reviews: 210, hires: 180, location: 'Belo Horizonte, MG', city: 'belo horizonte', state: 'mg', tags: ['Musculação','Funcional','CREF'],           priceBase: 120 },
  { photo: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=200&fit=crop&crop=faces', name: 'João Pereira',      role: 'Pedreiro / Construtor', rating: 4.7, reviews:  67, hires: 51,  location: 'Curitiba, PR',       city: 'curitiba',       state: 'pr', tags: ['Alvenaria','Reboco','Reformas'],           priceBase: 200 },
  { photo: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=200&h=200&fit=crop&crop=faces', name: 'Ana Rodrigues',     role: 'Pintora',               rating: 4.9, reviews:  84, hires: 66,  location: 'Porto Alegre, RS',   city: 'porto alegre',   state: 'rs', tags: ['Residencial','Textura','Papel-parede'],  priceBase: 140 },
  { photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=faces', name: 'Dra. Paula Lima',    role: 'Fisioterapeuta',        rating: 5.0, reviews: 173, hires: 140, location: 'São Paulo, SP',       city: 'são paulo',      state: 'sp', tags: ['CREFITO','Ortopedia','Domiciliar'],       priceBase: 250 },
  { photo: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=200&h=200&fit=crop&crop=faces', name: 'Marcos Souza',      role: 'Veterinário',           rating: 4.8, reviews: 112, hires: 88,  location: 'Salvador, BA',        city: 'salvador',       state: 'ba', tags: ['CRMV','Pets','Domiciliar'],               priceBase: 200 },
  { photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces', name: 'Lúcia Ferreira',    role: 'Professora Particular', rating: 4.9, reviews: 201, hires: 165, location: 'Fortaleza, CE',      city: 'fortaleza',      state: 'ce', tags: ['Exatas','Vestibular','Online'],           priceBase: 90  },
  { photo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop&crop=faces', name: 'Chef Tiago Melo',   role: 'Chef de Cozinha',       rating: 4.7, reviews:  58, hires: 44,  location: 'Recife, PE',         city: 'recife',         state: 'pe', tags: ['Eventos','Italiana','Domiciliar'],        priceBase: 350 },
  { photo: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&h=200&fit=crop&crop=faces', name: 'Bruna Andrade',     role: 'Cabeleireira',          rating: 4.8, reviews: 147, hires: 120, location: 'São Paulo, SP',       city: 'são paulo',      state: 'sp', tags: ['Coloração','Corte','Tratamentos'],        priceBase: 110 },
  { photo: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=200&h=200&fit=crop&crop=faces', name: 'Diego Nascimento',  role: 'Marceneiro',            rating: 4.9, reviews:  76, hires: 58,  location: 'Campinas, SP',       city: 'campinas',       state: 'sp', tags: ['Móveis planejados','Reparos'],            priceBase: 280 },
  { photo: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=200&h=200&fit=crop&crop=faces', name: 'Camila Torres',     role: 'Fotógrafa',             rating: 5.0, reviews: 234, hires: 198, location: 'Rio de Janeiro, RJ', city: 'rio de janeiro', state: 'rj', tags: ['Casamentos','Eventos','Book'],            priceBase: 400 },
  { photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop&crop=faces', name: 'Dr. Rafael Borges', role: 'Médico Clínico Geral',  rating: 4.9, reviews:  89, hires: 70,  location: 'Anápolis, GO',       city: 'anápolis',       state: 'go', tags: ['CRM','Domiciliar','Telemedicina'],        priceBase: 300 },
  { photo: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=200&h=200&fit=crop&crop=faces', name: 'Thiago Mendonça',   role: 'Eletricista',           rating: 4.8, reviews:  61, hires: 47,  location: 'Anápolis, GO',       city: 'anápolis',       state: 'go', tags: ['Residencial','Industrial','CREA'],        priceBase: 150 },
  { photo: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop&crop=faces', name: 'Patrícia Vieira',   role: 'Nutricionista',         rating: 5.0, reviews: 143, hires: 118, location: 'Anápolis, GO',       city: 'anápolis',       state: 'go', tags: ['CRN','Emagrecimento','Online'],           priceBase: 180 },
  { photo: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop&crop=faces', name: 'Lucas Oliveira',    role: 'Encanador',             rating: 4.7, reviews:  48, hires: 36,  location: 'Goiânia, GO',        city: 'goiânia',        state: 'go', tags: ['Hidráulica','Reformas','Emergência'],     priceBase: 130 },
  { photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces', name: 'Mariana Castro',    role: 'Psicóloga',             rating: 5.0, reviews: 197, hires: 160, location: 'Goiânia, GO',        city: 'goiânia',        state: 'go', tags: ['CRP','Ansiedade','Online'],               priceBase: 220 },
  { photo: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=200&h=200&fit=crop&crop=faces', name: 'Eduardo Faria',     role: 'Pedreiro / Construtor', rating: 4.6, reviews:  53, hires: 39,  location: 'Goiânia, GO',        city: 'goiânia',        state: 'go', tags: ['Reformas','Alvenaria','Pintura'],         priceBase: 170 },
  { photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces', name: 'Felipe Ramos',      role: 'Eletricista',           rating: 4.7, reviews:  55, hires: 41,  location: 'Goiânia, GO',        city: 'goiânia',        state: 'go', tags: ['Residencial','Comercial'],               priceBase: 140 },
  { photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces', name: 'Rodrigo Lima',      role: 'Pedreiro / Construtor', rating: 4.8, reviews:  78, hires: 60,  location: 'Anápolis, GO',       city: 'anápolis',       state: 'go', tags: ['Reformas','Estrutural'],                 priceBase: 210 },
  { photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces', name: 'Juliana Nunes',     role: 'Personal Trainer',      rating: 4.9, reviews: 134, hires: 108, location: 'São Paulo, SP',       city: 'são paulo',      state: 'sp', tags: ['HIIT','Funcional','Domiciliar'],          priceBase: 130 },
  { photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces', name: 'Henrique Barros',   role: 'Pintor',                rating: 4.6, reviews:  42, hires: 31,  location: 'Goiânia, GO',        city: 'goiânia',        state: 'go', tags: ['Residencial','Epóxi'],                   priceBase: 120 },
  { photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces', name: 'Beatriz Monteiro',  role: 'Fisioterapeuta',        rating: 4.8, reviews:  90, hires: 72,  location: 'Brasília, DF',       city: 'brasília',       state: 'df', tags: ['Neurológica','CREFITO','Clínica'],        priceBase: 230 },
  { photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop&crop=faces', name: 'Igor Santana',      role: 'Encanador',             rating: 4.9, reviews:  66, hires: 50,  location: 'Salvador, BA',        city: 'salvador',       state: 'ba', tags: ['Hidráulica','Aquecedor','Emergência'],   priceBase: 145 },
];

// ── Mapeamento de termos de busca → roles ──────────────────────────────────
const searchMap = {
  'eletricista':    ['eletricista'],
  'encanador':      ['encanador'],
  'personal':       ['personal trainer'],
  'personal trainer':['personal trainer'],
  'pedreiro':       ['pedreiro', 'construtor'],
  'construtor':     ['pedreiro', 'construtor'],
  'pintor':         ['pintor','pintora'],
  'fisioterapeuta': ['fisioterapeuta'],
  'veterinário':    ['veterinário'],
  'nutricionista':  ['nutricionista'],
  'psicólogo':      ['psicóloga','psicólogo'],
  'psicóloga':      ['psicóloga','psicólogo'],
  'chef':           ['chef de cozinha'],
  'cozinheiro':     ['chef de cozinha'],
  'fotógrafo':      ['fotógrafa','fotógrafo'],
  'fotógrafa':      ['fotógrafa','fotógrafo'],
  'professor':      ['professora particular','professor particular'],
  'professora':     ['professora particular','professor particular'],
  'cabeleireiro':   ['cabeleireira','cabeleireiro'],
  'cabeleireira':   ['cabeleireira','cabeleireiro'],
  'marceneiro':     ['marceneiro'],
  'médico':         ['médico clínico geral'],
  'casa & reforma': ['eletricista','encanador','pedreiro','construtor','pintor','pintora','marceneiro'],
  'saúde':          ['fisioterapeuta','médico clínico geral','nutricionista','psicóloga','psicólogo','veterinário'],
  'tecnologia':     ['professor particular','professora particular'],
  'beleza':         ['cabeleireira','cabeleireiro'],
  'educação & aulas':['professora particular','professor particular'],
  'eventos':        ['chef de cozinha','fotógrafa','fotógrafo'],
  'pets':           ['veterinário'],
};

// ── Estado global ──────────────────────────────────────────────────────────
let currentQuery     = '';
let currentSort      = 'rating';
let currentMinRating = 0;
let currentPriceRange = 'all';
let filteredPros     = [];

// Verifica se usuário é assinante (simulado)
function isSubscriber() {
  try {
    const user = JSON.parse(sessionStorage.getItem('resolveai_user') || '{}');
    return !!user.subscriber;
  } catch { return false; }
}

// ── Lógica de busca ────────────────────────────────────────────────────────
function searchProfessionals(query) {
  const q = query.toLowerCase().trim();
  const keywords = searchMap[q];
  if (keywords) {
    return allProfessionals.filter(p =>
      keywords.some(kw => p.role.toLowerCase().includes(kw))
    );
  }
  return allProfessionals.filter(p =>
    p.role.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q)) ||
    q.split(' ').some(word => word.length > 2 && p.role.toLowerCase().includes(word))
  );
}

function applyFilters() {
  const sortEl = document.querySelector('input[name="sort"]:checked');
  if (sortEl) currentSort = sortEl.value;

  const ratingEl = document.querySelector('input[name="minRating"]:checked');
  if (ratingEl) currentMinRating = parseFloat(ratingEl.value);

  const priceEl = document.querySelector('input[name="priceRange"]:checked');
  if (priceEl) currentPriceRange = priceEl.value;

  let list = [...filteredPros];

  if (currentMinRating > 0) {
    list = list.filter(p => p.rating >= currentMinRating);
  }

  if (currentPriceRange === 'low')  list = list.filter(p => p.priceBase <= 150);
  if (currentPriceRange === 'mid')  list = list.filter(p => p.priceBase > 150 && p.priceBase <= 300);
  if (currentPriceRange === 'high') list = list.filter(p => p.priceBase > 300);

  if (currentSort === 'rating')     list.sort((a,b) => b.rating - a.rating);
  if (currentSort === 'price_asc')  list.sort((a,b) => a.priceBase - b.priceBase);
  if (currentSort === 'price_desc') list.sort((a,b) => b.priceBase - a.priceBase);
  if (currentSort === 'hires')      list.sort((a,b) => b.hires - a.hires);

  renderResults(list);
  updateSortChips();
}

function clearFilters() {
  document.querySelectorAll('input[name="sort"]')[0].checked = true;
  document.querySelectorAll('input[name="minRating"]')[0].checked = true;
  document.querySelectorAll('input[name="priceRange"]')[0].checked = true;
  currentSort = 'rating';
  currentMinRating = 0;
  currentPriceRange = 'all';
  applyFilters();
}

function setSort(sort) {
  currentSort = sort;
  const radio = document.querySelector(`input[name="sort"][value="${sort}"]`);
  if (radio) radio.checked = true;
  applyFilters();
}

function updateSortChips() {
  document.querySelectorAll('.sort-chip').forEach(c => {
    c.classList.toggle('active', c.onclick?.toString().includes(`'${currentSort}'`));
  });
}

// ── Renderização ──────────────────────────────────────────────────────────
function getLevelBadge(p) {
  if (p.rating >= 4.9 && p.hires >= 80)  return { cls: 'level-top',   label: '🏆 Top' };
  if (p.rating >= 4.7 && p.hires >= 40)  return { cls: 'level-mid',   label: '✅ Verificado' };
  return { cls: 'level-basic', label: '🆕 Novo' };
}

function getGroupLabel(list, sort) {
  if (sort === 'rating') {
    return [
      { label: '🏆 Melhores avaliações', filter: p => p.rating >= 4.9 },
      { label: '✅ Muito bem avaliados',  filter: p => p.rating >= 4.7 && p.rating < 4.9 },
      { label: '👍 Bem avaliados',        filter: p => p.rating < 4.7 },
    ];
  }
  if (sort === 'hires') {
    return [
      { label: '🔥 Mais contratados',    filter: p => p.hires >= 80 },
      { label: '📈 Em crescimento',       filter: p => p.hires >= 40 && p.hires < 80 },
      { label: '🆕 Recém chegados',       filter: p => p.hires < 40 },
    ];
  }
  if (sort === 'price_asc') {
    return [
      { label: '💰 Melhor custo-benefício', filter: p => p.priceBase <= 150 },
      { label: '💳 Preço médio',             filter: p => p.priceBase > 150 && p.priceBase <= 300 },
      { label: '💎 Premium',                 filter: p => p.priceBase > 300 },
    ];
  }
  return [
    { label: '💎 Premium',              filter: p => p.priceBase > 300 },
    { label: '💳 Preço médio',          filter: p => p.priceBase > 150 && p.priceBase <= 300 },
    { label: '💰 Acessível',            filter: p => p.priceBase <= 150 },
  ];
}

function renderCard(p) {
  const subscriber = isSubscriber();
  const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
  const badge = getLevelBadge(p);
  const tagsHTML = p.tags.map(t => `<span class="pro-r-tag">${t}</span>`).join('');

  const contactHTML = subscriber
    ? `<button class="btn-contact" onclick="contactPro('${p.name.replace(/'/g, "\\'")}')">
         <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.89 9.11a19.79 19.79 0 01-3.07-8.67A2 2 0 012.81 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l.96-.96a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 17.92z"/></svg>
         Contatar prestador
       </button>`
    : `<button class="btn-contact-locked" onclick="openSubscribeModal()">
         <span class="lock-overlay">
           <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
           Contatar prestador
         </span>
       </button>
       <p class="subscribe-hint">
         <a href="#" onclick="openSubscribeModal();return false;">Assine</a> para desbloquear
       </p>`;

  return `
    <div class="pro-result-card" onclick="(function(e){if(!e.target.closest('.contact-btn-wrap'))window.location.href='prestador-perfil.html?id='+encodeURIComponent('${p.name}');})(event)" style="cursor:pointer">
      <span class="pro-level-badge ${badge.cls}">${badge.label}</span>
      <div class="pro-r-avatar-wrap">
        <img src="${p.photo}" alt="${p.name}" loading="lazy"
          onerror="this.parentElement.innerHTML='<div class=pro-r-avatar-fallback>${p.name[0]}</div>'" />
      </div>
      <div class="pro-r-name">${p.name}</div>
      <div class="pro-r-role">${p.role}</div>
      <div class="pro-r-rating">
        <span class="stars">${stars}</span>
        <strong>${p.rating}</strong>
        <span>(${p.reviews} avaliações)</span>
      </div>
      <div class="pro-r-stats">
        <span>🔥 ${p.hires} contratações</span>
      </div>
      <div class="pro-r-location">📍 ${p.location}</div>
      <div class="pro-r-price">
        <strong>R$ ${p.priceBase}</strong>
        <small>por serviço (estimativa)</small>
      </div>
      <div class="pro-r-tags">${tagsHTML}</div>
      <div class="contact-btn-wrap">${contactHTML}</div>
    </div>`;
}

function renderResults(list) {
  const container = document.getElementById('resultsContainer');
  const countEl   = document.getElementById('resultsCount');

  countEl.textContent = `${list.length} prestador${list.length !== 1 ? 'es' : ''} encontrado${list.length !== 1 ? 's' : ''}`;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="results-grid">
        <div class="empty-state">
          <div class="emoji">🔍</div>
          <h3>Nenhum prestador encontrado</h3>
          <p>Tente buscar por outro serviço ou ajuste os filtros.</p>
        </div>
      </div>`;
    return;
  }

  const groups = getGroupLabel(list, currentSort);
  let html = '';

  groups.forEach(group => {
    const members = list.filter(group.filter);
    if (members.length === 0) return;
    html += `<div class="result-group-title">${group.label}</div>`;
    html += `<div class="results-grid" style="margin-bottom:8px">`;
    members.forEach(p => { html += renderCard(p); });
    html += `</div>`;
  });

  container.innerHTML = html;
}

// ── Busca na página ──────────────────────────────────────────────────────
function doNewSearch() {
  const val = document.getElementById('newSearchInput').value.trim();
  if (!val) { showToast('Digite um serviço para buscar 🔍', ''); return; }
  const params = new URLSearchParams({ q: val, city: '' });
  window.location.href = `resultados.html?${params.toString()}`;
}

// ── Modal de contato ─────────────────────────────────────────────────────
function contactPro(name) {
  const old = document.getElementById('contactModal');
  if (old) old.remove();

  const modal = document.createElement('div');
  modal.id = 'contactModal';
  modal.innerHTML = `
    <div class="modal-backdrop" onclick="closeContactModal()"></div>
    <div class="modal-box">
      <button class="modal-close" onclick="closeContactModal()">✕</button>
      <div class="modal-icon">📞</div>
      <h2 class="modal-title">Entrar em contato</h2>
      <p class="modal-desc">Você deseja contatar <strong>${name}</strong>.<br>Como prefere se comunicar?</p>
      <div class="modal-actions">
        <button class="btn-primary" onclick="showToast('Mensagem enviada para ${name}! ✉️','success'); closeContactModal()">
          ✉️ Enviar mensagem
        </button>

      </div>
      <p class="modal-note">Seus dados de contato serão compartilhados com o prestador.</p>
    </div>`;
  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('open'));
}

function closeContactModal() {
  const modal = document.getElementById('contactModal');
  if (!modal) return;
  modal.classList.remove('open');
  setTimeout(() => modal.remove(), 300);
}

// ── Modal assinatura ─────────────────────────────────────────────────────
function openSubscribeModal() {
  document.getElementById('subscribeModal').classList.add('open');
}
function closeSubscribeModal() {
  document.getElementById('subscribeModal').classList.remove('open');
}
function selectPlan(el) {
  document.querySelectorAll('.sub-plan').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
}
function subscribeNow() {
  try {
    const user = JSON.parse(sessionStorage.getItem('resolveai_user') || '{}');
    user.subscriber = true;
    sessionStorage.setItem('resolveai_user', JSON.stringify(user));
  } catch {}
  closeSubscribeModal();
  showToast('Assinatura ativada! 🎉 Agora você pode contatar prestadores.', 'success');
  setTimeout(() => applyFilters(), 600);
}

// ── Menu usuário ─────────────────────────────────────────────────────────
function toggleUserMenu() {
  document.getElementById('userMenu')?.classList.toggle('open');
}
document.addEventListener('click', e => {
  const av = document.getElementById('userAvatar');
  const mn = document.getElementById('userMenu');
  if (mn && av && !av.contains(e.target) && !mn.contains(e.target)) mn.classList.remove('open');
});
function toggleMobileMenu() {
  const links = document.querySelector('.navbar-links');
  if (!links) return;
  const open = links.style.display === 'flex';
  links.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:fixed;top:68px;left:0;right:0;background:white;padding:20px 24px;box-shadow:0 8px 24px rgba(0,0,0,.12);z-index:99;gap:4px;';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeContactModal(); closeSubscribeModal(); }
});

// ── Init ──────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const userEl = document.getElementById('userNameNav');
  if (userEl) {
    try {
      const user = JSON.parse(sessionStorage.getItem('resolveai_user') || '{}');
      userEl.textContent = user?.name ? user.name.split(' ')[0] : 'Usuário';
    } catch { userEl.textContent = 'Usuário'; }
  }

  const params = new URLSearchParams(window.location.search);
  currentQuery  = params.get('q') || '';

  const termEl = document.getElementById('searchTermTitle');
  if (termEl) termEl.textContent = currentQuery || 'todos os serviços';

  const input = document.getElementById('newSearchInput');
  if (input && currentQuery) input.value = currentQuery;

  document.title = `Resolve Aí – ${currentQuery || 'Resultados'}`;

  filteredPros = searchProfessionals(currentQuery);
  applyFilters();

  document.getElementById('newSearchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') doNewSearch();
  });
});
